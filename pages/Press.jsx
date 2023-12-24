import Image from "next/image";
import Link from "next/link";
import React from "react";

const Press = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">文章評論</h2>
        <p className="tex-sm">Press</p>
      </div>
      <div className="m-4">
        <Image
          src="/Verse.jpg"
          width={280}
          height={280}
          layout="responsive"
          objectFit="cover"
          alt="verse"
        />
        <h2 className="py-4">
          與動物共同生活的狩獵者—重新看見原住民族狩獵文化
        </h2>
        <p className=" text-sm">
          VERSE Issue 19 <br></br>2023/10/10
        </p>
        <Link href="/">閱讀更多</Link>
      </div>
    </section>
  );
};

export default Press;
