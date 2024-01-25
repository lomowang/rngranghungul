import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Hero = () => {
  const slideUpVariant = {
    hidden: {
      y: 50, // 初始向下偏移
      opacity: 0, // 初始不透明度
    },
    show: {
      y: 0, // 结束位置（无偏移）
      opacity: 1, // 完全可见
      transition: {
        duration: 1, // 动画持续时间
        ease: "easeOut", // 缓动函数
      },
    },
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
      <motion.div
        variants={slideUpVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        <Image
          src="/womanHunter.jpg"
          width={1280}
          height={1280}
          alt="hero"
          className={`w-full bg-cover transition-transform duration-1000 md:scale-100 ${
            isScrolled && "md:scale-75"
          }`}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
