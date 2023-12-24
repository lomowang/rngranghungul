"use client";
import Image from "next/image";
import React from "react";
import Fielddata from "./Fielddata";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const familydata = [
  {
    name: "關於我的母親與外婆",
    text: "About my mother and grandmother.",
    image: "/family.jpg",
  },
];

const FieldRecordings = () => {
  return (
    <section className="m-4">
      <div className=" flex flex-col items-center m-4 ">
        <h2 className="text-2xl font-bold">田野錄音</h2>
        <h2> Field Recordings</h2>
      </div>

      <div className=" xl:flex xl:px-80 leading-8 xl:m-2 ">
        {familydata.map((info, index) => {
          return (
            <motion.div
              variants={fadeIn("right", 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
              className="flex flex-col justify-center items-center m-2 "
            >
              <Image src={info.image} width={270} height={270} alt="family" />
              <h2 className="font-bold text-sm m-2">{info.name}</h2>
              <p className="text-sm/8">{info.text}</p>
            </motion.div>
          );
        })}

        <motion.div
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="xl:flex xl:flex-col xl:justify-end text-justify m-2 xl:w-1/2  leading-6"
        >
          <p className="text-sm/[16px] leading-6">
            「我一直寄望於女性的生命經驗所累積的歷史，能夠成為另外一種資源，成為面對由男性主導的現代文明的一種完全不同的力量，以便給我們打開可能性。」—戴錦華電影與文化研究者
            〈造訪·深度訪談匯集前沿認知28WOMEN：BECOMING〉
          </p>
          <span className="text-xs leading-6 mt-2">
            " I have always hoped for the history of female life experience
            could become another element, which constitutes a completely
            different strength in facing the male-dominated modern civilization,
            so as to enlighten us with its possibilities." -Dai Jinhua, Film and
            Culture Researcher〈In-depth Interview from 28WOMEN：BECOMING〉
          </span>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-justify m-2"
      >
        <Fielddata />
      </motion.div>
    </section>
  );
};

export default FieldRecordings;
