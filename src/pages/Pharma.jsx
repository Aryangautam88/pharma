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

    text: `I know maine tumhe hurt kiya...
aur shayad utna jitna kabhi nahi karna chahiye tha.

But trust me...
har din bas yehi sochta hu ki kaash sab thik kar paau 🥺

Tum sirf meri life ka part nahi ho...
tum meri happiness ho ❤️`,
  },

  {
    title: "One Promise 🌸",
    image:
      "https://i.pinimg.com/originals/6d/0c/03/6d0c035e30176346fbd74663535f704c.gif",

    text: `Mujhe pata hai galti meri thi...
but I promise main better banunga.

Main waapas wahi smile dekhna chahta hu
jo sirf meri wajah se aati thi 💕

Humne jo future imagine kiya tha...
main abhi bhi usse utna hi seriously leta hu.

Bas ek chance aur de do...
iss baar tumhe complain ka mauka nahi dunga 🥹❤️`,
  },

  {
    title: "Cute Sorry 🥹",
    image:
      "https://i.pinimg.com/736x/47/4d/a9/474da95baa93a2ebf1e2b318aea209b9.jpg",

    text: `Please ab gussa chhod do na cutie 😭❤️

Tumhare bina sab ajeeb sa lagta hai...
din bhi aur main bhi.

Sach me...
tum nahi hoti to sab empty empty lagta hai 🥺

Ek baar maaf kardo...
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

      ) : !showRoyalPage ? (

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
              shayad words kabhi explain hi
              nahi kar paayenge ki mujhe
              kitna regret hai.

              Maine sirf galti nahi ki...
              maine us insaan ko hurt kiya
              jo meri life ka sabse
              beautiful part hai.
            </p>

            <p>
              Aur sabse zyada dard iss baat ka hai
              ki jab tujhe meri zarurat thi...
              tab main waise tere saath nahi tha
              jaise hona chahiye tha.

              Lekin believe me...
              mere intentions kabhi bhi tujhe
              hurt karne ke nahi the.

              Main bas tujhe itna special,
              itna loved feel karana chahta hu
              ki tujhe kabhi ye doubt hi na ho
              ki tu meri duniya hai ❤️
            </p>

            <p>
              Aur ek cheez...
              chahe kitni bhi fights ho,
              kitni bhi misunderstandings ho,
              ek cheez kabhi change nahi hogi —

              meri feelings tere liye.

              Tu sirf meri girlfriend nahi hai...
              tu meri peace hai,
              meri comfort place hai,
              meri favorite person hai ✨
            </p>

            <p>
              Hamari late night talks,
              random long drives,
              movies dekhte waqt tera
              mere shoulder pe so jaana,
              aur college me tere saath
              bitaya hua har ek moment...

              sach me meri life ka
              sabse beautiful part hai ❤️
            </p>

            <p>
              Aur shayad isi liye jab
              humare beech kuch galat hota hai
              na...
              toh sab empty sa lagne lagta hai.

              Mujhe bas ek mauka chahiye...
              taaki main tujhe woh pyaar,
              woh care,
              woh happiness feel kara saku
              jo tu sach me deserve karti hai ✨
            </p>

            <p>
              Maine tujhe jitna hurt kiya hai...
              usse 100 guna zyada
              pyaar dena chahta hu.

              Main tere saath aur memories
              banana chahta hu...
              aur bhi long drives,
              aur bhi movie nights,
              aur bhi stupid cute moments,
              jaha sirf tu aur main ho 💖
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

                Kyuki sach me,
                tu sirf mera pyaar nahi hai...
                tu meri happiness hai,
                meri peace hai,
                meri safe place hai 🥺❤️

                Aur tere bina sab adhura sa lagta hai.

                Main bas itna chahta hu
                ki ek din tu mujhe dekh ke
                proudly bole —
                “ye mera banda hai” ✨
              </p>

            </motion.div>

          </motion.div>

        </div>

      )}

    </div>
  );
}