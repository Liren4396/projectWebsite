import React from "react";
import { useLanguage } from "./LanguageContext"; // 引入语言上下文
import "./ShellGitConstruction.css"; // 引入样式文件

function ShellGitConstruction() {
  const { language } = useLanguage(); // 获取当前语言

  return (
    <div className="project-detail">
      <h1>🚀 {language === 'en' ? 'Shell Git Construction' : 'Shell 轻量级 Git 仿写'}</h1>
      
      <div className="project-summary">
        <p>
          {language === 'en'
            ? 'A lightweight Git reimplementation built with shell scripting, simulating core Git functionalities such as init, add, commit, branch, and log.'
            : '使用 shell 脚本构建的轻量级 Git 仿写，实现了 Git 的核心功能，如 init、add、commit、branch 和 log。'}
        </p>
        <p>
          {language === 'en' ? 'GitHub project link: ' : 'GitHub 项目地址：'}
          <a href="https://github.com/Liren4396/Github_easy_version" target="_blank" rel="noopener noreferrer">
            ShellGitConstruction
          </a>
        </p>
        
        <h2>{language === 'en' ? '🌟 Version Update' : '🌟 版本更新'}</h2>
        <ul>
          <li>
            <strong>v0.1：</strong>
            {language === 'en'
              ? 'Initial release with basic Git commands support (init, add, commit, branch, log).'
              : '初始版本，支持基本的 Git 命令（init、add、commit、branch、log）。'}
          </li>
        </ul>
        
        <h2>{language === 'en' ? '📌 Project Background' : '📌 项目背景'}</h2>
        <p>
          {language === 'en'
            ? 'This project aims to help developers understand the fundamental principles of Git by providing a simple, shell-based implementation.'
            : '该项目旨在帮助开发者通过提供一个基于 shell 的简单实现来理解 Git 的基本原理。'}
        </p>
        
        <h2>{language === 'en' ? '🛠 Tech Stack & Project Environment' : '🛠 技术栈 & 项目环境'}</h2>
        <ul>
          <li><strong>{language === 'en' ? 'Language' : '语言'}:</strong> Shell, Bash</li>
          <li><strong>{language === 'en' ? 'Tools' : '工具'}:</strong> GNU coreutils, sed, awk</li>
          <li><strong>{language === 'en' ? 'Environment' : '环境'}:</strong> Linux, macOS 或其他类 Unix 系统</li>
        </ul>
        
        <h2>{language === 'en' ? '⚙️ Project Principle' : '⚙️ 项目原理'}</h2>
        <ul>
          <li>
            {language === 'en'
              ? 'Simulate Git commands by executing shell commands and managing repository files.'
              : '通过执行 shell 命令和管理仓库文件来模拟 Git 命令。'}
          </li>
          <li>
            {language === 'en'
              ? 'Utilize plain text files and directories to store commit history and branch information.'
              : '利用纯文本文件和目录存储提交历史和分支信息。'}
          </li>
          <li>
            {language === 'en'
              ? 'Focus on simplicity and educational value, rather than production-level performance.'
              : '专注于简单性和教学意义，而非生产级性能。'}
          </li>
        </ul>
        
        <h2>{language === 'en' ? '🔧 Functional Modules' : '🔧 功能模块'}</h2>
        <ul>
          <li>
            <strong>{language === 'en' ? 'Repository Initialization' : '仓库初始化'}:</strong>
            {language === 'en'
              ? 'Creates the necessary directory structure and configuration files.'
              : '创建必要的目录结构和配置文件。'}
          </li>
          <li>
            <strong>{language === 'en' ? 'File Staging' : '文件暂存'}:</strong>
            {language === 'en'
              ? 'Adds files to the staging area for commit.'
              : '将文件添加到暂存区以便提交。'}
          </li>
          <li>
            <strong>{language === 'en' ? 'Commit Handling' : '提交管理'}:</strong>
            {language === 'en'
              ? 'Records changes in the repository with commit messages.'
              : '记录仓库中的更改并附带提交信息。'}
          </li>
          <li>
            <strong>{language === 'en' ? 'Branch Management' : '分支管理'}:</strong>
            {language === 'en'
              ? 'Creates, switches, and merges branches.'
              : '创建、切换和合并分支。'}
          </li>
          <li>
            <strong>{language === 'en' ? 'Log Retrieval' : '日志查询'}:</strong>
            {language === 'en'
              ? 'Displays commit history in a readable format.'
              : '以可读格式显示提交历史。'}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ShellGitConstruction;
