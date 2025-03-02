import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';  // 引入CSS文件

function Home() {
  const [user, setUser] = useState(null);  // 存储用户信息
  const navigate = useNavigate();

  // 检查 localStorage 中是否有用户信息
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
      setUser(loggedInUser);  // 已登录，更新状态
    }
  }, []);

  // 退出登录的处理
  const handleLogout = () => {
    localStorage.removeItem('user');  // 移除 localStorage 中的用户信息
    setUser(null);  // 更新状态
    navigate('/login');  // 重定向到登录页
  };

  return (
    <div className="home-container">
      {/* 用户问候信息 */}
      <div className="greeting-container">
        <h2>
          {user ? (
            `Hello, ${user.username}! Nice to meet you.`  // 显示用户名
          ) : (
            "Hello, user! You can register or login to get started."  // 未登录时显示的消息
          )}
        </h2>
      </div>

      {/* 页面上的其他内容 */}
      <div className="content-box">
        <h1>Welcome to Liren's Website</h1>
        <p>
          Hi, I'm a developer passionate about <span className="cpp">C++</span>,{' '}
          <span className="sql">SQL</span>, and <span className="unity">Unity</span>.
        </p>
      </div>
    </div>
  );
}

export default Home;
