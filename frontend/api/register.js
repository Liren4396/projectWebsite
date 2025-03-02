import fs from 'fs';
import path from 'path';
import bcrypt from 'bcrypt';

// 使用 /tmp 目录来存储数据，/tmp 在 Vercel 中是可写的
const dataFile = path.join('/tmp', 'users.json');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: '所有字段均为必填项' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { username, email, password: hashedPassword };

    let users = [];
    try {
      if (fs.existsSync(dataFile)) {
        const fileData = fs.readFileSync(dataFile, 'utf-8');
        users = fileData ? JSON.parse(fileData) : [];
      }
    } catch (err) {
      console.error('读取数据文件失败:', err);
    }

    users.push(newUser);
    
    try {
      fs.writeFileSync(dataFile, JSON.stringify(users, null, 2));
    } catch (err) {
      console.error('写入数据文件失败:', err);
      return res.status(500).json({ message: '写入数据失败' });
    }
    
    res.status(201).json({ message: '注册成功' });
  } else {
    res.status(405).json({ message: '方法不被允许' });
  }
}
