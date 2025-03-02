import fs from 'fs';
import path from 'path';
import bcrypt from 'bcrypt';

// 使用 /tmp 目录来存储数据，/tmp 在 Vercel 中是可写的
const dataFile = path.join('/tmp', 'users.json');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: '请输入邮箱和密码' });
    }

    let users = [];
    try {
      if (fs.existsSync(dataFile)) {
        const fileData = fs.readFileSync(dataFile, 'utf-8');
        users = fileData ? JSON.parse(fileData) : [];
      }
    } catch (err) {
      console.error('读取数据文件失败:', err);
      return res.status(500).json({ message: '读取数据失败' });
    }

    // 查找是否有对应的用户
    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(401).json({ message: '用户不存在' });
    }

    // 验证密码
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: '密码错误' });
    }

    res.status(200).json({ 
      message: '登录成功', 
      user: { username: user.username, email: user.email } 
    });
  } else {
    res.status(405).json({ message: '方法不被允许' });
  }
}
