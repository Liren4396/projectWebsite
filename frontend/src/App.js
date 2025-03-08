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

  const isAboutPage = location.pathname === '/about';
  const isProjectPage = location.pathname.startsWith('/projects/');

  return (
    <nav>
      {isAboutPage ? (
        <button onClick={() => navigate('/')} className="back-button">
          {language === 'en' ? 'Back' : '返回'}
        </button>
      ) : isProjectPage ? (
        <button onClick={() => navigate('/projects')} className="back-button">Back</button>
      ) : (
        <>
          <Link to="/">{language === 'en' ? 'Home' : '首页'}</Link>
          <Link to="/projects">{language === 'en' ? 'Projects' : '项目'}</Link>
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
