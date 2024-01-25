"use client";
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // 添加事件监听器
    window.addEventListener("scroll", handleScroll);

    // 清理函数
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 max-w-[1980px] py-2 px-4 m-8 xl:py-10 mx-auto text-sm flex items-center justify-between lg:px-8  ${
        scrolled ? "bg-gray-200 shadow-xl" : ""
      }`}
    >
      {/* ... 其他代码 ... */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <h1 className="text-base">
          <Link href="/">RNGRANG．HUNGUL</Link>
        </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <Nav
          containerStyles="xl:flex items-center justify-between hidden"
          listStyles="flex gap-4 text-sm "
        />
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="xl:hidden"
      >
        <MobileNav />
      </motion.div>
    </header>
  );
};

export default Header;
