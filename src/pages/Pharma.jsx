// Pharma.jsx

import React, { useEffect, useState } from "react";
import "./Pharma.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const cards = [
  {
    title: "Tap to Reveal 💌",
    image:
      "https://i.pinimg.com/736x/b3/79/7f/b3797f6ff841654fe4f9fbc888eb6f6e.jpg",
    text: `I know maine tumhe bahot hurt kiya... 
aur uska mujhe sach me regret hai. 
Tum mere liye bahot special ho ❤️`,
  },

  {
    title: "One Promise 🌸",
    image:
      "https://i.pinimg.com/originals/6d/0c/03/6d0c035e30176346fbd74663535f704c.gif",
    text: `Mujhe pata hai maine galti ki...
but I promise main better banunga.
Humne jo future plan kiya tha...
wo sab waise hi hoga 🥺💕`,
  },

  {
    title: "Cute Sorry 🥹",
    image:
      "https://i.pinimg.com/736x/47/4d/a9/474da95baa93a2ebf1e2b318aea209b9.jpg",
    text: `Please gussa mat raho cutie 😭❤️
Tumhare bina sab boring lagta hai.
Ek baar maaf kardo na...
warna main officially sad potato ban jaunga 🥔💔`,
  },
];

export default function Pharma() {

  const [progress, setProgress] = useState(0);

  const [start, setStart] = useState(false);

  const [showCards, setShowCards] =
    useState(false);

  const [opened, setOpened] =
    useState([]);

  useEffect(() => {

    if (start && progress < 1000) {

      const timer = setTimeout(() => {

        setProgress((prev) => prev + 10);

      }, 30);

      return () => clearTimeout(timer);

    }

    if (progress >= 1000) {

      setTimeout(() => {

        setShowCards(true);

      }, 1000);

    }

  }, [progress, start]);

  const handleOpen = (index) => {

    if (!opened.includes(index)) {

      setOpened([...opened, index]);

    }

  };

  return (

    <div className="romantic-container">

      <div className="floating-hearts">
        💖 ✨ 💕 💗 💘 ✨
      </div>

      {!showCards ? (

        <div className="loader-section">

          <div className="glow-circle"></div>

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 1,
            }}

            className="hero-content"
          >

            {/* IMAGE WRAPPER */}

            <div className="top-images-wrapper">

             <img
                className="top-love-image"
                src="left.jpeg"
                alt="love"
              />

              <img
                className="top-love-image"
                src="center.jpeg"
                alt="love"
              />

              <img
                className="cute-gif"
                src="side.jpeg"
                alt="cute"
              />

            </div>

            <h1 className="main-title">
              Hey Kritika(puchdu), cutiepie 💖
            </h1>

            <TypeAnimation
              sequence={[
                "Do you even know how cute you are? 🥺",
                2000,

                "I made something special for you 💌",
                2000,

                "Please don't stay mad at me 😭❤️",
                2000,
              ]}

              wrapper="p"

              speed={50}

              repeat={Infinity}

              className="live-text"
            />

          </motion.div>

          {!start ? (

            <motion.button

              whileHover={{
                scale: 1.08,
              }}

              whileTap={{
                scale: 0.95,
              }}

              className="cute-btn"

              onClick={() => setStart(true)}
            >
              let's check 💖
            </motion.button>

          ) : (

            <>

              <motion.h2
                className="percentage"

                initial={{
                  scale: 0.5,
                }}

                animate={{
                  scale: 1,
                }}
              >
                {progress}%
              </motion.h2>

              <div className="progress-bar">

                <div
                  className="progress-fill"

                  style={{
                    width: `${progress / 10}%`,
                  }}
                ></div>

              </div>

              <p className="cute-warning">
                ⚠️ WARNING : TOO CUTE TO HANDLE
              </p>

            </>

          )}

        </div>

      ) : (

        <div className="cards-section">

          <motion.h1

            className="cards-heading"

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}
          >
            A Little Note For You 💌
          </motion.h1>

          <p className="tap-text">
            Tap each card to reveal ❤️
          </p>

          <div className="cards-wrapper">

            {cards.map((card, index) => (

              <motion.div

                key={index}

                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}

                animate={{
                  scale: 1,
                  opacity: 1,
                }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}

                className={`romantic-card ${opened.includes(index)
                  ? "opened"
                  : ""
                  }`}

                onClick={() =>
                  handleOpen(index)
                }
              >

                {!opened.includes(index) ? (

                  <div className="closed-card">

                    <div className="heart">
                      💖
                    </div>

                    <h2>
                      {card.title}
                    </h2>

                    <p>
                      Tap to Open ✨
                    </p>

                  </div>

                ) : (

                  <div className="opened-card">

                    <img
                      src={card.image}
                      alt="cute"
                    />

                    <p>
                      {card.text}
                    </p>

                  </div>

                )}

              </motion.div>

            ))}

          </div>

          {/* NEXT BUTTON */}

          {opened.length === cards.length && (

            <motion.div

              className="next-love-section"

              initial={{
                opacity: 0,
                y: 40,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 1,
              }}
            >

              <button

                className="next-btn"

                onClick={() => {

                  document
                    .getElementById(
                      "love-letter"
                    )
                    .scrollIntoView({
                      behavior:
                        "smooth",
                    });

                }}
              >
                One More Thing 💌
              </button>

            </motion.div>

          )}

          {/* LOVE LETTER */}

          <div
            id="love-letter"
            className="love-letter"
          >

            <img
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              alt="love"
              className="letter-gif"
            />

            <h1>
              To My Favorite Person ❤️
            </h1>

            <p>
              Sach bolu...
              mujhe pata hai maine
              galti ki.
              Shayad itna hurt kabhi
              nahi karna chahiye tha.
            </p>

            <p>
              But ek cheez kabhi
              change nahi hogi —
              meri feelings
              tumhare liye.
            </p>

            <p>
              Tum meri life ka wo
              part ho jiske bina sab
              incomplete lagta hai.
              Tumhari hasi,
              tumhari baatein,
              tumhara gussa bhi 😭❤️
            </p>

            <p>
              Mujhe bas ek chance
              chahiye...
              taaki main tumhe wahi
              happiness de saku
              jo tum deserve karti
              ho 💖
            </p>

            <p className="last-line">
              I love you the most,
              Kritika(puchdu) 🌸
            </p>

          </div>

          <motion.div

            className="final-message"

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            transition={{
              delay: 1,
            }}
          >

            <h2>
              I’m really sorry my
              love ❤️
            </h2>

            <p>
              Please forgive me...
              You mean everything to
              me 🥺
            </p>

          </motion.div>

        </div>

      )}

    </div>
  );
}