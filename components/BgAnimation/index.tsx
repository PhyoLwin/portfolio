'use client';

import React, { ReactEventHandler, useEffect, useState } from 'react';
import { ArrowBounce } from './ArrowBounce';
import '@/app/NavBar.css';

export const BgAnimation: React.FC = () => {
  const arrowImage = '/images/arrow.png';
  const desktopVideoFile = '/videos/landing.mp4';
  const mobileVideoFile = '/videos/mobile.mp4';
  const [isMobile, setIsMobile] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResizeAndOrientation = () => {
        setIsMobile(window.innerWidth <= 768);
        setIsPortrait(window.innerHeight > window.innerWidth);
      };

      handleResizeAndOrientation();

      window.addEventListener('resize', handleResizeAndOrientation);
      window.addEventListener('orientationchange', handleResizeAndOrientation);

      return () => {
        window.removeEventListener('resize', handleResizeAndOrientation);
        window.removeEventListener(
          'orientationchange',
          handleResizeAndOrientation,
        );
      };
    }
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById('whylomtech');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const videoFile = isMobile
    ? isPortrait
      ? mobileVideoFile
      : desktopVideoFile
    : desktopVideoFile;

  const handleVideoError: ReactEventHandler<HTMLVideoElement> = (event) => {
    const video = event.currentTarget;
    video.src = '/videos/default.mp4';
  };

  return (
    <div
      id="animation"
      className={`video-container ${isPortrait ? 'portrait' : ''}`}
    >
      <video
        className="video"
        autoPlay
        loop
        muted
        playsInline
        onError={handleVideoError}
        src={videoFile}
      >
        Your browser does not support the video tag.
      </video>
      <div
        onClick={scrollToSection}
        className="absolute bottom-5 left-1/2 flex -translate-x-1/2 transform flex-col space-y-5"
      >
        <ArrowBounce arrowImage={arrowImage} bottomPosition="5px" />
        <ArrowBounce arrowImage={arrowImage} bottomPosition="20px" />
        <ArrowBounce arrowImage={arrowImage} bottomPosition="35px" />
      </div>
    </div>
  );
};
