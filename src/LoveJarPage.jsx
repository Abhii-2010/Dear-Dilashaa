
import React, { useState } from "react";

const LoveJarPage = ({ onBack, onNext }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="lovejar-page">
      <div className="lovejar-glow glow-one"></div>
      <div className="lovejar-glow glow-two"></div>

      <header className="lovejar-topbar">
        <button className="lovejar-back" onClick={onBack}>
          ← Back
        </button>
        <span className="lovejar-count">07 / 12</span>
      </header>

      <main className="lovejar-content">
        <span className="lovejar-eyebrow">A LITTLE SOMETHING FOR YOU ♡</span>

        <h1>
          A Jar Full of <span>Love</span>
        </h1>

        <p className="lovejar-subtitle">
          This jar has only one little thing inside...
          <br />
          but trust me, it's a special one. 💗
        </p>

        <div className={`lovejar-scene ${opened ? "jar-opened" : ""}`}>
          <div className="lovejar-sparkle sparkle-one">✦</div>
          <div className="lovejar-sparkle sparkle-two">✧</div>
          <div className="lovejar-sparkle sparkle-three">♡</div>

          <div className="lovejar-lid"></div>

          <div className="lovejar-glass">
            <div className="lovejar-glass-shine"></div>
            <div className="lovejar-heart heart-one">♡</div>
            <div className="lovejar-heart heart-two">♥</div>
            <div className="lovejar-heart heart-three">♡</div>

            <button
              className="lovejar-single-note"
              onClick={() => setOpened(true)}
              aria-label="Open the special note"
              disabled={opened}
            >
              <span className="note-fold"></span>
              <span className="note-heart">♡</span>
              <span className="note-tap">
                {opened ? "OPENED ♡" : "OPEN ME"}
              </span>
            </button>

            <div className="lovejar-label">
              <span>FOR DILASHAA</span>
              <small>with lots of love ♡</small>
            </div>
          </div>

          <div className="lovejar-base"></div>
          <div className="lovejar-shadow"></div>
        </div>

        {!opened ? (
          <div className="lovejar-invitation">
            <p>There's just one note waiting for you...</p>
            <button
              className="lovejar-open-btn"
              onClick={() => setOpened(true)}
            >
              Open your little surprise ♡
            </button>
          </div>
        ) : (
          <section className="lovejar-reveal">
            <span className="lovejar-note-tag">THE GREATEST PLOT TWIST 💌</span>

            <h2>Acchaaa hua voo Baunaa nikall liyaa! 😭💀</h2>

            <p>
              Matlab sochooo, agar woh Baunaa nahi nikalta toh shayad itni
              saari cute conversations, itni saari bakchodi aur ye saari
              beautiful memories kabhi hoti hi nahi. 😂
            </p>

            <p>
              Kabhi-kabhi life mein kuch cheezein hatna bhi zaroori hota hai,
              taaki kuch achha aa sake. Aur iss baar toh honestly, universe ne
              kaafi achha kaam kiya. 😭
            </p>

            <p>
              So thank you, Baunaa ji, indirectly itna achha plot twist dene
              ke liye. Aapka contribution yaad rakha jayega. 💀😂
            </p>

            <div className="lovejar-signature">— Bubu 💗</div>

            <button className="lovejar-next-btn" onClick={onNext}>
              Continue our little story →
            </button>
          </section>
        )}
      </main>
    </div>
  );
};

export default LoveJarPage;
