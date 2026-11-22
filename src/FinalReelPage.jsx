
import React, { useRef, useState } from "react";
import "./FinalReelPage.css";

const REEL_SRC = "/Video-98134.mp4";

export default function FinalReelPage({ onBack }) {
    const videoRef = useRef(null);
    const [muted, setMuted] = useState(false);
    const [playing, setPlaying] = useState(true);

    const toggleSound = () => {
        if (!videoRef.current) return;

        const nextMuted = !muted;
        videoRef.current.muted = nextMuted;
        setMuted(nextMuted);

        if (videoRef.current.paused) {
            videoRef.current.play().catch(() => { });
        }
    };

    const togglePlayback = async () => {
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            try {
                await videoRef.current.play();
                setPlaying(true);
            } catch (error) {
                console.log("Playback could not start", error);
            }
        } else {
            videoRef.current.pause();
            setPlaying(false);
        }
    };

    return (
        <main className="final-reel-page">

            {/* Dreamy background */}
            <video
                className="final-reel-bg"
                src={REEL_SRC}
                autoPlay
                muted
                loop
                playsInline
            />

            <div className="final-reel-overlay" />

            {/* Back button */}
            <button className="final-back" onClick={onBack}>
                ← Back
            </button>

            {/* Main two-column layout */}
            <section className="final-content">

                {/* LEFT — Thank you letter */}
                <div className="final-letter">

                    <div className="letter-top">
                        <span className="letter-sparkle">✧</span>
                        A LITTLE NOTE FROM ME
                        <span className="letter-sparkle">✧</span>
                    </div>

                    <h1>
                        Before this
                        <span> ends...</span>
                    </h1>

                    <div className="letter-divider">
                        <span>♡</span>
                    </div>

                    <p>
                        Thank youuu for being the reason behind this
                        little world I created.
                    </p>

                    <p>
                        For every smile, every laugh, every silly little
                        moment, and all the memories that made me want
                        to put together these 12 little slides.
                    </p>

                    <p>
                        From Bubu & Dudu to the letters, flowers,
                        little surprises and all the things in between —
                        every bit of this was made with a smile,
                        just thinking about you.
                    </p>

                    <p>
                        I don't know if words can ever explain how much
                        all these little moments mean, but I hope this
                        tiny corner of the internet made you smile,
                        even for a little while.
                    </p>

                    <div className="letter-ending">
                        <h2>Thank you for being you.</h2>
                        <span>Always. ♡</span>
                    </div>

                    <div className="letter-signature">
                        With lots of love,
                        <strong>Someone who made all this just for you ♡</strong>
                    </div>

                    <div className="letter-bottom-heart">♡</div>
                </div>

                {/* RIGHT — Royal landscape reel */}
                <div className="final-reel-stage">

                    <div className="reel-glow" />

                    <div className="reel-frame">

                        <div className="reel-frame-inner">

                            <video
                                ref={videoRef}
                                className="final-reel-video"
                                src={REEL_SRC}
                                autoPlay
                                muted={muted}
                                loop
                                playsInline
                                onPlay={() => setPlaying(true)}
                                onPause={() => setPlaying(false)}
                            />

                            <div className="reel-shine" />

                        </div>

                        <span className="frame-corner top-left">✧</span>
                        <span className="frame-corner top-right">♡</span>
                        <span className="frame-corner bottom-left">♡</span>
                        <span className="frame-corner bottom-right">✧</span>

                    </div>

                    <div className="reel-caption">
                        <span>♡</span>
                        <p>One last little something for you</p>
                        <span>♡</span>
                    </div>

                </div>

            </section>

            {/* Video controls */}
            <div className="final-reel-controls">

                <button onClick={togglePlayback}>
                    {playing ? "Ⅱ" : "▶"}
                    <span>{playing ? "Pause" : "Play"}</span>
                </button>

                <button onClick={toggleSound}>
                    {muted ? "♪" : "♫"}
                    <span>{muted ? "Sound on" : "Sound off"}</span>
                </button>

            </div>

            {/* Floating decorations */}
            <div className="final-floating-hearts">
                ♡ <span>✧</span> ♡ <span>✦</span> ♡
            </div>

        </main>
    );
}
