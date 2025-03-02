const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'db4free.net',
  user: 'dlr4396',
  password: 'dingliren4396',
  database: 'user_db123',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

async function testConnection() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('✅ 数据库连接成功！');
    
    // 执行一个简单查询
    const [rows] = await connection.execute('SHOW TABLES;');
    console.log('数据库中的表:', rows);

    await connection.end(); // 关闭连接
  } catch (error) {
    console.error('❌ 数据库连接失败:', error.message);
  }
}

testConnection();
