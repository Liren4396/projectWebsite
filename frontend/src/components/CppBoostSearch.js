import React from "react";
import "./CppBoostSearch.css"; // 引入样式文件

function CppBoostSearch() {
  return (
    <div className="project-detail">
      <h1>🚀 Boost_Searcher</h1>
      
      <div className="project-summary">
        <p>CppReference 站内搜索引擎，基于 C++11 开发，使用 Boost 和 Protobuf 提高性能。</p> 
        <p>GitHub 项目地址：<a href="https://github.com/Liren4396/c-_Boost_Search/" target="_blank">Boost_Searcher</a></p>
        <h2>🌟 版本更新</h2>
        <ul>
          <li><strong>V1.0.1：</strong>不再使用 Jsoncpp 作为序列化方案，改为使用 Protobuf。</li>
        </ul>
        
        <h2>📌 项目背景</h2>
        <p>🔍 站内搜索，数据更垂直，数据量更小，提升检索效率。</p>
        
        <h2>🛠 技术栈 & 项目环境</h2>
        <ul>
          <li><strong>语言：</strong>C/C++（C++11）</li>
          <li><strong>库：</strong>STL、Boost、Protobuf、cppjieba</li>
          <li><strong>环境：</strong>Ubuntu 22.04、g++/Makefile、VSCode</li>
        </ul>
        
        <h2>⚙️ 项目原理</h2>
        <h3>🌍 服务端</h3>
        <ul>
          <li>下载 CppReference 对应的 HTML 文件。</li>
          <li>解析 HTML，清理无用数据，去除标签。</li>
          <li>建立正向索引和倒排索引，加速网页信息查找。</li>
          <li>通过索引检索相关 HTML，组合内容，返回搜索结果页面。</li>
        </ul>
        
        <h3>👤 客户端</h3>
        <p>用户发送 HTTP GET 请求，上传搜索关键字。</p>
        
        <h2>🔧 功能模块</h2>
        <h3>📝 数据筛选（parse.cc）</h3>
        <ul>
          <li>使用 Boost 文件系统库 (boost::filesystem)</li>
          <li>文件查找：遍历 HTML 文件，存入 file_list。</li>
          <li>解析内容：提取 title、content、url，存入 results。</li>
          <li>数据拼接：以 \3 作为分隔符拼接不同文件。</li>
        </ul>
        
        <h3>📚 索引构建（index.hpp）</h3>
        <ul>
          <li>数据结构：</li>
          <li>
            <ul>
              <li><strong>DocInfo：</strong>包含 title、content、url、doc_id</li>
              <li><strong>InvertedElem：</strong>包含 doc_id、word、weight</li>
            </ul>
          </li>
          <li>正向索引：vector 结构，按 id 存储 DocInfo</li>
          <li>倒排索引：unordered_map，key 为 string，value 为 vector&lt;InvertedElem&gt;</li>
        </ul>
        
        <h3>🌐 服务器构建（http_server.cc）</h3>
        <ul>
          <li>使用 httplib 处理 HTTP 请求</li>
          <li>解析查询参数，调用 Searcher 进行搜索</li>
          <li>返回 JSON 结果，使用 Protobuf 组装搜索结果</li>
        </ul>
        
      </div>
    </div>
  );
}

export default CppBoostSearch;