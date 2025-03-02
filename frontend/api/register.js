import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

// 数据库配置（使用 db4free.net）
const dbConfig = {
  host: 'db4free.net',
  user: 'dlr4396',
  password: 'dingliren4396',
  database: 'user_db123',
  port: 3306, // 默认端口3306，可写可不写
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

// 创建数据库连接池
const pool = mysql.createPool(dbConfig);

// 创建表格的 SQL 语句
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
  );
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: '方法不被允许' });
  }

  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: '所有字段均为必填项' });
  }

  try {
    // 确保 users 表存在，如果没有则创建
    await pool.query(createTableQuery);

    // 检查用户是否已存在（根据邮箱判断）
    const [existingUsers] = await pool.query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    if (existingUsers.length > 0) {
      return res.status(409).json({ message: '用户已存在' });
    }

    // 对密码进行加密
    const hashedPassword = await bcrypt.hash(password, 10);

    // 插入新用户数据到数据库
    const [result] = await pool.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );

    res.status(201).json({ message: '注册成功', userId: result.insertId });
  } catch (error) {
    console.error('数据库操作失败:', error);
    res.status(500).json({ message: '服务器内部错误' });
  }
}
