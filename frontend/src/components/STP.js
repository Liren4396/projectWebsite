import React from "react";
import { useLanguage } from './LanguageContext';
import "./ProjectSpecification.css";

function STPSimulation() {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: "📡 STP Segment Transmission Simulation",
      summary: "Simulates a simple sender-receiver communication using UDP sockets.",
      github: "GitHub project link:",
      features: [
        "Command-line argument parsing",
        "Random number generation",
        "Modular arithmetic operations",
        "UDP socket communication",
        "Non-blocking and blocking socket operations",
        "Host and network byte order conversion",
        "Sliding window mechanism",
        "Multithreading (Sender)",
        "Simple logging mechanism",
      ],
      description: [
        "The sender has three command-line parameters: receiver's hostname/IP, port number, and runtime duration.",
        "The receiver listens on the specified port and waits for messages with a specified timeout."
      ],
      messageFormat: {
        senderToReceiver: ["2 bytes: 16-bit unsigned integer"],
        receiverToSender: ["3 bytes: raw number (2 bytes), odd/even flag (1 byte)"]
      },
      codeStructure: [
        { name: "STP_segment", description: "Class representing the message data structure" },
        { name: "parse_port()", description: "Function to validate and parse the port number" },
        { name: "parse_wait_time()", description: "Function to validate and parse the wait time" },
        { name: "parse_win()", description: "Function to validate and parse the sliding window size" },
        { name: "recvISN_sendACK()", description: "Function to receive initial SYN message and send ACK" },
        { name: "send_data()", description: "Function to send data and handle loss and acknowledgment" },
        { name: "Main execution block", description: "Set up sockets, handle message transmission, and log activity" }
      ],
      slidingWindow: [
        "The sliding window is used to control the amount of data the sender can transmit before waiting for acknowledgment.",
        "The sender maintains a window of segments that have been sent but not yet acknowledged.",
        "The receiver sends ACK messages to acknowledge the received segments.",
        "Upon receiving ACK, the sender slides the window forward and continues sending new segments."
      ]
    },
    zh: {
      title: "📡 STP 段传输模拟",
      summary: "模拟了使用 UDP 套接字的简单发送方-接收方通信。",
      github: "GitHub 项目地址：",
      features: [
        "命令行参数解析",
        "随机数生成",
        "模算术运算",
        "UDP 套接字通信",
        "非阻塞和阻塞套接字操作",
        "主机与网络字节顺序转换",
        "滑动窗口机制",
        "多线程（发送方）",
        "简单的日志记录机制"
      ],
      description: [
        "发送方有三个命令行参数：接收方的主机名/IP、端口号和运行时长。",
        "接收方在指定端口上监听并等待消息，有指定的超时时间。"
      ],
      messageFormat: {
        senderToReceiver: ["2 字节：16 位无符号整数"],
        receiverToSender: ["3 字节：原始数字（2 字节），奇数/偶数标志（1 字节）"]
      },
      codeStructure: [
        { name: "STP_segment", description: "代表消息数据结构的类" },
        { name: "parse_port()", description: "验证和解析端口号的函数" },
        { name: "parse_wait_time()", description: "验证和解析等待时间的函数" },
        { name: "parse_win()", description: "验证和解析滑动窗口大小的函数" },
        { name: "recvISN_sendACK()", description: "接收初始 SYN 消息并发送 ACK 的函数" },
        { name: "send_data()", description: "发送数据并处理丢失和确认的函数" },
        { name: "主执行块", description: "设置套接字，处理消息传输，并记录活动" }
      ],
      slidingWindow: [
        "滑动窗口用于控制发送方在等待确认前可以发送的数据量。",
        "发送方维护一个窗口，包含已发送但尚未确认的数据段。",
        "接收方通过发送 ACK 消息来确认接收到的数据段。",
        "发送方在接收到 ACK 后，将窗口向前滑动，继续发送新的数据段。"
      ]
    }
  };

  const selectedTexts = texts[language];

  return (
    <div className="project-detail">
      <h1>{selectedTexts.title}</h1>
      
      <div className="project-summary">
        <p>{selectedTexts.summary}</p> 
        <p>{selectedTexts.github} <a href="https://github.com/Liren4396/STP/" target="_blank">Boost_Searcher</a></p>
        
        <h2>🛠 {language === 'en' ? 'Function' : '功能'}</h2>
        <ul>
          {selectedTexts.features.map((feature, index) => <li key={index}>{feature}</li>)}
        </ul>

        <h2>📑 {language === 'en' ? 'Description' : '描述'}</h2>
        <ul>
          {selectedTexts.description.map((desc, index) => <li key={index}>{desc}</li>)}
        </ul>

        <h2>📡 {language === 'en' ? 'Message format' : '消息格式'}</h2>
        <h3>{language === 'en' ? 'sender to reciever' : '发送方至接收方'}</h3>
        <ul>
          {selectedTexts.messageFormat.senderToReceiver.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <h3>{language === 'en' ? 'reciever to sender' : '接收方至发送方'}</h3>
        <ul>
          {selectedTexts.messageFormat.receiverToSender.map((item, index) => <li key={index}>{item}</li>)}
        </ul>

        <h2>🔧 {language === 'en' ? 'data structure' : '代码结构'}</h2>
        <ul>
          {selectedTexts.codeStructure.map((item, index) => (
            <li key={index}><strong>{item.name}：</strong>{item.description}</li>
          ))}
        </ul>

        <h2>📊 {language === 'en' ? 'Sliding window Mechanism' : '滑动窗口机制'}</h2>
        <ul>
          {selectedTexts.slidingWindow.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default STPSimulation;
