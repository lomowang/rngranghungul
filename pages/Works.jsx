import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Workswiper from "./Workswiper";

const Works = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center px-8 py-8  font-bold xl:text-xl ">
        <div>作品介紹</div>
        <p>works</p>
      </div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <Project />
      </motion.div>
    </section>
  );
};

export default Works;
