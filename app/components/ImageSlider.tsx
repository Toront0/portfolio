"use client";

import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import Image from "next/image";
import gsap from "gsap";

interface ImageSliderProps {
  beforeSrc: string;
  afterSrc: string;
}

export default function ImageSlider({ beforeSrc, afterSrc }: ImageSliderProps) {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !handleRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { "--slider-pos": "0%" },
        {
          "--slider-pos": "50%",
          duration: 1.4,
          ease: "power3.out",
          onUpdate: function (this: gsap.core.Tween) {
            const target = this.targets()[0] as HTMLDivElement | undefined;
            if (target) {
              const progress = parseFloat(
                target.style.getPropertyValue("--slider-pos")
              );
              if (!isNaN(progress)) {
                setSliderPosition(progress);
              }
            }
          }
        }
      );

      gsap.from(handleRef.current, {
        scale: 0,
        duration: 0.6,
        delay: 0.8,
        ease: "back.out(1.7)"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    /* 🎯 Fixed aspect-ratio layer mapping to exactly 430x775 proportions */
    <div
      ref={containerRef}
      className="relative w-full max-w-[280px] mx-auto aspect-[430/775] rounded-xl overflow-hidden select-none border border-slate-800/80 bg-slate-950 shadow-2xl"
      style={{ "--slider-pos": `${sliderPosition}%` } as React.CSSProperties}
    >
      {/* 1. "After" Image Layer */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterSrc}
          alt="After Standardization"
          fill
          unoptimized
          className="object-cover pointer-events-none"
        />
        <span className="absolute bottom-4 right-4 bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold px-2 py-1 rounded backdrop-blur-md border border-emerald-500/30">
          ПОСЛЕ
        </span>
      </div>

      {/* 2. "Before" Image Layer (Dynamic Clip) */}
      <div
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        {/* 🎯 Ensures the hidden container stays locked perfectly at 430x775 proportions during slide scrubbing */}
        <div
          className="absolute inset-0 h-full aspect-[430/775]"
          style={{ width: containerRef.current?.clientWidth || "100%" }}
        >
          <Image
            src={beforeSrc}
            alt="Before Chaos"
            fill
            unoptimized
            className="object-cover pointer-events-none"
          />
        </div>
        <span className="absolute bottom-4 left-4 bg-slate-900/60 text-slate-300 text-xs font-mono font-bold px-2 py-1 rounded backdrop-blur-md border border-slate-700/50 whitespace-nowrap">
          ДО
        </span>
      </div>

      {/* 3. The Visual Separator Line & Center Handle */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-indigo-500 cursor-ew-resize pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div
          ref={handleRef}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white text-white font-bold text-sm"
        >
          ⇄
        </div>
      </div>

      {/* 4. Invisible Input Layer */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
        aria-label="Image comparison slider"
      />
    </div>
  );
}
