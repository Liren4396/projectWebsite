import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

// 数据库连接信息
const dbConfig = {
  host: 'db4free.net',
  user: 'dlr4396',
  password: 'dingliren4396',
  database: 'user_db123',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

// 创建 MySQL 连接池
const pool = mysql.createPool(dbConfig);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: '方法不被允许' });
  }

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: '请输入邮箱和密码' });
  }

  try {
    // 查询数据库是否存在该用户
    const [rows] = await pool.query('SELECT username, email, password FROM users WHERE email = ?', [email]);

    if (rows.length === 0) {
      return res.status(401).json({ message: '用户不存在' });
    }

    const user = rows[0];

    // 验证密码
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: '密码错误' });
    }

    res.status(200).json({ 
      message: '登录成功', 
      user: { username: user.username, email: user.email } 
    });

  } catch (err) {
    console.error('数据库查询错误:', err);
    res.status(500).json({ message: '服务器内部错误' });
  }
}
