"use client";
import { useScroll, animated } from "@react-spring/web";

const SpringScorll = () => {
  const { scrollY, scrollYProgress } = useScroll();

  return (
    <div className="w-full h-[2000px] flex justify-center items-center relative">
      <animated.div
        className="fixed top-0 left-0 w-full h-12 bg-pink-400"
        style={{ width: scrollYProgress.to((v) => `${v * 100}%`) }}
      >
        <animated.span>{scrollY.to((y) => y.toFixed(0))}</animated.span>
        <br />
        <animated.span>{scrollYProgress.to((y) => y.toFixed(5))}</animated.span>
      </animated.div>
    </div>
  );
};
export default SpringScorll;
