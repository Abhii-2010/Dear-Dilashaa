import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
} from "lucide-react";

// Video and frame assets served from public folder
const REEL_SRC = "/dilashaa-reel.mp4";
const FRAME_SRC = "/queen-reel-frame.png";

export default function ReelPage({ onBack, onNext }) {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1);
  const [floatingHearts, setFloatingHearts] = useState([]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Web browsers require video to be muted for automatic playback
    video.muted = true;
    setIsMuted(true);

    const tryAutoplay = async () => {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (err) {
        console.log("Autoplay paused by browser policy:", err);
        setIsPlaying(false);
      }
    };

    tryAutoplay();

    return () => {
      video.pause();
    };
  }, []);

  const togglePlay = (e) => {
    e?.stopPropagation?.();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setVideoError(true));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e?.stopPropagation?.();
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    // If currently paused, tapping sound also plays the reel
    if (video.paused) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => { });
    }
  };

  const handleReplay = (e) => {
    e?.stopPropagation?.();
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => { });
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleProgressClick = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    video.currentTime = ratio * video.duration;
    setProgress(ratio * 100);
  };

  const spawnHeart = (xPercent = 50, yPercent = 50) => {
    const newHeart = {
      id: Date.now() + Math.random(),
      x: xPercent + (Math.random() * 20 - 10),
      y: yPercent + (Math.random() * 20 - 10),
    };
    setFloatingHearts((prev) => [...prev.slice(-8), newHeart]);

    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1200);
  };

  const handleLike = (e) => {
    e?.stopPropagation?.();
    setLiked((prev) => {
      const next = !prev;
      setLikeCount((c) => (next ? c + 1 : c - 1));
      return next;
    });
    spawnHeart(50, 60);
  };

  const handleWindowClick = (e) => {
    togglePlay(e);
    spawnHeart(50, 50);
  };

  return (
    <main className="queen-reel-page">
      {/* DREAMY BACKGROUND GLOWS */}
      <div className="queen-reel-glow glow-one" />
      <div className="queen-reel-glow glow-two" />

      <div className="queen-floating-hearts" aria-hidden="true">
        ♡ <span>✦</span> ♥ <span>♡</span> ✧ <span>♥</span>
      </div>

      {/* HEADER */}
      <header className="queen-reel-header">
        <button className="queen-back" onClick={onBack}>
          <ArrowLeft size={16} />
          Back
        </button>

        <span>
          DEAR DILASHAA
          <Heart size={13} fill="currentColor" />
        </span>

        <span className="queen-page-count">09 / 11 ♡</span>
      </header>

      {/* MAIN CONTENT */}
      <section className="queen-reel-content">
        <div className="queen-reel-heading">
          <span>✦ A LITTLE SOMETHING FOR MY QUEEN ✦</span>

          <h1>
            Meri Banogi <em>Kya?</em> ♡
          </h1>

          <p>One little reel, wrapped in a whole lot of love.</p>
        </div>

        {/* ROYAL FRAME CONTAINER */}
        <div className="queen-frame">
          {/* VIDEO INSIDE FRAME SCREEN CUTOUT */}
          <div
            className="queen-video-window"
            onClick={handleWindowClick}
            title={isPlaying ? "Click to pause" : "Click to play"}
          >
            {!videoError ? (
              <>
                <video
                  ref={videoRef}
                  className="queen-video"
                  src={REEL_SRC}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  preload="auto"
                  onTimeUpdate={handleTimeUpdate}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onError={() => {
                    if (videoRef.current && !videoRef.current.src.includes(".mp4.mp4")) {
                      videoRef.current.src = "/dilashaa-reel.mp4.mp4";
                      videoRef.current.play().catch(() => {});
                    } else {
                      setVideoError(true);
                    }
                  }}
                />

                {/* PAUSED PLAY BUTTON OVERLAY */}
                {!isPlaying && (
                  <div className="queen-play-overlay">
                    <div className="queen-play-bubble">
                      <Play size={26} fill="currentColor" style={{ marginLeft: "3px" }} />
                    </div>
                  </div>
                )}

                {/* FLOATING SOUND BADGE */}
                <button
                  type="button"
                  className={`queen-sound-badge ${isMuted ? "is-muted" : "is-active"}`}
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute reel" : "Mute reel"}
                >
                  {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                  <span>{isMuted ? "Tap for sound" : "Sound on"}</span>
                </button>

                {/* PROGRESS BAR */}
                <div
                  className="queen-progress-container"
                  onClick={handleProgressClick}
                  title="Click to seek"
                >
                  <div
                    className="queen-progress-fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* FLOATING BURST HEARTS */}
                {floatingHearts.map((heart) => (
                  <span
                    key={heart.id}
                    className="queen-floating-heart-burst"
                    style={{
                      left: `${heart.x}%`,
                      top: `${heart.y}%`,
                    }}
                  >
                    ❤️
                  </span>
                ))}
              </>
            ) : (
              <div className="queen-video-error">
                <span>♡</span>
                <p>Our little movie couldn't load.</p>
                <small>Check dilashaa-reel.mp4 in the public folder</small>
              </div>
            )}
          </div>

          {/* ROYAL FRAME ART (OVERLAY WITH TRANSPARENT CUTOUT) */}
          <img
            className="queen-frame-art"
            src={FRAME_SRC}
            alt="A royal pink frame made for Dilashaa"
            onError={(e) => {
              if (!e.currentTarget.src.includes(".png.png")) {
                e.currentTarget.src = "/queen-reel-frame.png.png";
              }
            }}
          />
        </div>

        {/* QUICK CONTROL TOOLBAR */}
        <div className="queen-toolbar">
          <button
            type="button"
            className="queen-tool-button"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            <span>{isPlaying ? "Pause" : "Play"}</span>
          </button>

          <button
            type="button"
            className={`queen-tool-button ${!isMuted ? "sound-active" : ""}`}
            onClick={toggleMute}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            <span>{isMuted ? "Turn Sound On" : "Mute Sound"}</span>
          </button>

          <button
            type="button"
            className="queen-tool-button"
            onClick={handleReplay}
          >
            <RotateCcw size={14} />
            <span>Replay</span>
          </button>

          <button
            type="button"
            className={`queen-tool-button heart-button ${liked ? "is-liked" : ""}`}
            onClick={handleLike}
          >
            <Heart size={14} fill={liked ? "currentColor" : "none"} />
            <span>{liked ? "Loved ♡" : "Send Love"}</span>
          </button>
        </div>

        {/* PLAYBACK STATUS CAPTION */}
        <div className="queen-reel-caption">
          <span className="queen-live-dot" />
          {isPlaying
            ? isMuted
              ? "Playing silently · Tap for sound ♡"
              : "Playing with music · Enjoy your reel ♡"
            : "Paused · Tap video or Play to watch ♡"}
        </div>

        <p className="queen-bottom-note">
          Made for you, my favourite little sunshine. ♡
        </p>

        {/* BOTTOM NAVIGATION */}
        <div className="queen-navigation">
          <button onClick={onBack}>
            <ArrowLeft size={15} />
            Back to Sunflowers
          </button>

          <button onClick={onNext}>
            Next surprise: 3 Doors
            <ArrowRight size={15} />
          </button>
        </div>
      </section>
    </main>
  );
}
