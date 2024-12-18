"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "framer-motion";

function AnimatedNumberFramerMotion({ value }: { value: number }) {
  // // 여기에 코드를 작성해주세요.
  // const numMotion = useMotionValue(value);

  // useMotionValueEvent(numMotion, "change", (last) => {
  //   console.log("last", last);
  // });

  // // const transformedValue = useTransform(() => numMotion.get() * 2);
  // const numSpring = useSpring(numMotion, {
  //   damping: 3,
  //   stiffness: 50,
  //   restDelta: 0.001,
  // });

  // ============================================================================
  // 실습 답안 1

  // const motionValue = useMotionValue(0);
  // const springValue = useSpring(motionValue);

  // useEffect(() => {
  //   motionValue.set(value);
  // }, [value, motionValue]);

  // const transformedMotionValue = useTransform(springValue, (latest) =>
  //   latest.toFixed(0)
  // );

  // return <motion.span>{transformedMotionValue}</motion.span>;

  // ============================================================================

  // 실습 답안 2

  const springValue = useSpring(0);

  useEffect(() => {
    springValue.set(value);
  }, [value]);

  const transformedMotionValue = useTransform(springValue, (latest) =>
    latest.toFixed(0)
  );

  return <motion.span>{transformedMotionValue}</motion.span>;
}

const MotionCount = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const newNum = (Math.random() * 100).toFixed();
      setNum(parseInt(newNum));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <span>{num}</span>
      <AnimatedNumberFramerMotion value={num} />
    </div>
  );
};
export default MotionCount;
