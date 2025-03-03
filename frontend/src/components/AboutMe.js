import React from "react";
import { FaCode, FaDatabase, FaServer, FaNetworkWired } from "react-icons/fa"; // 引入图标
import { useLanguage } from './LanguageContext';  
import './AboutMe.css';

const AboutMe = () => {
  const { language } = useLanguage(); 

  const content = {
    en: {
      title: "About Me",
      avatarAlt: "My Avatar",
      sections: [
        {
          icon: <FaCode className="icon" />,
          heading: "Programming Languages & Data Structures",
          points: [
            "Familiar with basic syntax of C/C++, object-oriented programming, template programming, and dynamic memory management in C/C++.",
            "Familiar with common STL containers, smart pointers, and RAII.",
            "Knowledge of basic data structures such as arrays, linked lists, stacks, queues, binary trees, and graphs.",
            "Familiar with common sorting algorithms, such as quick sort, merge sort, heap sort.",
            "Knowledge of common design patterns like Singleton, Strategy, etc.",
            "Familiar with common databases like MySQL, PostgreSQL."
          ]
        },
        {
          icon: <FaServer className="icon" />,
          heading: "Operating Systems",
          points: [
            "Familiar with Linux commands and multi-threading/multi-process programming on Linux, with knowledge of process synchronization and mutual exclusion mechanisms.",
            "Proficient in inter-process communication (IPC) methods: pipes, message queues, semaphores, shared memory, etc.",
            "Familiar with Shell and Python programming for batch processing on Linux."
          ]
        },
        {
          icon: <FaNetworkWired className="icon" />,
          heading: "Computer Networks",
          points: [
            "Familiar with the TCP/IP protocol stack, data encapsulation, and application.",
            "Knowledge of basic network programming, including Socket programming.",
            "Familiar with common I/O models (blocking, non-blocking, signal-driven, multiplexing, asynchronous).",
            "Familiar with multiplexed I/O techniques (select, poll, epoll)."
          ]
        }
      ]
    },
    zh: {
      title: "关于我",
      avatarAlt: "我的头像",
      sections: [
        {
          icon: <FaCode className="icon" />,
          heading: "编程语言 & 数据结构",
          points: [
            "熟悉 C/C++ 基本语法，了解面向对象思想、模板编程，熟悉 C/C++ 动态内存管理。",
            "熟悉常用 STL 容器的使用，了解常用容器和智能指针及 RAII 思想。",
            "熟悉基本的数据结构，如：顺序表，链表，栈，队列，二叉树，图等。",
            "了解常见排序算法，如：快速排序，归并排序，堆排序等。",
            "了解常见设计模式，如：单例模式，策略模式等。",
            "了解常见数据库，如：MySQL, PostgreSQL。"
          ]
        },
        {
          icon: <FaServer className="icon" />,
          heading: "操作系统",
          points: [
            "熟悉 Linux 命令，掌握 Linux 下的多线程、多进程编程，了解进程同步及互斥机制。",
            "掌握进程间通信（IPC）：管道、消息队列、信号量、共享内存等。",
            "熟悉 Shell 和 Python 编程，能够进行 Linux 系统批量处理。"
          ]
        },
        {
          icon: <FaNetworkWired className="icon" />,
          heading: "计算机网络",
          points: [
            "熟悉 TCP/IP 协议栈和数据的封装与应用。",
            "熟悉网络编程基础，熟悉 Socket 网络套接字。",
            "了解常见 I/O 模型（阻塞、非阻塞、信号驱动、多路复用、异步）。",
            "熟悉多路复用 I/O 技术（select、poll、epoll）。"
          ]
        }
      ]
    }
  };

  const { title, avatarAlt, sections } = content[language];

  return (
    <div className="about-container">
      <div className="title-container">
        <h2 className="title">{title}</h2>
        <img src="1.jpg" alt={avatarAlt} className="avatar"/>
      </div>
      {sections.map((section, index) => (
        <div className="section" key={index}>
          {section.icon}
          <h3>{section.heading}</h3>
          {section.points.map((point, i) => (
            <p key={i}><span>・</span>{point}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AboutMe;
