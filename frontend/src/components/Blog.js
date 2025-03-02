import React from "react";
import './Blog.css';

function Blog() {
  return (
    <div className="blog-container">
      <h1>📖 My Blog</h1>
      <div className="blog-list">
        <div className="blog-card">
          <h2>🚀 如何优化 C++ 代码</h2>
          <p>探索 C++ 代码优化技巧，提高运行效率。</p>
          <a href="#">阅读更多 →</a>
        </div>
        <div className="blog-card">
          <h2>🎮 Unity 游戏开发入门</h2>
          <p>从 0 开始学习 Unity，创建你的第一个游戏！</p>
          <a href="#">阅读更多 →</a>
        </div>
        <div className="blog-card">
          <h2>💾 SQL 数据库优化</h2>
          <p>如何让你的 SQL 查询更快？索引、规范化与优化技巧。</p>
          <a href="#">阅读更多 →</a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
