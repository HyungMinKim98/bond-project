import React, { useState } from 'react';
import './CommunityPage.css';

interface Post {
  id: number;
  content: string;
}

const CommunityPage = () => {
  const [posts, setPosts] = useState<Post[]>([]); // Post 타입의 배열로 상태를 정의합니다.
  const [newPostContent, setNewPostContent] = useState<string>('');

  const handlePostSubmit = (e: React.FormEvent<HTMLFormElement>) => { // e 매개변수의 타입을 명시합니다.
    e.preventDefault();
    if (!newPostContent.trim()) return;
    const newPost: Post = { // newPost에 대한 타입을 Post로 지정합니다.
      id: Date.now(),
      content: newPostContent,
    };
    setPosts([newPost, ...posts]);
    setNewPostContent('');
  };

  return (
    <div className="community-page">
      <h2>커뮤니티</h2>
      <form onSubmit={handlePostSubmit} className="post-form">
        <textarea
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="여기에 글을 작성하세요..."
        />
        <button type="submit">게시하기</button>
      </form>
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
