
import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Sparkles,
  Music2,
  Volume2,
  VolumeX,
  Mail,
} from "lucide-react";

function LetterPage({ onBack, onNext, musicOn, setMusicOn }) {
  const [opened, setOpened] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  const openLetter = () => {
    if (opened) return;
    setOpened(true);
    window.setTimeout(() => setLetterVisible(true), 850);
  };

  return (
    <main className="letter-shell">
      <div className="grain" aria-hidden="true" />
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <div className="letter-sparkles" aria-hidden="true">
        <span>♡</span>
        <span>✦</span>
        <span>✧</span>
        <span>♥</span>
        <span>♡</span>
        <span>✦</span>
        <span>❀</span>
      </div>

      <header className="topbar letter-topbar">
        <button className="brand brand-button" onClick={onBack}>
          <span className="brand-mark">
            <Heart size={14} fill="currentColor" />
          </span>
          <span>dear dilashaa</span>
        </button>

        <div className="page-count">
          OUR LITTLE WORLD <span>03 / 15</span>
        </div>

        <button
          className="music-toggle"
          onClick={() => setMusicOn((v) => !v)}
        >
          {musicOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
          <span>{musicOn ? "Music on" : "Music off"}</span>
        </button>
      </header>

      <section className="letter-content">
        <div className="letter-heading">
          <span className="story-kicker">
            <Sparkles size={13} /> SOMETHING FROM MY HEART{" "}
            <Sparkles size={13} />
          </span>

          <h1>
            A Letter for <em>You.</em>
          </h1>

          <p>Some feelings are better written than spoken. ♡</p>
        </div>

        {!opened && (
          <div className="envelope-intro">
            <div className="envelope-scene">
              <div className="envelope-glow" />
              <div className="envelope">
                <div className="envelope-back" />
                <div className="envelope-paper-preview">
                  <Heart size={19} fill="currentColor" />
                  <span>For my favourite person</span>
                </div>
                <div className="envelope-front" />
                <div className="envelope-flap" />
                <div className="envelope-seal">♡</div>
              </div>
            </div>

            <p className="envelope-for">FOR DILASHAA, WITH LOVE ♡</p>

            <button className="letter-open-button" onClick={openLetter}>
              <Mail size={17} />
              Open your letter
              <Heart size={15} fill="currentColor" />
            </button>

            <p className="letter-hint">
              Take your time. This one's special. 💗
            </p>
          </div>
        )}

        {opened && (
          <div className={`letter-experience ${letterVisible ? "visible" : ""}`}>
            <div className="opened-envelope">
              <span>♡</span>
              <p>Opened with love</p>
            </div>

            <article className="letter-paper">
              <div className="paper-decoration">✿　♡　✿</div>

              <p className="letter-date">A LITTLE NOTE FOR YOU</p>

              <h2>Dear Dilashaa,</h2>

              <div className="letter-body">
                <p className="letter-paragraph">
                  Toh baat shuru hoti hai{" "}
                  <strong className="date-highlight">22nd October</strong> se...
                </p>

                <p className="letter-paragraph">
                  Us Havle ke jaane ke baad. Aur phir pata nahi kaise, hum dono
                  ke beech itni saari baatein hone lagi. Kabhi-kabhi lagta hai
                  jaise life ne achanak kisi naye multiverse ka raasta khol
                  diya ho, jiske baare mein humne kabhi socha bhi nahi tha.
                </p>

                <p className="letter-paragraph">
                  Kyunki isse pehle toh humari itni baat bhi nahi hoti thi. We
                  weren't even friends. Bas ek doosre ko dekh kar smile kar
                  dete the, aur kabhi baat shuru hone se pehle hi khatam ho
                  jaati thi. Tab kahan pata tha ki ek din hum itni saari baatein
                  karenge, ek doosre ki aadat ban jayenge aur itne close aa
                  jayenge.
                </p>

                <p className="letter-paragraph">
                  Uske baad Bhagwan ne humare liye kya-kya surprises chhupa
                  rakhe the, iska toh humein andaaza bhi nahi tha.
                </p>

                <p className="letter-paragraph">
                  Woh chala gaya, aur phir out of nowhere meri entry hoti
                  hai... Aur out of nowhere, tum meri itni favourite ban
                  jaogi, maine kabhi imagine bhi nahi kiya tha.
                </p>

                <p className="letter-paragraph">
                  Honestly, agar koi uss time mujhe batata ki ek din tum meri
                  life ka itna beautiful part ban jaogi, toh shayad main bhi
                  yakeen nahi karta.
                </p>

                <p className="letter-paragraph">
                  Aur upar se... mujhe toh aaj bhi samajh nahi aata ki
                </p>

                <div className="pull-off-line">
                  HOW DID I PULL THIS OFF? 😭
                </div>

                <p className="letter-paragraph">
                  Itni sundar, itni pyaari, itni cute, itni sweet, itni
                  gorgeous... meri little princess! Kabhi-kabhi toh sach mein
                  lagta hai ki yaar, mere saath itna achha kaise ho gaya? 🥹❤️
                </p>

                <p className="letter-paragraph">
                  And you know what? Main aaj bhi is baat ke liye genuinely
                  grateful hoon ki life ne mujhe tumse milwaya.
                </p>

                <p className="letter-paragraph">
                  Aur meri internship bhi itni achhi jaa rahi hai! Aaj uska
                  last day hai, toh socha is special moment par tumhe thank you
                  toh banta hai.
                </p>

                <p className="letter-paragraph">
                  <strong>
                    Thank youuu so muchhh, mujhe choose karne ke liye.
                  </strong>{" "}
                  Thank you meri life mein aane ke liye, meri random baatein
                  sunne ke liye, mujhe itni saari smiles dene ke liye aur mere
                  saath itni beautiful memories banane ke liye.
                </p>

                <p className="letter-paragraph">
                  Mujhe nahi pata aage life humare liye aur kitne surprises
                  lekar aayegi, but ek baat zaroor pata hai...
                </p>

                <p className="letter-paragraph special-date">
                  <strong>
                    22nd October will always be one of my favourite dates.
                  </strong>{" "}
                  Because that day, unknowingly, something really beautiful
                  started.
                </p>

                <p className="letter-paragraph final-feeling">
                  And I'm really, really glad that it was you. ❤️
                </p>
              </div>

              <div className="letter-signature">
                <p>With lots of love,</p>
                <h3>Yours, Always. <span>💗</span></h3>
              </div>

              <div className="paper-decoration paper-bottom">♡　✿　♡</div>

              {!showFinal ? (
                <button
                  className="final-reveal-button"
                  onClick={() => setShowFinal(true)}
                >
                  One last thing... <Heart size={15} />
                </button>
              ) : (
                <div className="no-refunds-message">
                  <span>🎀</span>
                  <p>
                    Aur haan madam, ab itni special ban hi gayi ho toh
                    lifetime special rehna padega. No refunds. 😭🎀
                  </p>
                  <span>💗</span>
                </div>
              )}

              {/* NEXT PAGE BUTTON */}
              <div className="letter-next-wrapper">
                <p>There's still a little more waiting for you...</p>

                <button
                  className="letter-next-button"
                  onClick={onNext}
                  disabled={!showFinal}
                >
                  Continue our story
                  <ArrowRight size={17} />
                </button>

                {!showFinal && (
                  <span className="letter-next-hint">
                    First, discover the last little surprise above ♡
                  </span>
                )}
              </div>
            </article>

            <p className="letter-bottom-note">
              Made with a little extra love, just for you. ♡
            </p>
          </div>
        )}

        <div className="letter-navigation">
          <button className="back-link" onClick={onBack}>
            <ArrowLeft size={15} /> Back to Bubu & Dudu
          </button>
          <span>page 03 · a piece of my heart</span>
        </div>
      </section>

      <footer className="story-footer">
        <span>made with love, just for you</span>
        <span>♡</span>
        <span>Dear Dilashaa ✿</span>
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

export default LetterPage;
