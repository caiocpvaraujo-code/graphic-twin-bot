import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window) {
      setIsTouch(true);
      return;
    }

    let mx = 0, my = 0, rx = 0, ry = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (curRef.current) {
        curRef.current.style.left = mx + "px";
        curRef.current.style.top = my + "px";
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      animId = requestAnimationFrame(loop);
    };

    const onEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "60px";
        ringRef.current.style.height = "60px";
      }
    };
    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "40px";
        ringRef.current.style.height = "40px";
      }
    };

    const onPointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a,button,.chip,.tool,.sk,.freela-card,.img-frame")) {
        onEnter();
      }
    };
    const onPointerOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a,button,.chip,.tool,.sk,.freela-card,.img-frame")) {
        onLeave();
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);
    animId = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div ref={curRef} className="custom-cursor hidden md:block" />
      <div ref={ringRef} className="custom-cursor-ring hidden md:block" />
    </>
  );
};

export default CustomCursor;
