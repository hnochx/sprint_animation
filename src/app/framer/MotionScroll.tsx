"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const PAGE_COUNT = 5;
const MotionScroll = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [yscrollProg, setYscorllProg] = useState(0);
  const [textShow, setTextShow] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setYscorllProg(scrollYProgress.get() * 100);

    if (scrollYProgress.get() > 0.7) {
      setTextShow(true);
    } else {
      setTextShow(false);
    }
  });

  return (
    <div>
      <div className={"w-full h-full fixed inset-0 z-0 pointer-events-none"}>
        <motion.div
          className={
            "bg-orange-400 left-1/2 -translate-x-[50%] fixed w-full h-full"
          }
          style={{
            clipPath: `circle(${yscrollProg}%)`,
          }}
        >
          <h1
            className={
              "text-[rgb(5,74,238)] text-[8vw] pt-[8vw] pl-[8vw] font-bold"
            }
          >
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: 150 }}
                whileInView={
                  textShow ? { y: 0, transition: { duration: 0.2 } } : {}
                }
              >
                Aha!
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: 150 }}
                whileInView={
                  textShow ? { y: 0, transition: { duration: 0.2 } } : {}
                }
              >
                You found me!
              </motion.span>
            </span>
          </h1>
        </motion.div>
      </div>
      {new Array(PAGE_COUNT).fill(null).map((_, index) => (
        <div className="w-dvw h-dvh" key={index}></div>
      ))}
    </div>
  );
};
export default MotionScroll;
