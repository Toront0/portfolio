"use strict";
"use client";

import { useRef, useState } from "react";
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
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  // Toggle Play / Pause
  const togglePlay = () => {
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
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

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
    <div className="relative group  w-full  mx-auto overflow-hidden rounded-xl bg-black shadow-2xl aspect-video">
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        onClick={togglePlay}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        className="w-full h-full object-cover cursor-pointer"
        playsInline
      />

      {/* ⚡ INITIAL PHASE BIG PLAY BUTTON OVERLAY */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none transition-all duration-300 ${
          isPlaying ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <button
          onClick={togglePlay}
          className="pointer-events-auto flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white text-3xl sm:text-4xl shadow-2xl transition-all duration-300 hover:bg-white/20 hover:scale-110 active:scale-95 group-hover:border-white/50"
          aria-label="Play video"
        >
          <HiPlay className="translate-x-[2px]" />
        </button>
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
              onClick={togglePlay}
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
