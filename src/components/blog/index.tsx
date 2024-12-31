import React from 'react';
import data from './data/index.json';

function Blog() {
  return <div>
    <h2>블로그</h2>
    <ul>
      {data.map((post, index) => (
        <li key={index}>
          <h3>{post.title}</h3>
          <p>{post.date}</p>
        </li>
      ))}
    </ul>
  </div>;
}

export default Blog;