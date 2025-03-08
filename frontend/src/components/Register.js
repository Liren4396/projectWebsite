import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import './Form.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { language } = useLanguage();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://liren.online/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
        credentials: 'include',
      });

      let result;
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        result = { message: 'Unexpected server response' };
      }

      if (response.ok) {
        navigate('/login');
      } else {
        setError(result.message || '注册失败');
      }
    } catch (err) {
      setError(`网络错误: ${err.message}`);
    }
  };

  return (
    <div className="form-container">
      <h2>{language === 'en' ? 'Register' : '注册'}</h2>
      <form onSubmit={handleRegister} className="form">
        <div className="form-group">
          <label>{language === 'en' ? 'Username:' : '用户名'}</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label>{language === 'en' ? 'Email:' : '邮箱:'}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label>{language === 'en' ? 'Password:' : '密码'}</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="form-button">{language === 'en' ? 'Register' : '注册'}</button>
      </form>
    </div>
  );
}

export default Register;