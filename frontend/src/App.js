import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import HighPerformanceServer from './components/HighPerformanceServer';
import SqlMovieDb from './components/SqlMovieDb';
import UnityTowerDefense from './components/UnityTowerDefense';
import Login from './components/Login';
import Register from './components/Register';
import { UserProvider, useUser } from './components/UserContext'; // 引入 UserContext
import './App.css';

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, setUser } = useUser(); // 使用 UserContext 获取和更新 user 状态

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
        <button onClick={() => navigate('/')} className="back-button">Back</button>
      ) : isProjectPage ? (
        <button onClick={() => navigate('/projects')} className="back-button">Back</button>
      ) : (
        <>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>

          {/* 根据登录状态渲染按钮 */}
          {!user ? (
            <>
               <Link to="/login">
                <button className="login-button">Login</button>
              </Link>
            </>
          ) : (
            <button onClick={handleLogout} className="logout-button">Logout</button>
          )}
        </>
      )}
    </nav>
  );
}

function App() {
  return (
    <UserProvider>  {/* 包裹应用，提供 user 和 setUser */}
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects/HighPerformanceServer" element={<HighPerformanceServer />} />
          <Route path="/projects/sql-movie-db" element={<SqlMovieDb />} />
          <Route path="/projects/unity-tower-defense" element={<UnityTowerDefense />} />
          <Route path="/login" element={<Login />} /> {/* 登录页面 */}
          <Route path="/register" element={<Register />} /> {/* 注册页面 */}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
