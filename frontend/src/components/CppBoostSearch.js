import React from "react";
import { useLanguage } from './LanguageContext'; // 引入语言上下文
import "./ProjectSpecification.css"; // 引入样式文件

function CppBoostSearch() {
  const { language } = useLanguage(); // 获取当前语言

  return (
    <div className="project-detail">
      <h1>🚀 {language === 'en' ? 'Boost_Searcher' : 'Boost_Searcher（C++）'}</h1>
      
      <div className="project-summary">
        <p>{language === 'en' ? 'CppReference site search engine, developed in C++11, uses Boost and Protobuf to improve performance.' : 'CppReference 站内搜索引擎，基于 C++11 开发，使用 Boost 和 Protobuf 提高性能。'}</p> 
        <p>{language === 'en' ? 'GitHub project link: ' : 'GitHub 项目地址：'}<a href="https://github.com/Liren4396/c-_Boost_Search/" target="_blank">Boost_Searcher</a></p>
        
        <h2>{language === 'en' ? '🌟 Version Update' : '🌟 版本更新'}</h2>
        <ul>
          <li><strong>V1.0.1：</strong>{language === 'en' ? 'No longer using Jsoncpp as the serialization scheme, switched to Protobuf.' : '不再使用 Jsoncpp 作为序列化方案，改为使用 Protobuf。'}</li>
        </ul>
        
        <h2>{language === 'en' ? '📌 Project Background' : '📌 项目背景'}</h2>
        <p>{language === 'en' ? '🔍 Site search, more vertical data, smaller data volume, and improved retrieval efficiency.' : '🔍 站内搜索，数据更垂直，数据量更小，提升检索效率。'}</p>
        
        <h2>{language === 'en' ? '🛠 Tech Stack & Project Environment' : '🛠 技术栈 & 项目环境'}</h2>
        <ul>
          <li><strong>{language === 'en' ? 'Language' : '语言'}:</strong> C/C++（C++11）</li>
          <li><strong>{language === 'en' ? 'Libraries' : '库'}:</strong> STL、Boost、Protobuf、cppjieba</li>
          <li><strong>{language === 'en' ? 'Environment' : '环境'}:</strong> Ubuntu 22.04、g++/Makefile、VSCode</li>
        </ul>
        
        <h2>{language === 'en' ? '⚙️ Project Principle' : '⚙️ 项目原理'}</h2>
        <h3>{language === 'en' ? '🌍 Server Side' : '🌍 服务端'}</h3>
        <ul>
          <li>{language === 'en' ? 'Download the corresponding HTML file of CppReference.' : '下载 CppReference 对应的 HTML 文件。'}</li>
          <li>{language === 'en' ? 'Parse the HTML, clean up useless data, and remove tags.' : '解析 HTML，清理无用数据，去除标签。'}</li>
          <li>{language === 'en' ? 'Build forward and inverted indexes to speed up web information search.' : '建立正向索引和倒排索引，加速网页信息查找。'}</li>
          <li>{language === 'en' ? 'Search the relevant HTML via the index, combine content, and return the search result page.' : '通过索引检索相关 HTML，组合内容，返回搜索结果页面。'}</li>
        </ul>
        
        <h3>{language === 'en' ? '👤 Client Side' : '👤 客户端'}</h3>
        <p>{language === 'en' ? 'Users send HTTP GET requests with search keywords.' : '用户发送 HTTP GET 请求，上传搜索关键字。'}</p>
        
        <h2>{language === 'en' ? '🔧 Functional Modules' : '🔧 功能模块'}</h2>
        <h3>{language === 'en' ? '📝 Data Filtering (parse.cc)' : '📝 数据筛选（parse.cc）'}</h3>
        <ul>
          <li>{language === 'en' ? 'Use Boost filesystem library (boost::filesystem)' : '使用 Boost 文件系统库 (boost::filesystem)'}</li>
          <li>{language === 'en' ? 'File search: Traverse HTML files and store them in file_list.' : '文件查找：遍历 HTML 文件，存入 file_list。'}</li>
          <li>{language === 'en' ? 'Content parsing: Extract title, content, and url, and store them in results.' : '解析内容：提取 title、content、url，存入 results。'}</li>
          <li>{language === 'en' ? 'Data concatenation: Use \\3 as separator to concatenate different files.' : '数据拼接：以 \\3 作为分隔符拼接不同文件。'}</li>
        </ul>
        
        <h3>{language === 'en' ? '📚 Index Building (index.hpp)' : '📚 索引构建（index.hpp）'}</h3>
        <ul>
          <li>{language === 'en' ? 'Data structures:' : '数据结构：'}</li>
          <li>
            <ul>
              <li><strong>{language === 'en' ? 'DocInfo' : 'DocInfo'}:</strong> {language === 'en' ? 'Contains title, content, url, doc_id' : '包含 title、content、url、doc_id'}</li>
              <li><strong>{language === 'en' ? 'InvertedElem' : 'InvertedElem'}:</strong> {language === 'en' ? 'Contains doc_id, word, weight' : '包含 doc_id、word、weight'}</li>
            </ul>
          </li>
          <li>{language === 'en' ? 'Forward index: vector structure, stores DocInfo by id' : '正向索引：vector 结构，按 id 存储 DocInfo'}</li>
          <li>{language === 'en' ? 'Inverted index: unordered_map, key is string, value is vector<InvertedElem>' : '倒排索引：unordered_map，key 为 string，value 为 vector&lt;InvertedElem&gt;'}</li>
        </ul>
        
        <h3>{language === 'en' ? '🌐 Server Build (http_server.cc)' : '🌐 服务器构建（http_server.cc）'}</h3>
        <ul>
          <li>{language === 'en' ? 'Use httplib to handle HTTP requests' : '使用 httplib 处理 HTTP 请求'}</li>
          <li>{language === 'en' ? 'Parse query parameters and call Searcher to perform search' : '解析查询参数，调用 Searcher 进行搜索'}</li>
          <li>{language === 'en' ? 'Return JSON results and use Protobuf to assemble search results' : '返回 JSON 结果，使用 Protobuf 组装搜索结果'}</li>
        </ul>
        
      </div>
    </div>
  );
}

export default CppBoostSearch;
