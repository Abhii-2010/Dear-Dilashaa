import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import "./DoorWorldPage.css";

const CAT_VIDEO = "/dancing-cat.mp4";
const SIDE_EYE_CAT = "/side-eye-cat.png";

function GreenScreenCat({ src }) {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d", {
            willReadFrequently: true,
        });

        if (!video || !canvas || !ctx) return;

        let animationId;

        const render = () => {
            try {
                if (video.videoWidth && video.videoHeight) {
                    if (
                        canvas.width !== video.videoWidth ||
                        canvas.height !== video.videoHeight
                    ) {
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;
                    }

                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                    const frame = ctx.getImageData(
                        0, 0, canvas.width, canvas.height
                    );
                    const pixels = frame.data;

                    for (let i = 0; i < pixels.length; i += 4) {
                        const r = pixels[i];
                        const g = pixels[i + 1];
                        const b = pixels[i + 2];

                        // Remove green screen while preserving the cat.
                        const greenStrength = g - Math.max(r, b);

                        if (g > 65 && greenStrength > 28) {
                            pixels[i + 3] = 0;
                        } else if (greenStrength > 12 && g > 75) {
                            pixels[i + 3] = Math.max(
                                0,
                                255 - (greenStrength - 12) * 10
                            );
                        }
                    }

                    ctx.putImageData(frame, 0, 0);
                }
            } catch (err) {
                console.log("Canvas chromakey render warning:", err);
            }

            animationId = requestAnimationFrame(render);
        };

        video.muted = true;
        video.loop = true;
        video.playsInline = true;

        video.play().catch(() => { });
        render();

        return () => {
            cancelAnimationFrame(animationId);
            video.pause();
        };
    }, [src]);

    return (
        <div className="cat-stage">
            <video
                ref={videoRef}
                src={src}
                muted
                loop
                playsInline
                preload="auto"
                className="cat-source"
                onError={() => {
                    if (videoRef.current && !videoRef.current.src.includes(".mp4.mp4")) {
                        videoRef.current.src = "/dancing-cat.mp4.mp4";
                        videoRef.current.play().catch(() => {});
                    }
                }}
            />
            <canvas ref={canvasRef} className="cat-canvas" />
        </div>
    );
}

export default function DoorWorldPage({ onBack, onNext }) {
    const [openedDoor, setOpenedDoor] = useState(null);

    const closeDoor = () => setOpenedDoor(null);

    return (
        <main className="door-world-page">
            <header className="door-header">
                <button onClick={onBack}>
                    <ArrowLeft size={17} /> Back
                </button>
                <span>DEAR DILASHAA ♡</span>
                <span>10 / 11</span>
            </header>

            <section className="door-content">
                <div className="door-heading">
                    <span>✦ THREE LITTLE MYSTERIES ✦</span>
                    <h1>A Little World <em>of You</em> ♡</h1>
                    <p>Three doors. Three surprises. Choose one!</p>
                </div>

                <div className="door-grid">
                    {[1, 2, 3].map((door) => (
                        <button
                            className={`magic-door door-${door}`}
                            key={door}
                            onClick={() => setOpenedDoor(door)}
                        >
                            <span className="door-number">0{door}</span>
                            <span className="door-knob" />
                            <span className="door-open-hint">OPEN ME ♡</span>
                        </button>
                    ))}
                </div>

                <p className="door-bottom-text">
                    Psst... you have no idea what's behind them. ♡
                </p>

                <button className="door-next" onClick={onNext}>
                    Next: A Little Note ♡ <ArrowRight size={16} />
                </button>
            </section>

            {openedDoor !== null && (
                <div className="door-surprise-overlay">
                    <button
                        className="door-close"
                        onClick={closeDoor}
                        aria-label="Close surprise"
                    >
                        <X />
                    </button>

                    <div className="door-surprise">
                        {openedDoor === 1 && (
                            <>
                                <span className="surprise-label">
                                    THE DANCING LEGEND
                                </span>
                                <h2>LOOK AT THIS BILLI 😭</h2>
                                <GreenScreenCat src={CAT_VIDEO} />
                            </>
                        )}

                        {openedDoor === 2 && (
                            <div className="somewhere-message">
                                <h2>Now I live somewhere else</h2>
                                <span>🥺👉👈</span>
                            </div>
                        )}

                        {openedDoor === 3 && (
                            <>
                                <span className="surprise-label">
                                    THE JUDGEMENTAL ONE
                                </span>
                                <h2>She knows everything. 💀</h2>
                                <img
                                    className="side-eye-cat"
                                    src={SIDE_EYE_CAT}
                                    alt="A dramatic side-eye cat"
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
}
