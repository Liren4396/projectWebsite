import React from "react";
import { Link } from "react-router-dom"; // 引入 Link 组件
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <div className="content-box">
        <h1>My Projects</h1>
        <ul>
          <li>
            <Link to="/projects/HighPerformanceServer">C++ High Performance Server</Link>
          </li>
          <li>
            <Link to="/projects/sql-movie-db">🎬 SQL Movie Database</Link>
          </li>
          <li>
            <Link to="/projects/unity-tower-defense">🛡️ Unity Tower Defense Game</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
