
import React, { useEffect, useState } from "react";
import "./ThankYouPage.css";

export default function ThankYouPage({ onBack, onNext }) {
    const [showFirst, setShowFirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [showFinal, setShowFinal] = useState(false);

    useEffect(() => {
        const first = setTimeout(() => setShowFirst(true), 700);
        const second = setTimeout(() => setShowSecond(true), 2800);
        const final = setTimeout(() => setShowFinal(true), 4700);

        return () => {
            clearTimeout(first);
            clearTimeout(second);
            clearTimeout(final);
        };
    }, []);

    return (
        <main className="thankyou-page">
            <div className="thankyou-glow glow-one" />
            <div className="thankyou-glow glow-two" />
            <div className="thankyou-glow glow-three" />

            <div className="thankyou-particles">
                {Array.from({ length: 32 }, (_, i) => (
                    <span
                        key={i}
                        className="thankyou-particle"
                        style={{
                            left: `${(i * 37.17) % 100}%`,
                            top: `${(i * 61.73) % 100}%`,
                            animationDelay: `${(i % 12) * 0.35}s`,
                            animationDuration: `${3 + (i % 5)}s`,
                        }}
                    >
                        {i % 4 === 0 ? "♡" : i % 3 === 0 ? "✦" : "·"}
                    </span>
                ))}
            </div>

            <header className="thankyou-header" style={{ position: "absolute", top: "18px", left: "0", right: "0", display: "flex", justifyContent: "space-between", padding: "0 28px", fontSize: "11px", fontWeight: "700", letterSpacing: "2px", color: "#a76a86" }}>
                <button onClick={onBack} style={{ background: "transparent", border: "none", color: "inherit", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}>
                    ← Back
                </button>
                <span>DEAR DILASHAA ♡</span>
                <span>11 / 12</span>
            </header>

            <section className="thankyou-content">
                <div className={`thankyou-small-heart ${showFirst ? "show" : ""}`}>
                    ♡
                </div>

                <p className={`thankyou-topline ${showFirst ? "show" : ""}`}>
                    A LITTLE NOTE BEFORE THE LAST ONE
                </p>

                <h1 className={`thankyou-main-text ${showSecond ? "show" : ""}`}>
                    Thenkuuuu
                    <br />
                    <span>sooo muuuchhhh</span>
                    <span className="thankyou-heart">♡</span>
                </h1>

                <div className={`thankyou-divider ${showSecond ? "show" : ""}`}>
                    <span />
                    ✦
                    <span />
                </div>

                <p className={`thankyou-description ${showSecond ? "show" : ""}`}>
                    For every little moment, every smile,
                    <br />
                    and for being a part of this little surprise.
                </p>

                <div className={`thankyou-last-slide ${showFinal ? "show" : ""}`}>
                    <span className="last-slide-sparkle">✧</span>
                    <p>And now...</p>
                    <h2>One last slide for uuu</h2>
                    <span className="last-slide-heart">♡</span>
                </div>
            </section>

            <div className="thankyou-bottom-text">
                MADE WITH A LITTLE EXTRA LOVE
            </div>

            <nav className="thankyou-navigation">
                <button onClick={onBack}>← Back to Doors</button>
                <button onClick={onNext}>One last surprise ♡ →</button>
            </nav>
        </main>
    );
}
