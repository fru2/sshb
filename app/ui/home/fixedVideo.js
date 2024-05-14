'use client'

import React, { useEffect, useRef } from 'react';


export default function FixedVideo() {
  return (
    <div className={`bg-card-gray w-full aspect-video z-30 video-card`}>
      <video src="videos/sus_merged.mp4" muted loop />
    </div>
  );
}
