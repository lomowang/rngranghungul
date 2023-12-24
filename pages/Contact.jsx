import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState(""); // 用于存储输入的电子邮件地址

  const handleSubmit = (event) => {
    event.preventDefault(); // 阻止表单的默认提交行为
    // 在这里处理电子邮件发送逻辑
    console.log("Submitted email:", email);
    // 可以在这里调用 API 发送电子邮件或执行其他操作
  };

  return (
    <section>
      <div>
        <h2>聯絡我們</h2>
        <p>Contact</p>
      </div>

      <div>
        <div>
          <h2>山貳六影像工作室</h2>
          <h3>Mount Two-Six Studio</h3>
          <p>
            見山三階段，是山、不是山、又是山。「山」作為自我的表示，從「山」出發的觀看方式，2010至今，使用影像媒材作為觀察與參與式的實驗創作發想。
          </p>
          <p>
            “Seeing the Mountain in Three Stages" refers to the concept of the
            mountain: it is a mountain, it is not a mountain, and yet it is a
            mountain again. The term “mountain" represents the self and
            signifies a way of perceiving. From this perspective, since 2010
            until now, the use of visual media has been employed as a means of
            experimental artistic creation, allowing for observation and
            participatory ideas.
          </p>
          <p>
            Rngrang．Hungul 歡迎大家邀她到世界各地放映她的作品或演講。
            如果你想聊聊拍攝主題、書籍、美酒或其他事物，歡迎隨時聯絡。
          </p>
          <p>E-mail：rainbowandlois@gmail.com</p>
        </div>
        <di>
          <h3>發表迴響</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">電子郵件:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">提交</button>
          </form>
        </di>
      </div>
    </section>
  );
};

export default Contact;
