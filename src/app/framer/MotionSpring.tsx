"use client";

import { useMotionValue, useSpring, frame, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

const MotionSpring = () => {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  // const x = useSpring(xPoint, spring);
  // const y = useSpring(yPoint, spring);

  const xSpring = useSpring(xPoint, spring);
  const ySpring = useSpring(yPoint, spring);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      frame.read(() => {
        xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 2);
        yPoint.set(clientY - element.offsetTop - element.offsetHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <motion.div
      drag
      className="px-4 py-2 rounded-md bg-blue-400"
      // style={{ x, y }}
      style={{ x: xSpring, y: ySpring }}
    >
      MotionSpring
    </motion.div>
  );
};
export default MotionSpring;
