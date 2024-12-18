"use client";
import { NextPage } from "next";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

const MotionTest: NextPage = () => {
  const xMotionValue = useMotionValue(0);
  useMotionValueEvent(xMotionValue, "change", (latestValue) => {
    console.log("x", latestValue);
  });

  const yMotionValue = useMotionValue(0);
  useMotionValueEvent(yMotionValue, "change", (latestValue) => {
    console.log("y", latestValue);
  });

  // const transformedValue = useTransform(
  //   xMotionValue,
  //   () => xMotionValue.get() * 1
  // );

  const transformedValue = useTransform(
    xMotionValue,
    [-200, 200],
    ["#000000", "#EEEEEE"]
  );

  return (
    <div className="flex items-center justify-center">
      {/* <motion.div
        // initial={{ scale: 0 }}
        // animate={{ scale: 2, transition: { duration: 2 } }}
        // whileHover={{
        //   scale: 1.1,
        //   background: "red",
        //   transition: { duration: 2 },
        // }}
        // whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 2,
          },
        }}
        drag
        className="px-4 py-2 rounded-md bg-blue-400"
      >
        {"Hello"}
      </motion.div> */}

      <motion.div
        style={{
          x: xMotionValue,
          // height: transformedValue,
          // width: yMotionValue,
          // y: yMotionValue,
          background: transformedValue,
        }}
        drag="x"
        className="px-4 py-2 rounded-md bg-blue-400"
      >
        {"Hello"}
      </motion.div>
    </div>
  );
};
export default MotionTest;
