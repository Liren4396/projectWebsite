import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 版本后，使用 createRoot API
import './index.css'; // 引入全局样式
import App from './App'; // 导入根组件
import reportWebVitals from './reportWebVitals'; // 可选，用于性能分析

// 创建根节点并渲染到 HTML 页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 可选：测量性能并输出
reportWebVitals();
