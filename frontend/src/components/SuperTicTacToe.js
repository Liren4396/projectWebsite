// SuperTicTacToe.js
import React from "react";
import { useLanguage } from "./LanguageContext"; // 引入语言上下文
import "./ProjectSpecification.css";

function SuperTicTacToe() {
  const { language } = useLanguage(); // 获取当前语言

  return (
    <div className="project-detail">
      <h1>🚀 {language === 'en' ? 'Super Tic-Tac-Toe AI' : '九宫格井字棋 AI 代理'}</h1>
      
      <div className="project-summary">
        <p>
          {language === 'en'
            ? 'An AI-powered Super Tic-Tac-Toe agent using Minimax algorithm with Alpha-Beta pruning for intelligent decision-making.'
            : '基于 Minimax 算法和 Alpha-Beta 剪枝的 AI 代理，能够智能决策九宫格井字棋。'}
        </p>
        <p>
          {language === 'en' ? 'GitHub project link: ' : 'GitHub 项目地址：'}
          <a href="https://github.com/Liren4396/Github_easy_version" target="_blank" rel="noopener noreferrer">
            SuperTicTacToe
          </a>
        </p>
        
        <h2>{language === 'en' ? '🌟 Version Update' : '🌟 版本更新'}</h2>
        <ul>
          <li>
            <strong>v1.0：</strong>
            {language === 'en'
              ? 'Initial release with AI-based decision making and multiplayer support.'
              : '初始版本，支持 AI 决策与多人对战模式。'}
          </li>
        </ul>
        
        <h2>{language === 'en' ? '📌 Project Background' : '📌 项目背景'}</h2>
        <p>
          {language === 'en'
            ? 'This project provides a strategic and educational AI implementation for Super Tic-Tac-Toe.'
            : '该项目提供了一个具有策略性和教学意义的九宫格井字棋 AI 实现。'}
        </p>
        
        <h2>{language === 'en' ? '🛠 Tech Stack & Project Environment' : '🛠 技术栈 & 项目环境'}</h2>
        <ul>
          <li><strong>{language === 'en' ? 'Language' : '语言'}:</strong> Python, Shell</li>
          <li><strong>{language === 'en' ? 'Tools' : '工具'}:</strong> Minimax, Alpha-Beta Pruning</li>
          <li><strong>{language === 'en' ? 'Environment' : '环境'}:</strong> Linux, macOS, Windows</li>
        </ul>
        
        <h2>{language === 'en' ? '⚙️ How to Play' : '⚙️ 玩法介绍'}</h2>
        <ul>
          <li>
            {language === 'en'
              ? 'AI vs AI: Run `./playt.sh "python3 agent.py" "./lookt -d 6" 12345`'
              : 'AI 对战 AI：运行 `./playt.sh "python3 agent.py" "./lookt -d 6" 12345`'}
          </li>
          <li>
            {language === 'en'
              ? 'Human vs Human: Open three terminals and run the server and two player scripts.'
              : '玩家对战：打开三个终端运行服务器和两个玩家脚本。'}
          </li>
          <li>
            {language === 'en'
              ? 'Human vs AI: Replace one player script with `agent.py`.'
              : '人机对战：将一个玩家脚本替换为 `agent.py`。'}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SuperTicTacToe;