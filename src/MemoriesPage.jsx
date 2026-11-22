
import React, { useEffect, useState } from "react";

const memories = [
  "Kabhi socha nahi tha ki kuch random conversations itni special ban jayengi.",
  "Woh chhoti-chhoti baatein, bina kisi reason ke hasna, ek doosre ko tease karna...",
  "Kabhi-kabhi bas tumhara ek message hi poora mood achha kar deta hai.",
  "Shayad memories hamesha photos mein capture nahi hoti. Kuch memories bas dil mein reh jaati hain.",
  "Aur mujhe khushi hai ki meri kuch favourite memories mein tum ho. ❤️",
];

export default function MemoriesPage({ onBack, onNext, musicOn, setMusicOn }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`memories-page ${visible ? "memories-visible" : ""}`}>
      <div className="memories-glow glow-one" />
      <div className="memories-glow glow-two" />

      <div className="memories-topbar">
        <button className="memories-back" onClick={onBack}>
          ← Back
        </button>

        <span className="memories-brand">
          <span>♡</span> Dear Dilashaa
        </span>

        <span className="memories-count">04 / 15</span>
      </div>

      <section className="memories-content">
        <div className="memories-icon">🎀</div>

        <p className="memories-eyebrow">A LITTLE CORNER OF MY HEART</p>

        <h1>
          Some memories are
          <br />
          made of <span>little things ♡</span>
        </h1>

        <p className="memories-for">A little something for Dilashaa</p>

        <div className="memories-divider">
          <span>♡</span>
        </div>

        <div className="memories-message">
          {memories.map((memory, index) => (
            <p
              key={index}
              className="memory-line"
              style={{ "--delay": `${0.5 + index * 0.65}s` }}
            >
              {memory}
            </p>
          ))}
        </div>

        <div className="memories-ending">
          <span className="ending-sparkle">✦</span>
          <h2>And the best part?</h2>
          <p>We're still making them. 🥹</p>
          <span className="ending-heart">♡</span>
        </div>

        <p className="memories-signature">— Bubu 💗</p>

        <div className="memories-actions">
          <button className="memories-next" onClick={onNext}>
            What's next? <span>→</span>
          </button>
        </div>
      </section>

      <div className="memories-floating-heart heart-one">♡</div>
      <div className="memories-floating-heart heart-two">♥</div>
      <div className="memories-floating-heart heart-three">♡</div>
      <div className="memories-floating-heart heart-four">✦</div>
    </main>
  );
}
