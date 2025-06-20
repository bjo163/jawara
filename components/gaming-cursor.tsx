"use client";

import { useState, useEffect } from "react";
import { gamingCursorConfig } from "@/configs/content/cursor";

export function GamingCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [cursorState, setCursorState] = useState("default");
  const [isHovering, setIsHovering] = useState(false);
  const { states, effects } = gamingCursorConfig;
  const currentState = states[cursorState as keyof typeof states] || states.default;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      setCursorState("click");
    };

    const handleMouseUp = () => {
      setIsClicking(false);
      setCursorState(isHovering ? "hover" : "default");
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "BUTTON" || target.tagName === "A" || target.classList.contains("mega-hover")) {
        setIsHovering(true);
        setCursorState("hover");
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorState("default");
    };

    // Throttled mouse move for performance
    let animationFrame: number;
    const throttledMouseMove = (e: MouseEvent) => {
      if (animationFrame) return;
      animationFrame = requestAnimationFrame(() => {
        handleMouseMove(e);
        animationFrame = 0;
      });
    };

    window.addEventListener("mousemove", throttledMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isHovering, cursorState]);
  return (
    <div
      className={`gaming-cursor ${isClicking ? "gaming-cursor-click" : ""} ${isHovering ? "gaming-cursor-hover" : ""}`}
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        fontSize: `${currentState.size}px`,
        filter: currentState.glow ? "drop-shadow(0 0 10px currentColor)" : "none",
      }}
    >
      {/* DYNAMIC CURSOR ICON from config */}
      <div className="gaming-keris">{currentState.icon}</div>

      {/* CURSOR TRAIL - conditional based on config */}
      {currentState.trail && effects.trail.enabled && (
        <div
          className="gaming-cursor-trail"
          style={{
            background: effects.trail.color,
            opacity: effects.trail.opacity,
          }}
        />
      )}

      {/* CLICK EFFECT - enhanced with config */}
      {isClicking && effects.clickRing.enabled && (
        <div className="gaming-click-effect">
          <div
            className="gaming-click-ring"
            style={{
              width: `${effects.clickRing.size}px`,
              height: `${effects.clickRing.size}px`,
              borderColor: effects.clickRing.color,
              borderWidth: `${effects.clickRing.borderWidth}px`,
            }}
          />
          {effects.clickSpark.enabled && (
            <div className="gaming-click-spark" style={{ background: effects.clickSpark.color }} />
          )}
        </div>
      )}
    </div>
  );
}
