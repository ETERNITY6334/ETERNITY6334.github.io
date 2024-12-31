import React from 'react';
import './App.css';
import Blog from './components/blog/index.tsx';

function App() {
  return (
    <div>
      <h1>개발 기록 저장소</h1>
      <hr />
      <Blog />
      <hr />
      <h2>프로젝트</h2>
    </div>
  );
}

export default App;
