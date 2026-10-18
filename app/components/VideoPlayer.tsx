"use strict";
"use client";

import { useRef, useState, useEffect } from "react";
import {
  HiPlay,
  HiPause,
  HiSpeakerWave,
  HiSpeakerXMark,
  HiArrowsPointingOut
} from "react-icons/hi2";

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // ⚡ Track initial loading state
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(true); // ⚡ Autoplay requires default true mutation

  // Attempt autoplay safely once the component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Autoplay was prevented by browser policy:", err);
        });
    }
  }, []);

  // Toggle Play / Pause
  const togglePlay = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Sync state with HTML5 video events
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      // Hide spinner as soon as video progress updates
      if (isLoading && videoRef.current.currentTime > 0) {
        setIsLoading(false);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  // HTML5 media event listeners to control loading states
  const handlePlaying = () => setIsLoading(false);
  const handleWaiting = () => setIsLoading(true);

  // Scrubbing the progress bar
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  // Handle Volume changes
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      videoRef.current.muted = newVolume === 0;
    }
  };

  // Toggle Mute
  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    videoRef.current.muted = nextMute;
    if (nextMute) {
      videoRef.current.volume = 0;
    } else {
      videoRef.current.volume = volume || 0.5;
    }
  };

  // Fullscreen trigger
  const handleFullscreen = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  // Format seconds to MM:SS
  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "00:00";
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="relative group w-full mx-auto overflow-hidden rounded-xl bg-black shadow-2xl aspect-video select-none">
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        onClick={(e) => togglePlay(e)}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlaying={handlePlaying}
        onWaiting={handleWaiting}
        className="w-full h-full object-cover cursor-pointer"
        playsInline
        muted // ⚡ Explicit markup instruction for mobile engines
        loop // ⚡ Natively loop continuous layout
      />

      {/* ⚡ THE THEME-ADAPTIVE LOADING SPINNER OVERLAY */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[2px] transition-all duration-300 pointer-events-none z-20 ${
          isLoading ? "opacity-100 visible" : "opacity-0 scale-95 invisible"
        }`}
      >
        <div className="w-12 h-12 rounded-full border-4 border-white/20 border-t-indigo-500 animate-spin" />
      </div>

      {/* Control Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 pt-12 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex flex-col gap-3 z-10">
        {/* Progress Bar Slider */}
        <div className="w-full flex items-center">
          <input
            type="range"
            min={0}
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:h-2 transition-all duration-150"
          />
        </div>

        {/* Buttons Row */}
        <div className="flex items-center justify-between text-white select-none">
          <div className="flex items-center gap-4">
            {/* Play/Pause */}
            <button
              onClick={(e) => togglePlay(e)}
              className="hover:scale-110 transition-transform p-1 text-2xl"
            >
              {isPlaying ? <HiPause /> : <HiPlay />}
            </button>

            {/* Volume controls */}
            <div className="flex items-center gap-2 group/volume">
              <button
                onClick={toggleMute}
                className="hover:scale-110 transition-transform p-1 text-2xl"
              >
                {isMuted ? <HiSpeakerXMark /> : <HiSpeakerWave />}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-0 overflow-hidden group-hover/volume:w-20 transition-all duration-300 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-white"
              />
            </div>

            {/* Time Stamp */}
            <div className="text-sm font-medium tracking-wider">
              {formatTime(currentTime)} <span className="text-white/40">/</span>{" "}
              {formatTime(duration)}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Fullscreen */}
            <button
              onClick={handleFullscreen}
              className="hover:scale-110 transition-transform p-1 text-xl"
            >
              <HiArrowsPointingOut />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
