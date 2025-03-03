import React from "react";
import { Link } from "react-router-dom"; // 引入 Link 组件
import { useLanguage } from './LanguageContext';
import "./Projects.css";

function Projects() {
  const { language } = useLanguage();
  return (
    <div className="projects-container">
      <div className="content-box">
        <h1>{language === 'en' ? 'My Projects' : '个人项目'}</h1>
        <ul>
          <li>
            <Link to="/projects/HighPerformanceServer">{language === 'en' ? 'C++ High Performance Server' : 'C++ 高性能聊天室'}</Link>
          </li>
          <li>
            <Link to="/projects/STPSimulation">{language === 'en' ? 'Simple Transport Protocol' : 'udp模拟可靠双向通信'}</Link>
          </li>
          <li>
            <Link to="/projects/CppBoostSearch">{language === 'en' ? 'C++ CppBoost Search' : '站内搜索引擎'}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
