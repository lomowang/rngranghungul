import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Contact = () => {
  return (
    <section className="py-8">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">聯絡我們</h2>
        <p className="text-sm">Contact</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 bg-gray-50">
        <div className="md:flex md:justify-around md:items-start text-justify">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="md:w-1/2 mb-8 m-8 "
          >
            <h2 className="text-xl font-bold">山貳六影像工作室</h2>
            <h3 className="text-lg">Mount Two-Six Studio</h3>
            <p className="my-4 text-sm">
              見山三階段，是山、不是山、又是山。「山」作為自我的表示，從「山」出發的觀看方式，2010至今，使用影像媒材作為觀察與參與式的實驗創作發想。
            </p>
            <p className="my-4 text-sm">
              “Seeing the Mountain in Three Stages" refers to the concept of the
              mountain: it is a mountain, it is not a mountain, and yet it is a
              mountain again...
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="md:w-1/2 mb-8 m-8 text-sm"
          >
            <p className="mt-8">Rngrang．Hungul</p>
            <p className="mt-2">
              歡迎大家邀她到世界各地放映她的作品或演講。
              如果你想聊聊拍攝主題、書籍、美酒或其他事物，歡迎隨時聯絡。
            </p>
            <p className="my-4 ">
              Everyone is welcome to invite her to screen her works or speak at
              locations around the world...
            </p>
            <p className="text-sm font-bold">
              E-mail:{" "}
              <a href="mailto:rainbowandlois@gmail.com" className="underline">
                rainbowandlois@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
