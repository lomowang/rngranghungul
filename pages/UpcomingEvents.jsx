import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const UpcomingEvents = () => {
  return (
    <div className="flex flex-col justify-center items-center leading-8 ">
      <h2 className="text-base leading-8 font-bold ">近期活動</h2>
      <h2 className="text-sm">Upcoming Events</h2>
      <motion.p
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="xl:w-1/2  w-3/4 m-4 "
      >
        本屆藝術節集結三檔展覽——「情山色海：酷兒．原民．秘密史」、「複眼觀：消失與定格的肖像」、「Misakorengay製陶的人—採集即為創作的開始」，及主題限定「美食花開×手藝花開系列活動」，並規劃藝術家講座、工作坊、專家導覽等豐富活動，自2023年9月1日至12月3日，呈現原住民族創作者透過藝術實踐激發出來的酷異（Queer）性別觀點、以原住民族自身出發論述原住民族攝影及兒童美感教育連結在地媒材的創作成果，共同展現多元原住民當代藝術風貌。
      </motion.p>

      {/* pulima */}
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="xl:w-1/2 w-full px-4 py-4 m-4"
      >
        <div>
          <h2 className="flex justify-center items-center font-bold bg-slate-200">
            Palalan – 2023 Pulima藝術節
          </h2>
          <ul className=" xl:flex justify-center items-center  ">
            <li className="text-base leading-8">
              <p>活動期程：2023年9月1日至12月3日 (週二至週日10:00-18:00)</p>
              <p>活動地點：花蓮縣文化創意產業園區24棟</p>
              <Link
                href="https://artouch.com/art-news/content-115744.html"
                className="text-green-600"
              >
                活動資訊
              </Link>
            </li>
            <li className=" relative">
              <Image
                src="/pulima.jpg"
                layout="responsive"
                width={800} // 原始图片宽度
                height={270} // 原始图片高度
                alt="pulima"
              />
            </li>
          </ul>
        </div>
      </motion.div>

      {/* compoundeyeview */}
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="xl:w-1/2 w-full px-4 py-4 m-4"
      >
        <div>
          <h2 className="flex justify-center items-center font-bold bg-slate-200">
            複眼觀：消失與定格的肖像
          </h2>
          <ul className=" xl:flex justify-center items-center  ">
            <li className="text-base leading-8">
              <p>活動期程：2023年9月9日至12月3日 (週六至週日10:00-18:00)</p>
              <p>活動地點：花蓮縣文化創意產業園區24棟</p>
              <p>活動地點：花蓮縣文化創意產業園區24棟</p>
              <p>策展人：劉曉蕙</p>
              <p>協同策展人：田名璋</p>
              <p>
                展者：葉柏強、彭光遠神父、瓦歷斯．拉拜、金成財、黃雅憶、余欣蘭、阮原閩、潘巴奈、一好・屴夯
              </p>
              <p></p>

              <Link
                href="https://artouch.com/art-news/content-115744.html"
                className="text-green-600"
              >
                活動資訊
              </Link>
            </li>
            <li className=" relative">
              <Image
                src="/compoundeyeview.jpg"
                layout="responsive"
                width={800} // 原始图片宽度
                height={270} // 原始图片高度
                alt="compoundeyeview"
              />
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="xl:w-1/2  m-4 px-4"
      >
        <h2 className="font-bold  bg-gray-200 p-4">
          策展理念 <br></br>策展人 田名璋
        </h2>
        <p>
          1839年攝影發明之後，這個媒體像是人類眼睛的延伸，將眼界放到無所不在的世界各個角落，做為觀看世界/人們的絕佳工具，這樣的觀看裡，帶來了觀看的議題：誰被拍？被如何拍？誰拍的？為何而拍？被拍的影像放在哪裡被閱讀？誰是觀眾？被怎麼觀看？內容是遙遠的他者？身旁的你們？還是反觀自我？
          <br></br>
          眼前看著一張肖像照片，我們直視著，我們和照片裡的人物產生了連結，而透過照片也看到了拍攝者和被攝者之間的關係；從最親密的自拍照/家族照，為族人的紀錄，到最遙遠的繪葉書；這些照片同時也並陳著身份認同、家族/族群意識、文化傳承、抵抗主流、觀光/資本主義、殖民主義等內容。複眼觀：經由歷史脈絡與當代詮釋，從他者、第二人稱的你們/族群、再到第一人稱的我們/自拍創作，此展覽照片從1910年代到2020年代，透過百年的歷史爬梳，看見觀看的轉變，也看見當代原住民族重新詮釋自我影像再現的當代意義。
        </p>
        <h2 className="font-bold bg-gray-200 p-4">策展人 劉曉蕙</h2>
        <p>
          人的「觀看」透過鏡頭來擄掠他族，你成為我的俘虜。
          <br></br>
          早年的原住民族是被影像擄掠的對象，文明人帶著相機進入部落，以文化獵奇、人類學田野、旅遊觀光等對族人進行攝獵，喀喳！花蓮文史工作者葉柏強所收藏的日本時代的繪葉書和民國時期的明信片多屬於這類影像；1953年法國外方傳教會進入花東一帶興建教會傳播福音，彭光遠神父拿起膠卷相機拍照紀錄，把族人收納到天主的垂憐。
          <br></br>
          當原住民族狩獵被禁止，部族的菁英學習用相機取代槍枝，透過觀景窗「觀看」自身的部落、物件和生活，進行文化詮釋和藝術轉譯，賽德克族瓦歷斯．拉拜（吳鼎武）以光柵片裡錯位即逝的人像提出「隱形計畫」、布農族金成財以報導攝影紀錄獵人耆老所詢問「寂靜的槍聲」，太魯閣族余欣蘭拿起攝影機追隨母親獵人上山而看見「山上的人」、賽德克族阮原閩藉著尋求、製作和穿著族服來詮釋無法回返的祖靈訓詁「一身的紅」，黃雅憶「阿布族臉書日記」的貼文真情吐露身處多元族群的心聲。
          <br></br>
          「複眼觀」的策展取自「觀看」原住民族多元視角的切片，在影像爆炸的時代裡更弔詭的被導向為聯合豐年祭、肖像擺拍、文物陳列，於是我們試辦「原住民家族照相簿」的徵件，期待看見族人所珍藏的老照片裡的記憶，無論照片背後的故事是歡笑或悲情，原住民族正摩拳擦掌以影像參與製造世界。
        </p>
      </motion.div>
    </div>
  );
};

export default UpcomingEvents;
