import React from "react";
import { useLanguage } from './LanguageContext';
import "./HighPerformanceServer.css"; // 引入样式文件

function HighPerformanceServer() {
  const { language, toggleLanguage } = useLanguage();

  // 中文和英文的文本
  const content = {
    title: {
      zh: "🚀 C++ 高性能聊天服务器",
      en: "🚀 C++ High Performance Chat Server",
    },
    summary: {
      zh: "一个基于 C++17 实现的高性能聊天服务器，采用 Reactor 多线程模型，支持非阻塞 IO 和 MySQL 数据持久化。",
      en: "A high-performance chat server implemented with C++17, adopting Reactor multi-threaded model, supporting non-blocking IO and MySQL data persistence.",
    },
    highlights: {
      zh: [
        "高性能架构：基于 Reactor 多线程模型，QPS 可达 1k+。",
        "智能 IO 管理：epoll ET 模式 + 非阻塞 IO + 事件驱动。",
        "数据持久化：集成 MySQL 8.0，完整记录用户行为日志。",
        "安全稳定：连接资源自动回收，异常处理机制完善。",
        "跨平台：兼容 Linux/Unix 系统（已在 CentOS 7.6 验证）。",
      ],
      en: [
        "High-performance architecture: Based on Reactor multi-threaded model, QPS can reach 1k+.",
        "Intelligent IO management: epoll ET mode + non-blocking IO + event-driven.",
        "Data persistence: Integrated MySQL 8.0, fully records user behavior logs.",
        "Security and stability: Automatic connection resource recovery, complete exception handling mechanism.",
        "Cross-platform: Compatible with Linux/Unix systems (verified on CentOS 7.6).",
      ],
    },
    coreComponents: {
      zh: [
        "网络模型：Reactor + ThreadPool",
        "事件驱动：epoll ET 模式",
        "连接管理：自定义 Buffer + 智能指针",
        "数据存储：MySQL 连接池",
        "异常处理：统一错误码机制",
      ],
      en: [
        "Network model: Reactor + ThreadPool",
        "Event-driven: epoll ET mode",
        "Connection management: Custom Buffer + Smart pointers",
        "Data storage: MySQL connection pool",
        "Exception handling: Unified error code mechanism",
      ],
    },
    performanceOptimization: {
      zh: [
        "使用对象池管理连接资源。",
        "双缓冲技术减少锁竞争。",
        "零拷贝数据传输。",
        "定时器轮处理超时连接。",
      ],
      en: [
        "Using object pool to manage connection resources.",
        "Double buffering technology reduces lock contention.",
        "Zero-copy data transmission.",
        "Timer wheel for handling timeout connections.",
      ],
    },
    expansionPlan: {
      zh: [
        "WebSocket 协议支持。",
        "分布式集群部署。",
        "Redis 缓存集成。",
        "消息加密传输。",
      ],
      en: [
        "WebSocket protocol support.",
        "Distributed cluster deployment.",
        "Redis cache integration.",
        "Message encryption transmission.",
      ],
    },
  };

  return (
    <div className="project-detail">
      <h1>{content.title[language]}</h1>

      <div className="project-summary">
        <p>{content.summary[language]}</p>

        <h2>{language === 'zh' ? '项目架构图' : 'System Architecture Diagram'}</h2>
        <div className="uml-image">
          <img src="/uml.jpg" alt="System UML Diagram" />
        </div>

        <h2>{language === 'zh' ? '项目亮点' : 'Project Highlights'}</h2>
        <ul>
          {content.highlights[language].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>{language === 'zh' ? '核心组件' : 'Core Components'}</h2>
        <ul>
          {content.coreComponents[language].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>{language === 'zh' ? '性能优化' : 'Performance Optimization'}</h2>
        <ul>
          {content.performanceOptimization[language].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>{language === 'zh' ? '扩展计划' : 'Expansion Plan'}</h2>
        <ul>
          {content.expansionPlan[language].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HighPerformanceServer;
