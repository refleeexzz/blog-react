import React from 'react';
import Post from './Post';
import TechnologyPost from './TechnologyPost'; 

function PostList() {
  const posts = [
    {
      title: 'O Futuro da Inteligência Artificial na Medicina',
      content: 'A inteligência artificial (IA) está desempenhando um papel cada vez mais importante no campo da medicina...',
    },
    {
      title: 'A Revolução da Realidade Virtual: Além da Imaginação',
      content: 'A realidade virtual (RV) é uma tecnologia que tem capturado a imaginação de milhões em todo o mundo...',
    },
    
  ];

  return (
    <div className="post-list">
      {posts.map((post, index) => (
        
        post.title.includes('Inteligência Artificial') ? (
          <Post
            key={index}
            title={post.title}
            content={post.content}
          />
        ) : (
          <TechnologyPost
            key={index}
            title={post.title}
            content={post.content}
          />
        )
      ))}
    </div>
  );
}

export default PostList;