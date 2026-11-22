
import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Sparkles,
  Shuffle,
  Gift,
} from "lucide-react";

const compliments = [
  "Your smile has its own little magic.",
  "You make ordinary conversations feel special.",
  "Your cuteness should honestly be illegal. 😭",
  "You have the sweetest way of making someone feel important.",
  "Your laugh is one of my favourite sounds.",
  "You make even random moments memorable.",
  "You are prettier than you probably realise.",
  "Your little reactions are absolutely adorable.",
  "You have a beautiful heart.",
  "You make the world feel a little softer. 💗",

  "Your way of talking is something else.",
  "You can make me smile without even trying.",
  "You are effortlessly adorable.",
  "Your presence makes a difference.",
  "You have a talent for making boring days better.",
  "You are a whole mood, madam. 😭",
  "Your eyes deserve their own appreciation post.",
  "You are sweeter than your favourite dessert.",
  "You make little things feel meaningful.",
  "You are someone's favourite notification. Mine, obviously. ❤️",

  "You have the cutest expressions.",
  "You are beautiful inside and out.",
  "Your happiness is contagious.",
  "You make silence comfortable too.",
  "You have a lovely way of being yourself.",
  "You are impossible not to adore.",
  "Your random talks are never actually random to me.",
  "You deserve all the happiness in the universe.",
  "You have a special place in my little world.",
  "You are my favourite kind of surprise. 🎀",

  "You make even a simple hello feel special.",
  "You are a walking bundle of cuteness.",
  "You have the prettiest energy.",
  "You make people feel seen and heard.",
  "Your silly side is one of the best sides.",
  "You are more special than words can explain.",
  "You make little moments worth remembering.",
  "You have a smile worth waiting for.",
  "You are a beautiful reason to be grateful.",
  "You are genuinely one of a kind. 💗",

  "You make my day better just by being in it.",
  "Your voice has its own charm.",
  "You are cute even when you're being dramatic.",
  "You have a heart worth protecting.",
  "You make every conversation a little brighter.",
  "You are a masterpiece without even trying.",
  "Your happiness matters more than you know.",
  "You have the best kind of silly energy.",
  "You make being your friend feel special.",
  "You are a little sunshine on cloudy days. ☀️",

  "You are prettier than all the pink sunsets.",
  "Your kindness is quietly beautiful.",
  "You have a smile that deserves a thousand pictures.",
  "You make the simplest things exciting.",
  "You are the definition of adorable chaos.",
  "You deserve the softest kind of love.",
  "You have a way of making people feel at home.",
  "You are precious, even on your worst days.",
  "You make memories without even knowing it.",
  "You are a favourite chapter in my story. ❤️",

  "You are the cutest distraction ever.",
  "Your little habits are secretly adorable.",
  "You deserve compliments every single day.",
  "You make everything feel a little more colourful.",
  "You have a heart full of beautiful things.",
  "You are worth every extra smile.",
  "Your personality is as lovely as your smile.",
  "You make random days feel like occasions.",
  "You are a rare kind of wonderful.",
  "You are my favourite notification to see. 😭",

  "You make people feel lucky to know you.",
  "You are beautiful in ways you don't even notice.",
  "You deserve a lifetime of good surprises.",
  "You make even teasing feel affectionate.",
  "You have a magical little presence.",
  "You are the human version of a warm hug.",
  "You make my world a little happier.",
  "You are more than just pretty.",
  "You have a heart that deserves the world.",
  "You are someone's favourite person for a reason. 💗",

  "You are a perfect mix of cute and crazy.",
  "Your smile can fix a surprisingly bad day.",
  "You make every little memory worth keeping.",
  "You are one of life's sweetest surprises.",
  "You deserve to be appreciated, always.",
  "You make ordinary days extraordinary.",
  "You are lovely even when you don't feel like it.",
  "You have a beautiful soul.",
  "You are special without having to prove anything.",
  "You make this little world of mine brighter. ❤️",

  "You are my favourite kind of unexpected.",
  "You make me grateful for random coincidences.",
  "You are worth all the effort and all the words.",
  "You deserve every flower in every garden.",
  "You are beautiful, even in your simplest moments.",
  "You make the word special feel insufficient.",
  "You are someone I hope life always treats kindly.",
  "You have made so many ordinary moments unforgettable.",
  "You are genuinely appreciated more than you know.",
  "And my favourite thing about you? Simply being YOU. 🥹❤️",
];

export default function ComplimentsPage({ onBack, onNext }) {
  const [revealed, setRevealed] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const progress = revealed.length;
  const isComplete = progress === 100;
  const isTenth = currentIndex >= 0 && (currentIndex + 1) % 10 === 0;

  const revealNext = () => {
    const nextIndex = compliments.findIndex(
      (_, index) => !revealed.includes(index)
    );

    if (nextIndex === -1) return;

    setCurrentIndex(nextIndex);
    setRevealed((previous) => [...previous, nextIndex]);
  };

  const revealRandom = () => {
    const remaining = compliments
      .map((_, index) => index)
      .filter((index) => !revealed.includes(index));

    if (remaining.length === 0) return;

    const randomIndex =
      remaining[Math.floor(Math.random() * remaining.length)];

    setCurrentIndex(randomIndex);
    setRevealed((previous) => [...previous, randomIndex]);
  };

  return (
    <main className="compliments-page">
      <div className="compliment-glow glow-left" />
      <div className="compliment-glow glow-right" />

      <header className="compliments-topbar">
        <button className="compliment-back" onClick={onBack}>
          <ArrowLeft size={15} /> Back
        </button>

        <span className="compliment-brand">
          <Heart size={15} fill="currentColor" /> dear dilashaa
        </span>

        <span className="compliment-page-count">05 / 15</span>
      </header>

      <section className="compliments-content">
        <div className="compliment-heading-icon">
          <Gift size={29} />
        </div>

        <p className="compliment-eyebrow">
          A HUNDRED LITTLE REMINDERS
        </p>

        <h1>
          100 Little Things
          <br />
          <em>I Adore About You.</em>
        </h1>

        <p className="compliment-subtitle">
          Because one compliment could never be enough. ♡
        </p>

        <div className="compliment-progress">
          <div className="progress-label">
            <span>Your little collection</span>
            <strong>{progress} / 100</strong>
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div
          className={`compliment-stage ${isTenth ? "tenth-reveal" : ""}`}
          key={currentIndex}
        >
          {isComplete ? (
            <div className="compliment-finished">
              <div className="finished-hearts">💗 🎀 💗</div>
              <h2>That's 100!</h2>
              <p>
                100 little reasons, and still a million more left.
                I hope you never forget how special you are. 🥹
              </p>
              <span>Made with all my heart. ♡</span>
            </div>
          ) : currentIndex === -1 ? (
            <div className="compliment-empty">
              <span className="big-heart">♡</span>
              <h2>A little surprise awaits...</h2>
              <p>Ready to discover your first compliment?</p>
            </div>
          ) : (
            <>
              <span className="compliment-number">
                LITTLE REASON #{String(currentIndex + 1).padStart(2, "0")}
              </span>

              <div className="compliment-heart">♡</div>

              <h2>{compliments[currentIndex]}</h2>

              <span className="compliment-little-mark">✦</span>

              {isTenth && (
                <div className="bubu-celebration">
                  <span>🐻‍❄️</span>
                  <span>💗</span>
                  <span>🐻</span>
                  <p>Yayyy! {currentIndex + 1} reasons already! 🎉</p>
                </div>
              )}
            </>
          )}
        </div>

        {!isComplete && (
          <div className="compliment-controls">
            <button
              className="reveal-button"
              onClick={revealNext}
            >
              {progress === 0 ? "Reveal my first one" : "Next little reason"}
              <ArrowRight size={17} />
            </button>

            <button
              className="random-button"
              onClick={revealRandom}
              title="Reveal a random compliment"
            >
              <Shuffle size={15} /> Surprise me
            </button>
          </div>
        )}

        {isComplete && (
          <button className="reveal-button finished-next" onClick={onNext}>
            One more surprise <ArrowRight size={17} />
          </button>
        )}

        <p className="compliment-footer-note">
          No skipping the love. Every little reason is meant for you. 💗
        </p>
      </section>

      <div className="compliment-floating heart-a">♡</div>
      <div className="compliment-floating heart-b">✦</div>
      <div className="compliment-floating heart-c">♥</div>
      <div className="compliment-floating heart-d">✧</div>
    </main>
  );
}
