import React from "react";
import { FaCode, FaDatabase, FaServer, FaNetworkWired } from "react-icons/fa"; // 引入图标
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="title-container">
        <h2 className="title">关于我</h2>
        <img src="1.jpg" alt="My Avatar" className="avatar"/>
      </div>
      <div className="section">
        <FaCode className="icon" />
        <h3>编程语言 & 数据结构</h3>
        <p><span>・</span>熟悉 C/C++ 基本语法，了解面向对象思想、模板编程，熟悉 C/C++ 动态内存管理。</p>
        <p><span>・</span>熟悉常用 STL 容器的使用，了解常用容器 和 智能指针及 RAII 思想。</p>
        <p><span>・</span>熟悉基本的数据结构，如：顺序表，链表，栈，队列，二叉树，图等</p>
        <p><span>・</span>了解常见排序算法，如：快速，归并，堆等</p>
        <p><span>・</span>了解常见设计模式，如：单例模式，策略模式等。</p>
        <p><span>・</span>了解 常见数据库，如：mysql, postgresql。</p>
      </div>

      <div className="section">
        <FaServer className="icon" />
        <h3>操作系统</h3>
        <p><span>・</span>熟悉 Linux 命令，掌握 Linux 下的多线程、多进程编程，了解进程同步及互斥机制。</p>
        <p><span>・</span>掌握进程间通信（IPC）：管道、消息队列、信号量、共享内存等。</p>
        <p><span>・</span>熟悉 Shell 和 Python 编程，能够进行 Linux 系统批量处理。</p>
      </div>

      <div className="section">
        <FaNetworkWired className="icon" />
        <h3>计算机网络</h3>
        <p><span>・</span>熟悉TCP/IP 协议栈和数据的封装和应用。</p>
        <p><span>・</span>熟悉网络编程基础，熟悉Socket网络套接字。</p>
        <p><span>・</span>了解常见 I/O 模型（阻塞、非阻塞、信号驱动、多路复用、异步）。</p>
        <p><span>・</span>熟悉多路复用 I/O 技术（select、poll、epoll）。</p>
      </div>
    </div>
  );
};

export default AboutMe;
