import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [dot, setDot] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const moveMouse = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    // Smooth dot follows with slight lag
    let animFrame;
    const animateDot = () => {
      setDot((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.15,
        y: prev.y + (mouse.y - prev.y) * 0.15,
      }));
      animFrame = requestAnimationFrame(animateDot);
    };
    animFrame = requestAnimationFrame(animateDot);

    const handleHoverIn = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      }
    };
    const handleHoverOut = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveMouse);
    document.addEventListener("mouseover", handleHoverIn);
    document.addEventListener("mouseout", handleHoverOut);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      document.removeEventListener("mouseover", handleHoverIn);
      document.removeEventListener("mouseout", handleHoverOut);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(animFrame);
    };
  }, [mouse.x, mouse.y]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-primary/60 mix-blend-difference"
        animate={{
          x: mouse.x - (isHovering ? 20 : 16),
          y: mouse.y - (isHovering ? 20 : 16),
          width: isHovering ? 40 : 32,
          height: isHovering ? 40 : 32,
          opacity: isClicking ? 0.5 : 1,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{
          boxShadow: isHovering ? "0 0 15px rgba(0,255,136,0.6)" : "none",
          borderColor: isHovering ? "#00ff88" : "rgba(0,255,136,0.6)",
        }}
      />

      {/* Inner dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-primary"
        style={{
          transform: `translate(${mouse.x - 4}px, ${mouse.y - 4}px)`,
          boxShadow: "0 0 8px rgba(0,255,136,0.9)",
          transition: "transform 0.05s linear",
        }}
      />
    </>
  );
};

export default CustomCursor;
