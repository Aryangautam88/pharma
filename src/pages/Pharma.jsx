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
          aur uska mujhe sach me regret hai.bhot hi jaada 
          Tum mere liye bahot special ho ❤️`,
  },

  {
    title: "One Promise 🌸",
    image:
      "https://i.pinimg.com/originals/6d/0c/03/6d0c035e30176346fbd74663535f704c.gif",
    text: `Mujhe pata hai maine galti ki...
but I promise main better banunga.
taaki tujhe ab aange se koi ase ceeje na sehni pade
Humne jo future plan kiya tha...
wo sab waise hi hoga 🥺💕`,
  },

  {
    title: "Cute Sorry 🥹",
    image:
      "https://i.pinimg.com/736x/47/4d/a9/474da95baa93a2ebf1e2b318aea209b9.jpg",
    text: `Please gussa mat raho cutie 😭❤️
Tumhare bina sab boring lagta hai.
yaar me bhot ase bhooto jaise akela ho jaata hu jaise kisi ne muje store room me band kr diya ho
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
  
    const [showRoyalPage, setShowRoyalPage] =
  useState(false);

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

      ) : !showRoyalPage ?  (

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

                  setShowRoyalPage(true);

                }}
              >
                One More Thing 💌
              </button>

            </motion.div>

          )}

          {/* LOVE LETTER */}

       </div>

      ) : (

        <div
          id="royal-letter-page"
          className="royal-letter-page"
        >

          <motion.div

            className="royal-card"

            initial={{
              opacity: 0,
              scale: 0.8,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              duration: 0.8,
            }}
          >

            <div className="royal-top-glow"></div>

            <img
              src="https://i.pinimg.com/736x/4f/01/b7/4f01b7898c364940aca2d23993fbd26d.jpg"
              alt="love"
              className="royal-image"
            />

            <h1 className="royal-title">
              To My Favorite Person ❤️
            </h1>

            <p>
              Sach bolu...
              mujhe pata hai maine
              bahot badi galti ki.
              Shayad itna hurt kabhi
              nahi karna chahiye tha.
            </p>

            <p>
              Aur jab mujhe sorry bolna
              chahiye tha...
              tab bhi main perfect nahi
              ho paya.
            </p>

            <p>
              But ek cheez kabhi change
              nahi hogi —
              meri feelings tere liye.
            </p>

            <p>
              Teri hasi,
              teri baatein,
              tera gussa,
              tera pyaar...
              sab meri life ka part ban
              chuka hai 💖
            </p>

            <p>
              Mujhe bas ek chance chahiye
              taaki main tujhe woh
              happiness de saku
              jo tu deserve karti hai ✨
            </p>

            <div className="signature">
              I love you the most,
              babu 🌸
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
                Like you are everything to me.
              </p>

            </motion.div>

          </motion.div>

        </div>

      )}

    </div>
  );
}