"use client";
import { useScroll, animated, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

const SpringScorll = () => {
  const indicatorRef = useRef<HTMLDivElement>(null);

  const { scrollY, scrollYProgress } = useScroll();
  const [percent, setPercent] = useState<number>(0);

  const props = useSpring({
    width: scrollYProgress.to((x) => parseFloat(x.toFixed(3)) * percent),
  });

  useEffect(() => {
    setPercent(indicatorRef.current?.clientWidth ?? 0);
  }, [scrollY]);

  return (
    <div className="w-full h-[3000px] flex justify-center items-center relative">
      <animated.div
        ref={indicatorRef}
        className="fixed top-0 left-0 w-full h-12 bg-pink-400"
        style={props}
      >
        <animated.span>{scrollY.to((y) => y.toFixed(0))}</animated.span>
        <br />
        <animated.span>{scrollYProgress.to((y) => y.toFixed(5))}</animated.span>
      </animated.div>
    </div>
  );
};
export default SpringScorll;
