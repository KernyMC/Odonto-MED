
"use client";

import { useEffect, useState } from "react";

interface ParallaxSectionProps {
  imageUrl: string;
  children: React.ReactNode;
  height?: string;
  overlay?: boolean;
}

export default function ParallaxSection({ 
  imageUrl, 
  children, 
  height = "h-96",
  overlay = true 
}: ParallaxSectionProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`relative ${height} overflow-hidden flex items-center justify-center`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: `translateY(${scrollY * 0.5}px)`,
          willChange: 'transform'
        }}
      />
      {overlay && <div className="absolute inset-0 bg-black/40" />}
      <div className="relative z-10 text-white text-center px-4">
        {children}
      </div>
    </section>
  );
}
