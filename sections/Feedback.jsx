"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import styles from "../styles";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex-col flex lg:flex-row gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex flex-col justify-end gradient-05 p-4 sm:p-8 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold text-white text-[26px] sm:text-[32px] leading-9 sm:leading-10  ">
            Danielle
          </h4>
          <p className="font-normal text-white mt-2 text-[12px] sm:text-[18px] leading-4 sm:leading-5 ">
            Founder | Metaversus
          </p>
        </div>
        <p className="font-normal text-white mt-6 text-[18px] sm:text-[24px] leading-[39px] sm:leading-[45px] ">
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-1 flex justify-center items-center relative"
      >
        <img
          src="/planet-09.png"
          alt="planet-09"
          className="w-full h-auto lg:h-[610px] min-h-[210px] rounded-[40px] object-cover"
        />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
