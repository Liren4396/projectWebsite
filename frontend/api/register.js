// /api/register.js
import mysql from 'mysql2';
import bcrypt from 'bcrypt';

const db = mysql.createConnection({
  host: 'db4free.net',
  user: 'dlr4396',
  password: 'dingliren4396',
  database: 'user_db123'
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
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
  } else {
    res.status(405).json({ message: '方法不被允许' });
  }
}
