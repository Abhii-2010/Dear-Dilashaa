import React, { useEffect, useRef, useState } from "react";
import "./BackgroundMusic.css";

const MUSIC_SRC = "/i-met-her-again.mp3";

export default function BackgroundMusic({ musicOn, setMusicOn, currentPage }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Keep volume in valid range [0.0, 1.0] and adapt if on video reel pages
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Gentle volume reduction on video reel pages (page 9 and 12)
        const targetVolume = (currentPage === 9 || currentPage === 12) ? 0.2 : 0.5;
        audio.volume = targetVolume;
    }, [currentPage]);

    // Handle auto-start on first user interaction
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const startAudio = () => {
            audio
                .play()
                .then(() => {
                    setIsPlaying(true);
                    if (setMusicOn) setMusicOn(true);
                })
                .catch((err) => {
                    console.log("Audio autoplay prevented by browser policy:", err);
                });
        };

        // Try playing immediately
        audio
            .play()
            .then(() => {
                setIsPlaying(true);
                if (setMusicOn) setMusicOn(true);
            })
            .catch(() => {
                // Browser requires gesture — listen once for user interaction
                window.addEventListener("click", startAudio, { once: true });
                window.addEventListener("touchstart", startAudio, { once: true });
                window.addEventListener("keydown", startAudio, { once: true });
            });

        return () => {
            window.removeEventListener("click", startAudio);
            window.removeEventListener("touchstart", startAudio);
            window.removeEventListener("keydown", startAudio);
        };
    }, []);

    // Sync with musicOn prop
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (musicOn && audio.paused) {
            audio
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => { });
        } else if (musicOn === false && !audio.paused) {
            audio.pause();
            setIsPlaying(false);
        }
    }, [musicOn]);

    const toggleMusic = (e) => {
        e?.stopPropagation?.();
        const audio = audioRef.current;
        if (!audio) return;

        if (audio.paused) {
            audio
                .play()
                .then(() => {
                    setIsPlaying(true);
                    if (setMusicOn) setMusicOn(true);
                })
                .catch((err) => console.log("Play failed:", err));
        } else {
            audio.pause();
            setIsPlaying(false);
            if (setMusicOn) setMusicOn(false);
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                src={MUSIC_SRC}
                loop
                preload="auto"
                onPlay={() => {
                    setIsPlaying(true);
                    if (setMusicOn) setMusicOn(true);
                }}
                onPause={() => {
                    setIsPlaying(false);
                }}
            />

            <button
                type="button"
                className={`floating-music-pill ${isPlaying ? "is-playing" : "is-muted"}`}
                onClick={toggleMusic}
                aria-label={isPlaying ? "Mute background music" : "Play background music"}
                title={isPlaying ? "Playing: I Met Her Again (Click to mute)" : "Click to play background music"}
            >
                <span className="floating-music-icon">{isPlaying ? "♫" : "✕"}</span>
                <span>{isPlaying ? "Music on" : "Music off"}</span>
                {isPlaying && <span className="floating-music-waves">~</span>}
            </button>
        </>
    );
}
