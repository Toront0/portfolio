"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const IMAGES = ["/screen_1.png", "/screen_2.png", "/screen_3.png"];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%"
  }),
  center: {
    x: 0
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%"
  })
};

const AnimatedPhoneMockup = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    let nextIndex = page + newDirection;
    // Circular loop if limits are crossed
    if (nextIndex < 0) nextIndex = IMAGES.length - 1;
    if (nextIndex >= IMAGES.length) nextIndex = 0;

    setPage([nextIndex, newDirection]);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* PHONE WRAPPER CONTAINER */}
      <div className="relative w-64 aspect-[421/867] drop-shadow-2xl">
        {/* LAYER 1 (Bottom): The Changing App Screen */}
        <div className="absolute inset-2 overflow-hidden z-20 rounded-[2.5rem]">
          <div className="relative w-full h-full">
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: {
                    type: "tween",
                    duration: 0.65, // Slightly longer duration lets the deep Power4 curve shine
                    ease: [0.76, 0, 0.24, 1] // Custom Power4.inOut cubic-bezier curve
                  },
                  opacity: {
                    type: "tween",
                    duration: 0.35,
                    ease: "linear"
                  }
                }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={IMAGES[page]}
                  alt="App Screen Content"
                  fill
                  sizes="256px"
                  unoptimized
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* LAYER 2 (Top): The Phone Mockup Frame */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/iphone_mockup.png"
            alt="iPhone Frame Mockup"
            fill
            sizes="256px"
            className="object-contain"
          />
        </div>
      </div>

      {/* INTERACTIVE CONTROLS */}
      <div className="flex gap-4">
        <button
          onClick={() => paginate(-1)}
          className="px-4 py-2  rounded-lg text-sky-700 bg-sky-50 border border-sky-200 hover:bg-sky-100 transition-colors active:scale-[0.98] dark:text-white dark:bg-sky-500/10 dark:border-sky-500/30 dark:hover:bg-sky-500/20 active:scale-95 text-xs font-mono tracking-wide"
        >
          [НАЗАД]
        </button>
        <button
          onClick={() => paginate(1)}
          className="px-4 py-2  rounded-lg text-sky-700 bg-sky-50 border border-sky-200 hover:bg-sky-100 transition-colors active:scale-[0.98] dark:text-white dark:bg-sky-500/10 dark:border-sky-500/30 dark:hover:bg-sky-500/20 active:scale-95 text-xs font-mono tracking-wide"
        >
          [ДАЛЕЕ]
        </button>
      </div>
    </div>
  );
};

export default AnimatedPhoneMockup;
