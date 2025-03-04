import mysql from 'mysql2/promise';

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

const pool = mysql.createPool(dbConfig);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: '方法不被允许' });
  }

  try {
    // 查询数据库中用户总数
    const [rows] = await pool.query('SELECT COUNT(*) AS userCount FROM users');
    res.status(200).json({ userCount: rows[0].userCount });
  } catch (err) {
    console.error('数据库查询错误:', err);
    res.status(500).json({ message: '服务器内部错误' });
  }
}
