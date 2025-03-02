import React from "react";
import { useNavigate } from "react-router-dom"; // 导入 useNavigate
import './AboutMe.css'
const AboutMe = () => {
  const navigate = useNavigate(); // 获取导航函数

  return (
    <div>
      <section id="about" className="about-container">
        <h1>关于我</h1>
        <img src="1.jpg" alt="My Avatar" className="avatar"/>
        <p>你好，我是 Liren，一名热爱编程的开发者，擅长 C++、SQL、Unity。</p>
      </section>
    </div>
  );
};

export default AboutMe;
