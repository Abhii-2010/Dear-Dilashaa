import React, { useState } from "react";

const specialReasons = [
  {
    emoji: "🌷",
    title: "Your Beautiful Smile",
    subtitle: "A smile that changes everything",
    message:
      "You probably don't realise how beautiful your smile is. But trust me, it has this little magic that can make an ordinary moment feel special."
  },
  {
    emoji: "🎀",
    title: "Your Cute Little Habits",
    subtitle: "The little things that make you YOU",
    message:
      "It's the little things about you, your expressions, your reactions and your tiny habits. Those are the things that make you so adorable."
  },
  {
    emoji: "💗",
    title: "Your Kind Heart",
    subtitle: "A heart that's genuinely beautiful",
    message:
      "The way you care, the way you understand and the little kindness you show. Your heart is one of the most beautiful things about you."
  },
  {
    emoji: "🥹",
    title: "You Make Me Smile",
    subtitle: "Even without trying",
    message:
      "Sometimes it's just one message, one random conversation or one silly moment. Somehow, you have a way of making my day better."
  },
  {
    emoji: "✨",
    title: "Your Unique Personality",
    subtitle: "There is only one Dilashaa",
    message:
      "You're a whole combination of cute, funny, unpredictable and special. And honestly, that's what makes you different from everyone else."
  },
  {
    emoji: "❤️",
    title: "Just Being YOU",
    subtitle: "My favourite reason of all",
    message:
      "You don't have to do anything extraordinary to be special. You being yourself is already enough. Never change that beautiful part of you."
  }
];

export default function SpecialPage({ onBack, onNext }) {
  const [openedCards, setOpenedCards] = useState([]);

  const openCard = (index) => {
    if (!openedCards.includes(index)) {
      setOpenedCards((previous) => [...previous, index]);
    }
  };

  const allOpened = openedCards.length === specialReasons.length;

  return (
    <main className="special-page">
      <div className="special-glow special-glow-one" />
      <div className="special-glow special-glow-two" />

      <div className="special-floating-heart heart-one">♡</div>
      <div className="special-floating-heart heart-two">♥</div>
      <div className="special-floating-heart heart-three">♡</div>
      <div className="special-floating-heart heart-four">✦</div>
      <div className="special-floating-heart heart-five">♥</div>

      <header className="special-topbar">
        <button className="special-back" onClick={onBack}>
          ← Back
        </button>

        <div className="special-brand">
          <span>♡</span> Dear Dilashaa
        </div>

        <div className="special-page-number">06 / 15</div>
      </header>

      <section className="special-content">
        <div className="special-heading">
          <div className="special-eyebrow">
            A LITTLE REMINDER FOR YOU
          </div>

          <h1>
            Why You're So <span>Special</span>
          </h1>

          <p>
            Six little reasons, and a million more that words
            could never fully explain. 💗
          </p>
        </div>

        <div className="special-progress">
          <div className="special-progress-text">
            <span>Little things about you</span>
            <span>{openedCards.length} / 6 discovered</span>
          </div>

          <div className="special-progress-track">
            <div
              className="special-progress-fill"
              style={{
                width: `${(openedCards.length / 6) * 100}%`
              }}
            />
          </div>
        </div>

        <div className="special-card-grid">
          {specialReasons.map((reason, index) => {
            const isOpened = openedCards.includes(index);

            return (
              <button
                key={index}
                className={`special-card ${isOpened ? "is-opened" : ""}`}
                onClick={() => openCard(index)}
                aria-label={`Reveal ${reason.title}`}
              >
                <div className="special-card-inner">
                  {!isOpened ? (
                    <div className="special-card-front">
                      <div className="special-card-number">
                        0{index + 1}
                      </div>

                      <div className="special-card-icon">
                        {reason.emoji}
                      </div>

                      <h3>A Little Secret</h3>
                      <p>Tap to discover ♡</p>

                      <span className="special-card-plus">+</span>
                    </div>
                  ) : (
                    <div className="special-card-reveal">
                      <div className="special-reveal-emoji">
                        {reason.emoji}
                      </div>

                      <h3>{reason.title}</h3>
                      <span className="special-card-subtitle">
                        {reason.subtitle}
                      </span>

                      <p>{reason.message}</p>

                      <span className="special-card-heart">♡</span>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {allOpened ? (
          <div className="special-final-message">
            <div className="special-final-heart">💗</div>

            <h2>And that's not even half of it...</h2>

            <p>
              There are a thousand little things that make you
              special, Dilashaa. I just hope you never forget
              how wonderful you are.
            </p>

            <span>— Bubu, with lots of love ♡</span>

            <button
              className="special-next-button"
              onClick={onNext}
            >
              Continue our little story <span>→</span>
            </button>
          </div>
        ) : (
          <div className="special-bottom-note">
            <span>♡</span> Open all six little secrets to continue
            <span>♡</span>
          </div>
        )}
      </section>
    </main>
  );
}