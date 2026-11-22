
import React, { useEffect, useState } from "react";
import "./style.css";

const messages = [
  "You make ordinary days feel a little more golden. ☀️",
  "Your smile deserves its own sunshine. 🌻",
  "Never forget how special you are. ♡",
  "Some people just make the world brighter. You're one of them. ✨",
  "Keep blooming, even on the cloudy days. 🌼",
  "The world is a little prettier with you in it. 💛",
  "You deserve all the happiness this world can offer. 🦋",
  "Stay the same adorable, chaotic and wonderful you. 😭",
  "And never forget that someone is always cheering for you. ♡",
];

const flowers = [
  { left: "7%", bottom: "13%", size: 0.78, delay: 0.2 },
  { left: "19%", bottom: "9%", size: 1.05, delay: 0.8 },
  { left: "31%", bottom: "15%", size: 0.86, delay: 1.4 },
  { left: "43%", bottom: "8%", size: 1.12, delay: 2 },
  { left: "56%", bottom: "13%", size: 0.9, delay: 2.6 },
  { left: "69%", bottom: "8%", size: 1.08, delay: 3.2 },
  { left: "81%", bottom: "14%", size: 0.85, delay: 3.8 },
  { left: "92%", bottom: "9%", size: 1.02, delay: 4.4 },
  { left: "25%", bottom: "34%", size: 0.7, delay: 5 },
];

function Sunflower({ index, flower, onBloom }) {
  const [grown, setGrown] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGrown(true);
      onBloom(index);
    }, 1200 + flower.delay * 1000);

    return () => clearTimeout(timer);
  }, [flower.delay, index, onBloom]);

  return (
    <div
      className={`sunflower-plant ${grown ? "grown" : ""}`}
      style={{
        left: flower.left,
        bottom: flower.bottom,
        "--flower-scale": flower.size,
        "--grow-delay": `${flower.delay}s`,
        zIndex: Math.round(flower.size * 10),
      }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flower-message">
        <span className="message-short">♡ A little sunshine ♡</span>
        <span className="message-full">{messages[index]}</span>
      </div>

      <div className="sunflower-head">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            className="sunflower-petal"
            key={i}
            style={{ "--petal-angle": `${i * 18}deg` }}
          />
        ))}

        <div className="sunflower-center">
          {Array.from({ length: 45 }).map((_, i) => (
            <span
              key={i}
              className="sunflower-seed"
              style={{
                "--seed-angle": `${i * 137.5}deg`,
                "--seed-radius": `${Math.sqrt(i) * 2.4}px`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="sunflower-stem">
        <span className="sunflower-leaf leaf-left" />
        <span className="sunflower-leaf leaf-right" />
      </div>

      <div className="sunflower-ground-shadow" />
    </div>
  );
}

function Butterfly({ className, delay }) {
  return (
    <div className={`garden-butterfly ${className}`} style={{ animationDelay: delay }}>
      <span className="butterfly-wing wing-left" />
      <span className="butterfly-body" />
      <span className="butterfly-wing wing-right" />
    </div>
  );
}

export default function SunflowerFieldPage({ onBack, onNext, onNavigate }) {
  const [bloomed, setBloomed] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBloom = React.useCallback((index) => {
    setBloomed((previous) =>
      previous.includes(index) ? previous : [...previous, index]
    );
  }, []);

  const allBloomed = bloomed.length === flowers.length;

  return (
    <main className="sunflower-page">
      <div className="garden-sky" />
      <div className="garden-sun" />

      <div className="garden-cloud cloud-one" />
      <div className="garden-cloud cloud-two" />
      <div className="garden-cloud cloud-three" />

      <header className="garden-header">
        <span className="garden-eyebrow">A LITTLE PLACE OF HAPPINESS</span>
        <h1>A Field of Sunshine</h1>
        <p>For someone who makes the world bloom a little brighter. ♡</p>
      </header>

      <button
        className="garden-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span>☰</span> Explore Pages
      </button>

      {menuOpen && (
        <div className="garden-menu">
          <div className="garden-menu-title">
            <span>Our little story ♡</span>
            <button onClick={() => setMenuOpen(false)}>×</button>
          </div>
          {Array.from({ length: 12 }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setMenuOpen(false);
                onNavigate?.(i + 1);
              }}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              {[
                "Welcome",
                "Bubu & Dudu",
                "A Letter for You",
                "Our Little Memories",
                "100 Little Things",
                "Why You're Special",
                "A Jar Full of Love",
                "A Field of Sunshine",
                "A Little Game",
                "Our Song",
                "Little Dreams",
                "One Last Surprise",
              ][i]}
            </button>
          ))}
        </div>
      )}

      <div className="garden-progress">
        <span>{bloomed.length} / {flowers.length} flowers blooming</span>
        <div className="garden-progress-track">
          <div
            className="garden-progress-fill"
            style={{ width: `${(bloomed.length / flowers.length) * 100}%` }}
          />
        </div>
      </div>

      <section className="sunflower-meadow">
        <div className="distant-hill hill-back" />
        <div className="distant-hill hill-front" />

        <Butterfly className="butterfly-one" delay="0s" />
        <Butterfly className="butterfly-two" delay="1.4s" />
        <Butterfly className="butterfly-three" delay="2.5s" />

        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            className="garden-sparkle"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${15 + ((i * 19) % 65)}%`,
              animationDelay: `${(i % 7) * 0.5}s`,
            }}
          >
            ✦
          </span>
        ))}

        <div className="garden-grass" />

        {flowers.map((flower, index) => (
          <Sunflower
            key={index}
            index={index}
            flower={flower}
            onBloom={handleBloom}
          />
        ))}
      </section>

      <div className="garden-footer">
        <span>Made with a little sunshine and a lot of love</span>
        <span>♡ Bubu</span>
      </div>

      {allBloomed && (
  <div className="sunflower-final">
    <span className="final-eyebrow">✦ FOR YOU, DILASHAA ✦</span>

    <h2>
      If I could gift you a field of flowers, I'd still choose
      sunflowers... because somehow, they remind me of you.
    </h2>

    <p>Keep shining, keep smiling, and keep blooming. ♡</p>

    <button onClick={onNext}>
      Continue our story <span>→</span>
    </button>
  </div>
)}
      <div className="garden-bottom-actions">
        <button onClick={onBack}>← Previous page</button>
      </div>
    </main>
  );
}
