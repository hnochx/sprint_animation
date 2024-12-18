import MotionCount from "./framer/MotionCount";
import MotionScroll from "./framer/MotionScroll";
import MotionSpring from "./framer/MotionSpring";
import MotionTest from "./framer/MotionTest";
import Spring from "./use-spring/page";
import SpringRandom from "./use-spring/SpringRandom";
import SpringScorll from "./use-spring/SpringScorll";

export default function Home() {
  return (
    <div className="w-full h-svh flex items-center justify-center">
      <MotionScroll />
    </div>
  );
}
