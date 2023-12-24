import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Cvexperience from "./Cvexperience";

const Mainexperience = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-xl">主要經歷</h2>
        <p className="font-sm">CV</p>
      </div>

      <div className=" m-4 xl:m-8 xl:flex xl:justify-center  ">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="xl:w-full"
        >
          {/* 响应式宽度 */}
          <Image
            src="/Rngean1.jpg"
            width={480}
            height={280}
            alt="Rngean"
            layout="responsive"
            objectFit="cover"
          />
        </motion.div>{" "}
        <div className="xl:flex flex-col  text-xs xl:m-8">
          <Cvexperience />
        </div>
      </div>
    </section>
  );
};

export default Mainexperience;
