"use client";

import { useState, useEffect } from "react";

export function GamingCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className={`gaming-cursor ${isClicking ? "gaming-cursor-click" : ""}`}
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
    >
      {/* KERIS CURSOR */}
      <div className="gaming-keris">⚔️</div>

      {/* CURSOR TRAIL */}
      <div className="gaming-cursor-trail" />

      {/* CLICK EFFECT */}
      {isClicking && (
        <div className="gaming-click-effect">
          <div className="gaming-click-ring" />
          <div className="gaming-click-spark" />
        </div>
      )}
    </div>
  );
}
