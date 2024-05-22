import { HERO_CONTENT } from "../constants";
import mike from "../assets/projects/mikeWilkins.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start ">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={container(0)}
              className="pb-16 text-center sm:text-left text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Mike Wilkins
            </motion.h1>
            <motion.span
              initial="hidden"
              animate="visible"
              variants={container(0.5)}
              className="bg-gradient-to-r from-blue-900 via-slate-300 to bg-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Counsellor
            </motion.span>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={container(1)}
              className="my-2 max-w-xl py-6 lg:text-left text-center font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={mike}
              alt="Mike Wilkins"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
