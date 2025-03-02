# Full Stack Web Application

## 项目简介
本项目是一个基于 React + Express + Mysql 的全栈 Web 应用，包含用户认证（注册、登录、登出）、博客、项目展示等功能。前端使用 `React Router` 进行路由管理，并基于 `UserContext` 维护用户状态。后端使用 `Express` 搭建 API 服务器，并连接 `MySQL` 作为数据库，支持用户注册和登录，使用 `bcrypt` 进行密码加密。

---

## 主要技术栈
### 前端：
- **React**: 组件化开发，使用 `react-router-dom` 进行路由管理。
- **React Context API**: 维护用户状态。
- **CSS**: 负责样式设计。

### 后端：
- **Express**: 处理 API 请求。
- **MySQL**: 存储用户数据。
- **bcrypt**: 进行密码加密，提高安全性。
- **CORS**: 允许跨域请求，支持前后端分离。

### 数据库：
- **id**: INT AUTO_INCREMENT PRIMARY KEY,。
- **username**: VARCHAR(255) NOT NULL。
- **email**: VARCHAR(255) UNIQUE NOT NULL。
- **password**: VARCHAR(255) NOT NULL。
---

## 功能实现
✅ **用户注册与登录**
- 支持用户注册，使用 `bcrypt` 进行密码加密。
- 用户登录后，前端保存用户状态，并提供登出功能。

✅ **前端路由**
- `Home`（首页）
- `Projects`（项目展示）
- `Blog`（博客）
- `Contact`（联系我）
- `AboutMe`（个人介绍）
- `Login`（登录）
- `Register`（注册）

✅ **项目详情**
- 高性能服务器 (`HighPerformanceServer`)
- 项目2 (`项目2`)
- 项目3 (`项目3`)

---

## 项目运行
### 1. 启动后端
确保已安装 Node.js 和 MySQL，并创建 `user_db` 数据库：
```sh
cd backend
npm install
node server.js
### 1. 启动前端
```sh
cd frontend
npm install
npm start
