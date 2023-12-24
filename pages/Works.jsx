import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Works = () => {
  return (
    <section>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex flex-col justify-center items-center px-8 py-8  font-bold xl:text-xl "
      >
        <div>作品介紹</div>
        <p>works</p>
      </motion.div>
      <div>
        <Project />
      </div>
    </section>
  );
};

export default Works;
