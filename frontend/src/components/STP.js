import React from "react";
import "./STP.css"; // 引入样式文件

function STPSimulation() {
  return (
    <div className="project-detail">
      <h1>📡 STP 段传输模拟</h1>
      
      <div className="project-summary">
        <p>模拟了使用 UDP 套接字的简单发送方-接收方通信。</p> 
        <p>GitHub 项目地址：<a href="https://github.com/Liren4396/STP/" target="_blank">Boost_Searcher</a></p>
        <h2>🛠 功能</h2>
        <ul>
          <li>命令行参数解析</li>
          <li>随机数生成</li>
          <li>模算术运算</li>
          <li>UDP 套接字通信</li>
          <li>非阻塞和阻塞套接字操作</li>
          <li>主机与网络字节顺序转换</li>
          <li>滑动窗口机制</li>
          <li>多线程（发送方）</li>
          <li>简单的日志记录机制</li>
        </ul>

        <h2>📑 描述</h2>
        <ul>
          <li>发送方有三个命令行参数：接收方的主机名/IP、端口号和运行时长。</li>
          <li>接收方在指定端口上监听并等待消息，有指定的超时时间。</li>
        </ul>

        <h2>📡 消息格式</h2>
        <h3>发送方至接收方</h3>
        <ul>
          <li>2 字节：16 位无符号整数</li>
        </ul>
        <h3>接收方至发送方</h3>
        <ul>
          <li>3 字节：原始数字（2 字节），奇数/偶数标志（1 字节）</li>
        </ul>

        <h2>🔧 代码结构</h2>
        <ul>
          <li><strong>STP_segment：</strong> 代表消息数据结构的类</li>
          <li><strong>parse_port()：</strong> 验证和解析端口号的函数</li>
          <li><strong>parse_wait_time()：</strong> 验证和解析等待时间的函数</li>
          <li><strong>parse_win()：</strong> 验证和解析滑动窗口大小的函数</li>
          <li><strong>recvISN_sendACK()：</strong> 接收初始 SYN 消息并发送 ACK 的函数</li>
          <li><strong>send_data()：</strong> 发送数据并处理丢失和确认的函数</li>
          <li><strong>主执行块：</strong> 设置套接字，处理消息传输，并记录活动</li>
        </ul>

        <h2>📊 滑动窗口机制</h2>
        <p>滑动窗口用于控制发送方在等待确认前可以发送的数据量。</p>
        <ul>
          <li>发送方维护一个窗口，包含已发送但尚未确认的数据段。</li>
          <li>接收方通过发送 ACK 消息来确认接收到的数据段。</li>
          <li>发送方在接收到 ACK 后，将窗口向前滑动，继续发送新的数据段。</li>
        </ul>
      </div>
    </div>
  );
}

export default STPSimulation;
