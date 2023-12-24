"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
const Hero = () => {
  return (
    <section>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <Image
          src="/womanHunter.jpg"
          width={1280}
          height={1280}
          alt="hero"
          className="w-full bg-cover"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
