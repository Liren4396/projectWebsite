import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';  // 引入 UserContext
import './Form.css'; // 引入CSS文件

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUser(); // 使用 setUser 更新 user 状态

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    const response = await fetch('https://project-website-weld.vercel.app/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include',  // 允许跨域携带 Cookie
    });

    const result = await response.json();
    
    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(result.user));
      setUser(result.user);  // 更新用户状态
      navigate('/');  // 登录成功后跳转到主页
    } else {
      setError(result.message || '登录失败');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="form-button">Login</button>
      </form>
      <p>Not registered? <span onClick={() => navigate('/register')} className="register-link">Click me to register</span></p>
    </div>
  );
}

export default Login;
