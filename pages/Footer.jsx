import React from "react";
import { FacebookIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Footer = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex flex-col justify-center items-center m-4"
    >
      <Link
        href="https://www.facebook.com/rainbowandlois"
        className="bg-blue-600  rounded-xl"
      >
        <FacebookIcon size={30} color="#FFFFFF" />
      </Link>
      <p className="m-8">©2023 Rngrang．Hungul. All Rights Reserved.</p>
    </motion.div>
  );
};

export default Footer;
Footer;
