"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function Live() {
  useEffect(() => {
    gsap.from(".live-page", {
      duration: 1,
      opacity: 0,
      y: 20,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="live-page p-10">
      <h1 className="text-3xl font-bold">Live Broadcast</h1>
      <p>Stream is currently live!</p>
      {/* Add your live stream player or link here */}
    </div>
  );
}
