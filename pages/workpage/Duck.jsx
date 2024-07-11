import React from "react";

import Image from "next/image";
import Duckswiper from "./Duckswiper";

const Duck = () => {
  return (
    <section>
      <Duckswiper />

      <div className="flex p-10 justify-center text-justify	">
        <div className="w-1/2 m-4 ">
          <h2 className="text-lg font-bold">2023-2024鴨蛋與Gaya—召喚</h2>
          <br></br>
          <p>2023-2024 Duck Eggs and Gaya – The Calling</p>
          <br></br>
          <p>
            這次的作品《召喚》，發想的開始是從2021年至2022年的秋冬拍攝《揹獵物的女人》的田野調查所延伸出來的創作計畫，有關於過去太魯閣族獵人、獵場（土地）與傳統信仰儀式中緊密相連的超自然力量，如果同一個獵區打不到獵物，就會透過神靈的力量來獲取動物：
          </p>
          <br></br>
          <p className="w-1/2 justify-center m-auto">
            以前阿公做過召喚的儀式，如果一個獵區裡一直都未抓到獵物，就必須要把第一門與最後一門的陷阱拔除，回到家裡準備一隻鴨或是鵝，小隻的豬也可以，以這三種擇一來做祭品，要選在家裡隱密的地方來做，不能公開對任何人提及，當祭品處理完之後，一家人要聚再一起吃完，結束之後，放陷阱的人透過念誦的方式告知並傳達給祖先，隔日準備入山，重新設置陷阱，並把鴨蛋一起埋進陷阱，整個過程不能讓任何人知道…….（Mkduyung家族,Hungul
            Kuing口述）
          </p>
          <br></br>
          <p>
            這次創作想要去實驗上一代族人記憶裡所流傳下來的召喚傳說，試圖重啟太魯閣族傳統信仰裡萬物有靈的世界在現代的世界是否能搭起一座橋樑，研究方法透過現代的攝影錄像技術重現當時的口述記錄，用影像視覺的語言打開那一扇Gaya的大門-召喚術。
          </p>
          <br></br>
          <p>
            This work, “The Calling", was developed from the fieldwork of the
            film “The Woman Carrying the Prey" in the fall/winter of 2021-2022.
            It is about the supernatural power of the Taroko hunters, the
            hunting grounds and the traditional beliefs that are closely linked
            to the rituals. If the prey could not be found in the same hunting
            area, one would use the power of the spirits to obtain the prey:
          </p>
          <br></br>
          <p>
            Grandpa used to do the calling ceremony, if no prey has been caught
            in a hunting area, the first and last traps must be removed. Then,
            we should prepare a duck or a goose, or a small pig at home, and
            choose one of these three kinds as an offering. We should do it in a
            private place at home, and we should not mention it openly to
            anyone. The family would get together to eat the offerings
            afterwards, and the person who set the trap would inform and convey
            it to the ancestors through the chanting. The next day, they
            prepared to enter the mountain, reset the traps, and buried the duck
            eggs in the traps together, and the whole process must not be known
            to anyone …… (dictated by Hungul Kuing, Mkduyung family)
          </p>
          <br></br>
          <p>
            This artwork attempts to investigate the legend of summoning that
            has been passed down from the memory of the last generation of
            tribal people, with the aim of bringing back the traditional beliefs
            held by the Taroko people that everything has a spirit in the world,
            to see whether it is possible to connect with the modern world. The
            research methodology employs contemporary photographic and video
            technology to reproduce the oral records of the time, and it is
            through the visual language of images that the door to Gaya is
            opened – the Calling.
          </p>
          <br></br>
        </div>
        <div>
          <Image src="/duckgaya.jpg" width={400} height={600} />
          <h2>主視覺海報 Visual Design</h2>
        </div>
        {/* YouTube 影片嵌入 */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ex4JSchgA9A"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          onContextMenu={(e) => e.preventDefault()} // 禁用右鍵菜單
        ></iframe>
      </div>
    </section>
  );
};

export default Duck;
