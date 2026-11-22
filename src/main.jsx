import React, { useEffect, useState } from "react";
import LetterPage from "./LetterPage";
import { createRoot } from "react-dom/client";
import ComplimentsPage from "./ComplimentsPage";
import MemoriesPage from "./MemoriesPage";
import SpecialPage from "./SpecialPage";
import DoorWorldPage from "./DoorWorldPage";
import ReelPage from "./ReelPage";
import FinalReelPage from "./FinalReelPage";
import LoveJarPage from "./LoveJarPage";
import BackgroundMusic from "./BackgroundMusic";
import ThankYouPage from "./ThankYouPage";
import SunflowerFieldPage from "./SunflowerFieldPage";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Music2,
  Sparkles,
  Volume2,
  VolumeX,
  Stars,
} from "lucide-react";
import "./style.css";

const floatingBits = [
  ["♡", "bit-one"],
  ["✦", "bit-two"],
  ["♡", "bit-three"],
  ["✧", "bit-four"],
  ["♥", "bit-five"],
  ["✦", "bit-six"],
  ["♡", "bit-seven"],
  ["✧", "bit-eight"],
];

function Bear({ kind = "bubu" }) {
  return (
    <div
      className={`bear ${kind} ${kind === "bubu" ? "bear-left" : "bear-right"
        }`}
      aria-label="Cute teddy bear"
    >
      <span className="ear ear-left" />
      <span className="ear ear-right" />

      <span className="bear-face">
        <i className="eye eye-left" />
        <i className="eye eye-right" />
        <i className="snout">
          <b />
        </i>
        <i className="cheek cheek-left" />
        <i className="cheek cheek-right" />
      </span>

      <span className="bear-body" />
      <span
        className={`bear-arm ${kind === "bubu" ? "arm-right" : "arm-left"
          }`}
      />

      {kind === "bubu" ? (
        <span className="bow">
          <i />
          <i />
          <b />
        </span>
      ) : (
        <span className="neck-bow">
          <i />
          <i />
          <b />
        </span>
      )}
    </div>
  );
}

function WelcomePage({ onNext, musicOn, setMusicOn }) {
  const [opened, setOpened] = useState(false);
  const [showNote, setShowNote] = useState(false);

  useEffect(() => {
    document.title = "Dear Dilashaa ♡";
  }, []);

  const begin = () => {
    setOpened(true);
    window.setTimeout(() => setShowNote(true), 550);
  };

  return (
    <main className="welcome-shell">
      <div className="grain" aria-hidden="true" />
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <div className="sparkle-field" aria-hidden="true">
        {floatingBits.map(([symbol, cls]) => (
          <span className={`floating-bit ${cls}`} key={cls}>
            {symbol}
          </span>
        ))}
      </div>

      <header className="topbar">
        <a className="brand" href="#home" aria-label="Dear Dilashaa home">
          <span className="brand-mark">
            <Heart size={14} fill="currentColor" />
          </span>
          <span>dear dilashaa</span>
        </a>

        <button
          className="music-toggle"
          onClick={() => setMusicOn((v) => !v)}
          aria-label={musicOn ? "Turn music off" : "Turn music on"}
        >
          {musicOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
          <span>{musicOn ? "Music on" : "Music off"}</span>
        </button>
      </header>

      <section className="hero" id="home">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          A LITTLE SOMETHING FOR YOU
          <span className="eyebrow-line" />
        </div>

        <div className={`hero-card ${opened ? "is-open" : ""}`}>
          <div className="card-glow" />

          <div className="card-topline">
            <span>✿</span>
            <span>made with love</span>
            <span>✿</span>
          </div>

          <div className="illustration">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <span className="heart-doodle doodle-left">♡</span>
            <span className="heart-doodle doodle-right">♥</span>
            <span className="tiny-star star-left">✦</span>
            <span className="tiny-star star-right">✧</span>

            <Bear kind="bubu" />
            <Bear kind="dudu" />

            <span className="tiny-heart">♡</span>
          </div>

          {!opened ? (
            <div className="intro-copy">
              <p className="script-kicker">
                psst... someone made this for you
              </p>

              <h1>
                Hey, <em>Dilashaa.</em>
              </h1>

              <p className="hero-description">
                I made a tiny corner of the internet
                <br className="desktop-break" /> just to make you smile.
              </p>

              <button className="open-button" onClick={begin}>
                <span>Open your little surprise</span>
                <ArrowRight size={17} />
              </button>

              <p className="soft-hint">
                <Sparkles size={13} /> best opened with a smile
              </p>
            </div>
          ) : (
            <div
              className={`intro-copy reveal-copy ${showNote ? "visible" : ""
                }`}
            >
              <p className="script-kicker">a little world, just for you</p>

              <h1>
                Welcome to <em>your</em> world.
              </h1>

              <p className="hero-description">
                No big occasion. No special reason.
                <br className="desktop-break" /> Just you being you. ♡
              </p>

              <button
                className="open-button"
                onClick={() => setShowNote((v) => !v)}
              >
                <span>
                  {showNote ? "Keep this little moment" : "Read a tiny note"}
                </span>
                <Heart size={16} />
              </button>

              {showNote && (
                <>
                  <p className="tiny-note">
                    “Some people make the world feel a little softer.
                    You're one of them.”
                  </p>

                  <button className="next-page-button" onClick={onNext}>
                    Meet two little cuties <ArrowRight size={15} />
                  </button>
                </>
              )}
            </div>
          )}

          <div className="card-bottomline">
            <span>♡</span>
            <span>one page at a time</span>
            <span>♡</span>
          </div>
        </div>

        <div className="below-card">
          <span className="scroll-dot" />
          <span>
            {opened
              ? "there's more waiting for you"
              : "a little world filled with little things"}
          </span>
          <span className="scroll-dot" />
        </div>
      </section>

      <footer className="footer">
        <span>
          crafted with <Heart size={11} fill="currentColor" /> and a little
          extra effort
        </span>
        <span className="footer-seal">
          D <i>♡</i>
        </span>
        <span>for Dilashaa, always ✿</span>
      </footer>

      {musicOn && (
        <div className="music-message">
          <Music2 size={14} />
          Now playing: <em>I Met Her Again</em> ♡
        </div>
      )}
    </main>
  );
}

function BubuDuduPage({ onBack, onNext, musicOn, setMusicOn }) {
  const [hugged, setHugged] = useState(false);

  return (
    <main className="story-shell">
      <div className="grain" aria-hidden="true" />
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <div className="story-sparkles" aria-hidden="true">
        <span>♡</span>
        <span>✦</span>
        <span>✧</span>
        <span>♥</span>
        <span>♡</span>
        <span>✦</span>
      </div>

      <header className="topbar story-topbar">
        <button className="brand brand-button" onClick={onBack}>
          <span className="brand-mark">
            <Heart size={14} fill="currentColor" />
          </span>
          <span>dear dilashaa</span>
        </button>

        <div className="page-count">
          OUR LITTLE WORLD <span>02 / 12</span>
        </div>

        <button
          className="music-toggle"
          onClick={() => setMusicOn((v) => !v)}
        >
          {musicOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
          <span>{musicOn ? "Music on" : "Music off"}</span>
        </button>
      </header>

      <section className="story-content">
        <div className="story-heading">
          <span className="story-kicker">
            <Stars size={13} /> YOUR NEW LITTLE FRIENDS <Stars size={13} />
          </span>

          <h1>
            Meet <em>Bubu &amp; Dudu.</em>
          </h1>

          <p>Two tiny bears. One very soft spot for each other.</p>
        </div>

        <div className="bear-stage">
          <div className="stage-glow" />

          <span className="stage-heart heart-a">♡</span>
          <span className="stage-heart heart-b">♥</span>
          <span className="stage-star star-a">✦</span>
          <span className="stage-star star-b">✧</span>

          <div className="bear-scene">
            <Bear kind="bubu" />
            <Bear kind="dudu" />
            <div className="hug-heart">{hugged ? "💕" : "♡"}</div>
          </div>

          <div className="bear-label label-bubu">
            <strong>Bubu</strong>
            <span>the little softie</span>
          </div>

          <div className="bear-label label-dudu">
            <strong>Dudu</strong>
            <span>the tiny troublemaker</span>
          </div>
        </div>

        <div className="dialogue-grid">
          <article className="dialogue-card bubu-card">
            <span className="dialogue-name">🐻 BUBU SAYS</span>
            <p>“Dudu, do you know where my favourite place in the whole world is?”</p>
          </article>

          <article className="dialogue-card dudu-card">
            <span className="dialogue-name">🐼 DUDU SAYS</span>
            <p>“Umm... inside the snack cupboard?”</p>
          </article>

          <article className="dialogue-card answer-card">
            <span className="dialogue-name">💗 BUBU'S ANSWER</span>
            <p>“No silly... it's right inside your heart. That's where my little world feels at home.” <span aria-hidden="true">♡</span></p>
          </article>
        </div>

        <div className="story-actions">
          <button
            className={`hug-button ${hugged ? "hugged" : ""}`}
            onClick={() => setHugged((v) => !v)}
          >
            <Heart size={16} fill={hugged ? "currentColor" : "none"} />
            {hugged ? "A big squishy hug sent!" : "Send them a little hug"}
          </button>

        </div>

        <div className="story-bottom">
          <button className="back-link" onClick={onBack}>
            <ArrowLeft size={15} /> Back to the beginning
          </button>

          <button className="next-page-button" onClick={onNext}>
            There's more, Dilashaa <ArrowRight size={15} />
          </button>
        </div>
      </section>

      <footer className="story-footer">
        <span>made of tiny moments &amp; big feelings</span>
        <span>♡</span>
        <span>page 02 · for you</span>
      </footer>

      {musicOn && (
        <div className="music-message">
          <Music2 size={14} />
          Now playing: <em>I Met Her Again</em> ♡
        </div>
      )}
    </main>
  );
}



const ALL_PAGES = [
  { id: 1, label: "01. Welcome" },
  { id: 2, label: "02. Bubu & Dudu" },
  { id: 3, label: "03. Love Letter" },
  { id: 4, label: "04. Memories" },
  { id: 5, label: "05. 100 Little Things" },
  { id: 6, label: "06. Why You're Special" },
  { id: 7, label: "07. Love Jar" },
  { id: 8, label: "08. Sunflower Field" },
  { id: 9, label: "09. Queen Reel ♡" },
  { id: 10, label: "10. Three Magic Doors" },
  { id: 11, label: "11. Thenkuuuu ♡" },
  { id: 12, label: "12. Final Reel ♡" },
];

function FloatingPageNavigator({ currentPage, onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="quick-page-nav" aria-label="Page jump menu">
      <button
        type="button"
        className="quick-page-pill"
        onClick={() => setOpen((v) => !v)}
        title="Jump directly to any page"
      >
        <Sparkles size={13} />
        <span>Pages ({String(currentPage).padStart(2, "0")}/12)</span>
      </button>

      {open && (
        <div className="quick-page-dropdown">
          <div className="quick-dropdown-header">
            <strong>Jump to Page ♡</strong>
            <button
              type="button"
              className="quick-close-btn"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
          <div className="quick-dropdown-list">
            {ALL_PAGES.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`quick-dropdown-item ${p.id === currentPage ? "is-active" : ""}`}
                onClick={() => {
                  onNavigate(p.id);
                  setOpen(false);
                }}
              >
                <span>{p.label}</span>
                {p.id === currentPage && <Heart size={12} fill="currentColor" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function App() {
  const getInitialPage = () => {
    try {
      const match = window.location.hash.match(/page=(\d+)/);
      if (match) {
        const p = parseInt(match[1], 10);
        if (p >= 1 && p <= 12) return p;
      }
    } catch { }

    try {
      const saved = localStorage.getItem("dear_dilashaa_current_page");
      if (saved) {
        const p = parseInt(saved, 10);
        if (p >= 1 && p <= 12) return p;
      }
    } catch { }

    return 1;
  };

  const [page, setPage] = useState(getInitialPage);
  const [musicOn, setMusicOn] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      const match = window.location.hash.match(/page=(\d+)/);
      if (match) {
        const p = parseInt(match[1], 10);
        if (p >= 1 && p <= 12) setPage(p);
      }
    };
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const goToPage = (nextPage) => {
    const targetPage = Math.max(1, Math.min(12, nextPage));
    setPage(targetPage);
    try {
      localStorage.setItem("dear_dilashaa_current_page", String(targetPage));
    } catch { }
    window.location.hash = `page=${targetPage}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderCurrentPage = () => {
    if (page === 1) {
      return (
        <WelcomePage
          onNext={() => goToPage(2)}
          musicOn={musicOn}
          setMusicOn={setMusicOn}
        />
      );
    }
    if (page === 2) {
      return (
        <BubuDuduPage
          onBack={() => goToPage(1)}
          onNext={() => goToPage(3)}
          musicOn={musicOn}
          setMusicOn={setMusicOn}
        />
      );
    }
    if (page === 3) {
      return (
        <LetterPage
          onBack={() => goToPage(2)}
          onNext={() => goToPage(4)}
          musicOn={musicOn}
          setMusicOn={setMusicOn}
        />
      );
    }
    if (page === 4) {
      return (
        <MemoriesPage
          onBack={() => goToPage(3)}
          onNext={() => goToPage(5)}
          musicOn={musicOn}
          setMusicOn={setMusicOn}
        />
      );
    }
    if (page === 5) {
      return (
        <ComplimentsPage
          onBack={() => goToPage(4)}
          onNext={() => goToPage(6)}
        />
      );
    }
    if (page === 6) {
      return (
        <SpecialPage
          onBack={() => goToPage(5)}
          onNext={() => goToPage(7)}
        />
      );
    }
    if (page === 7) {
      return (
        <LoveJarPage
          onBack={() => goToPage(6)}
          onNext={() => goToPage(8)}
        />
      );
    }
    if (page === 8) {
      return (
        <SunflowerFieldPage
          onBack={() => goToPage(7)}
          onNext={() => goToPage(9)}
          onNavigate={goToPage}
        />
      );
    }
    if (page === 9) {
      return (
        <ReelPage
          onBack={() => goToPage(8)}
          onNext={() => goToPage(10)}
        />
      );
    }
    if (page === 10) {
      return (
        <DoorWorldPage
          onBack={() => goToPage(9)}
          onNext={() => goToPage(11)}
        />
      );
    }

    if (page === 11) {
      return (
        <ThankYouPage
          onBack={() => goToPage(10)}
          onNext={() => goToPage(12)}
        />
      );
    }
    if (page === 12) {
      return (
        <FinalReelPage
          onBack={() => goToPage(11)}
          onNext={() => goToPage(1)}
        />
      );
    }
    return (
      <WelcomePage
        onNext={() => goToPage(2)}
        musicOn={musicOn}
        setMusicOn={setMusicOn}
      />
    );
  };

  return (
    <>
      <BackgroundMusic
        musicOn={musicOn}
        setMusicOn={setMusicOn}
        currentPage={page}
      />
      {renderCurrentPage()}
      <FloatingPageNavigator currentPage={page} onNavigate={goToPage} />
    </>
  );
}



createRoot(document.getElementById("root")).render(<App />);
