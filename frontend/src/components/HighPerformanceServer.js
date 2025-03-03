import React from "react";
import "./HighPerformanceServer.css"; // 引入样式文件

function HighPerformanceServer() {
  return (
    <div className="project-detail">
      <h1>🚀 C++ 高性能聊天服务器</h1>
      
      <div className="project-summary">
        <p>一个基于 C++17 实现的高性能聊天服务器，采用 Reactor 多线程模型，支持非阻塞 IO 和 MySQL 数据持久化。</p> 
        <h2>系统架构图 </h2>
        <div className="uml-image">
          <img src="/uml.jpg" alt="System UML Diagram" />
        </div>
      
        <h2>项目亮点</h2>
        <ul>
          <li><strong>高性能架构：</strong>基于 Reactor 多线程模型，QPS 可达 1k+。</li>
          <li><strong>智能 IO 管理：</strong>epoll ET 模式 + 非阻塞 IO + 事件驱动。</li>
          <li><strong>数据持久化：</strong>集成 MySQL 8.0，完整记录用户行为日志。</li>
          <li><strong>安全稳定：</strong>连接资源自动回收，异常处理机制完善。</li>
          <li><strong>跨平台：</strong>兼容 Linux/Unix 系统（已在 CentOS 7.6 验证）。</li>
        </ul>

        <h2>核心组件</h2>
        <ul>
          <li><strong>网络模型：</strong>Reactor + ThreadPool</li>
          <li><strong>事件驱动：</strong>epoll ET 模式</li>
          <li><strong>连接管理：</strong>自定义 Buffer + 智能指针</li>
          <li><strong>数据存储：</strong>MySQL 连接池</li>
          <li><strong>异常处理：</strong>统一错误码机制</li>
        </ul>

        <h2>性能优化</h2>
        <ul>
          <li>使用对象池管理连接资源。</li>
          <li>双缓冲技术减少锁竞争。</li>
          <li>零拷贝数据传输。</li>
          <li>定时器轮处理超时连接。</li>
        </ul>

        <h2>扩展计划</h2>
        <ul>
          <li>WebSocket 协议支持。</li>
          <li>分布式集群部署。</li>
          <li>Redis 缓存集成。</li>
          <li>消息加密传输。</li>
        </ul>

        <h2>构建步骤</h2>
        <p>环境要求：</p>
        <ul>
          <li>GCC 9.0+</li>
          <li>CMake 3.12+</li>
          <li>MySQL 8.0+</li>
          <li>Linux Kernel 3.10+</li>
        </ul>
        <p>构建步骤：</p>
        <pre>
          git clone https://github.com/yourusername/High_Performance_Server.git<br />
          cd High_Performance_Server<br />
          mkdir build && cd build<br />
          cmake ..<br />
          make -j$(nproc)
        </pre>
      </div>
    </div>
     
  );
}

export default HighPerformanceServer;
