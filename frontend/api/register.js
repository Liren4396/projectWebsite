import fs from 'fs';
import path from 'path';
import bcrypt from 'bcrypt';

const dataFile = path.join(process.cwd(), 'users.json');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: '所有字段均为必填项' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { username, email, password: hashedPassword };

    let users = [];
    if (fs.existsSync(dataFile)) {
      const fileData = fs.readFileSync(dataFile, 'utf-8');
      users = fileData ? JSON.parse(fileData) : [];
    }

    users.push(newUser);
    fs.writeFileSync(dataFile, JSON.stringify(users, null, 2));
    
    res.status(201).json({ message: '注册成功' });
  } else {
    res.status(405).json({ message: '方法不被允许' });
  }
}
