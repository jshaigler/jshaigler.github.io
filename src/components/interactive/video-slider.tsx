'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

interface VideoSliderProps {
  src: string;
  className?: string;
}

export function VideoSlider({ src, className }: VideoSliderProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isVideoReady, setIsVideoReady] = useState<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedMetadata = () => {
        setDuration(video.duration);
        setIsVideoReady(true);
        // Set initial frame if needed, e.g., halfway
        // video.currentTime = video.duration / 2;
        // setProgress(50);
      };

      // Ensure metadata is loaded before setting duration
      if (video.readyState >= 1) { // HAVE_METADATA or higher
        handleLoadedMetadata();
      } else {
        video.addEventListener('loadedmetadata', handleLoadedMetadata);
      }

      // Cleanup listener
      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [src]); // Re-run if src changes

  const handleSliderChange = (value: number[]) => {
    const newProgress = value[0];
    setProgress(newProgress);
    if (videoRef.current && isVideoReady) {
      const newTime = (newProgress / 100) * duration;
      // Check if the new time is significantly different to avoid jerky updates
      if (Math.abs(videoRef.current.currentTime - newTime) > 0.1) {
         videoRef.current.currentTime = newTime;
      }
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="relative w-full overflow-hidden aspect-video rounded-lg border border-border bg-muted">
        <video
          ref={videoRef}
          src={src}
          // controls // Optionally add controls for debugging
          muted // Muted is often required for autoplay-like behavior
          playsInline // Important for mobile
          preload="metadata" // Helps get duration faster
          className="absolute top-0 left-0 w-[200%] h-full object-cover max-w-none" // Make video twice as wide
          style={{ transform: 'translateX(-50%)' }} // Shift video left by half its width (shows right half)
          onCanPlay={() => setIsVideoReady(true)} // Another readiness check
        />
         {/* Optional: Loading indicator */}
         {!isVideoReady && (
           <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
             <p className="text-muted-foreground">Loading video...</p>
           </div>
         )}
      </div>
      <Slider
        value={[progress]}
        max={100}
        step={0.1} // Finer control
        onValueChange={handleSliderChange}
        className="mt-4 cursor-pointer"
        disabled={!isVideoReady || duration === 0}
        aria-label="Video progress slider"
      />
    </div>
  );
}
