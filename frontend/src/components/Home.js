import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';  // Import the useLanguage hook
import './Home.css';

function Home() {
  const [user, setUser] = useState(null);
  const [userCount, setUserCount] = useState(0); // 用于存储历史注册人数
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage(); // Use the useLanguage hook

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
      setUser(loggedInUser);  // 已登录，更新状态
    }

    fetch('/api/userCount')
      .then((response) => response.json())
      .then((data) => setUserCount(data.userCount))
      .catch((error) => console.error('获取用户总数失败:', error));
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
            `${language === 'en' ? 'Hello' : '你好'}, ${user.username}! ${language === 'en' ? 'Nice to meet you.' : '很高兴见到你。'}`
          ) : (
            language === 'en' 
              ? "Hello, user! You can register or login to get started." 
              : "你好，用户！你可以注册或登录开始。"
          )}
        </h2>
      </div>

      <div className="content-box">
        <h1>{language === 'en' ? 'Welcome to my Website' : '欢迎来到我的网站'}</h1>
        <p>
          {language === 'en' ? 
            'Hi, I\'m currently studying at UNSW, and I know: ' : 
            '你好, 我目前就读于UNSW, 我会: '}
          <span className="cpp">C++</span>,{' '}
          <span className="sql">Python3</span>, <span className="unity">JS</span>,{' '}
          <span className="js">TS</span>, <span className="ts">TS</span>,{' '}
          <span className="shell">Shell</span>, <span className='java'>Java</span>
        </p>
      </div>
      
      <div className="user-count-container">
        <div className="user-count">
          {language === 'en' ? `Total registered users: ${userCount}` : `总注册用户数: ${userCount}`}
        </div>
        <button className="floating-about-button" onClick={() => navigate('/about')}>
          {language === 'en' ? 'About Me →' : '关于我 →'}
        </button>
      </div>


      

      {/* Language Toggle Button */}
      <button onClick={toggleLanguage} className="language-toggle-button">
        {language === 'en' ? '中文' : 'English'}
      </button>
    </div>
  );
}

export default Home;

