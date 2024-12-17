"use client";

import { animated, config, useSpring } from "@react-spring/web";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const SpringRandom: NextPage = () => {
  // const [props, api] = useSpring(() => {
  //   value: 0;
  //   config: {
  //     duration: 10000;
  //   }
  // }, []);

  const [num, setNum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNum = (Math.random() * 100).toFixed();
      setNum(parseInt(newNum));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const [props, api] = useSpring(
    () => ({
      from: { value: 0 },
      to: { value: num },
    }),
    []
  );

  // const handleStart = () => {
  //   api.start({ value: 9999 });
  // };

  // const handleReset = () => {
  //   api.start({ value: 0 });
  // };

  // const handleStop = () => {
  //   api.stop();
  // };

  return (
    <div>
      {/* <button
        type="button"
        className="px-2 py-1 bg-blue-400"
        onClick={handleStart}
      >
        Start
      </button>
      <button
        type="button"
        className="px-2 py-1 bg-blue-400"
        onClick={handleReset}
      >
        Reset
      </button>
      <button
        type="button"
        className="px-2 py-1 bg-blue-400"
        onClick={handleStop}
      >
        Stop
      </button> */}
      <br />
      <animated.span>{props.value.to((x) => x.toFixed(0))}</animated.span>
    </div>
  );
};
export default SpringRandom;
