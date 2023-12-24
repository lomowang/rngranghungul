"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <header className="max-w-[1440px]  py-2 px-4 m-8 xl:py-10  mx-auto text-sm flex items-center  justify-between lg:px-8">
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
