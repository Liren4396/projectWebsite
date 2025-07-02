import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import HighPerformanceServer from './components/HighPerformanceServer';
import STPSimulation from './components/STP';
import CppBoostSearch from './components/CppBoostSearch';
import Login from './components/Login';
import Register from './components/Register';
import Music from './components/Music';
import { UserProvider, useUser } from './components/UserContext'; // 引入 UserContext
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import ShellGitConstruction from './components/ShellGitConstruction';
import SuperTicTacToe from './components/SuperTicTacToe';
import './App.css';

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, setUser } = useUser(); // 使用 UserContext 获取和更新 user 状态
  const { language } = useLanguage(); // Use the useLanguage hook
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null); // 更新用户状态
    navigate('/');
  };

  // 强制导航函数，确保在任何情况下都能正常工作
  const forceNavigate = (path) => {
    try {
      // 停止任何可能的事件冒泡
      navigate(path);
      // 备用方案：如果React Router失效，使用原生导航
      setTimeout(() => {
        if (window.location.pathname !== path) {
          window.location.href = path;
        }
      }, 100);
    } catch (error) {
      console.error('Navigation error:', error);
      // 最后的备用方案
      window.location.href = path;
    }
  };

  const isAboutPage = location.pathname === '/about';
  const isProjectPage = location.pathname.startsWith('/projects/');
  const isMusicPage = location.pathname === '/music';

  return (
    <nav>
      {isAboutPage ? (
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            forceNavigate('/');
          }} 
          className="back-button"
          onMouseDown={(e) => e.stopPropagation()} // 额外的事件处理
          onTouchStart={(e) => e.stopPropagation()} // 移动设备支持
        >
          {language === 'en' ? 'Back' : '返回'}
        </button>
      ) : isProjectPage ? (
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            forceNavigate('/projects');
          }} 
          className="back-button"
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
        >
          Back
        </button>
      ) : isMusicPage ? (
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Back button clicked from music page'); // 调试日志
            forceNavigate('/');
          }} 
          className="back-button"
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
        >
          {language === 'en' ? 'Back' : '返回'}
        </button>
      ) : (
        <>
          <Link to="/">{language === 'en' ? 'Home' : '首页'}</Link>
          <Link to="/projects">{language === 'en' ? 'Projects' : '项目'}</Link>
          <Link to="/music">{language === 'en' ? 'Music' : '音乐'}</Link>
          <Link to="/contact">{language === 'en' ? 'Contact' : '联系我'}</Link>
          {!user ? (
            <>
               <Link to="/login">
                <button className="login-button">{language === 'en' ? 'Login' : '登录'}</button>
              </Link>
            </>
          ) : (
            <button onClick={handleLogout} className="logout-button">{language === 'en' ? 'Logout' : '登出'}</button>
          )}
        </>
      )}
    </nav>
  );
}

function App() {
  return (
    <LanguageProvider>
      <UserProvider>  {/* 包裹应用，提供 user 和 setUser */}
          <Router>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/music" element={<Music />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/projects/HighPerformanceServer" element={<HighPerformanceServer />} />
              <Route path="/projects/STPSimulation" element={<STPSimulation />} />
              <Route path="/projects/CppBoostSearch" element={<CppBoostSearch />} />
              <Route path="/projects/ShellGitConstruction" element={<ShellGitConstruction />} />
              <Route path="/projects/SuperTicTacToe" element={<SuperTicTacToe />} />
              <Route path="/login" element={<Login />} /> {/* 登录页面 */}
              <Route path="/register" element={<Register />} /> {/* 注册页面 */}
            </Routes>
          </Router>
      </UserProvider>
    </LanguageProvider>
  );
}

export default App;
