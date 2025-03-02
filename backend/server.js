const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const port = 3001;

// 允许跨域请求
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

app.use(express.json());

// 连接 MySQL 数据库
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'user_db'
});

db.connect(err => {
  if (err) {
    console.error('数据库连接失败:', err);
    return;
  }
  console.log('成功连接到 MySQL');
});

// 注册接口
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: '所有字段均为必填项' });
  }
  
  const hashedPassword = await bcrypt.hash(password, 10);
  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  
  db.query(sql, [username, email, hashedPassword], (err, result) => {
    if (err) {
      console.error('注册失败:', err);
      return res.status(500).json({ message: '服务器错误' });
    }
    res.status(201).json({ message: '注册成功' });
  });
});

// 登录接口
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: '请输入邮箱和密码' });
  }

  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error('登录查询失败:', err);
      return res.status(500).json({ message: '服务器错误' });
    }
    
    if (results.length === 0) {
      return res.status(401).json({ message: '用户不存在' });
    }
    
    const user = results[0];
    const match = await bcrypt.compare(password, user.password);
    
    if (!match) {
      return res.status(401).json({ message: '密码错误' });
    }
    
    res.status(200).json({ message: '登录成功', user: { id: user.id, username: user.username, email: user.email } });
  });
});

app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});