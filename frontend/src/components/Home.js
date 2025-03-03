import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
      setUser(loggedInUser);  // 已登录，更新状态
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');  // 移除 localStorage 中的用户信息
    setUser(null);  // 更新状态
    navigate('/login');  // 重定向到登录页
  };

  return (
    <div className="home-container">
      <div className="greeting-container">
        <h2>
          {user ? (
            `Hello, ${user.username}! Nice to meet you.`
          ) : (
            "Hello, user! You can register or login to get started."
          )}
        </h2>
      </div>

      <div className="content-box">
        <h1>Welcome to Liren's Website</h1>
        <p>
          Hi, I'm a developer passionate about <span className="cpp">C++</span>,{' '}
          <span className="sql">Python3</span>, <span className="unity">JS</span>,{' '}
          <span className="js">TS</span>, <span className="ts">TS</span>,{' '}
          <span className="shell">Shell</span>, <span className='java'>Java</span>
        </p>
      </div>
      <button className="floating-about-button" onClick={() => navigate('/about')}>
        About Me →
      </button>
    </div>
  );
}

export default Home;
