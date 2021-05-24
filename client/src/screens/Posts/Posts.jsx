import { useState, useEffect } from "react";
import "./Posts.css";

import Post from "../../components/Post/Post";
import Layout from "../../components/Layout/Layout";
import { getPosts } from "../../services/posts";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts();
      setPosts(allPosts);
    };
    fetchPosts();
  }, []);
  return (
    <Layout>
      <div className="posts">
        {posts.map((post, index) => {
          return (
            <Post
              _id={post._id}
              author={post.author}
              title={post.title}
              content={post.content}
              key={index}
              imgURL={post.imgURL}
              alt={post.author}
            />
          );
        })}
      </div>
    </Layout>
  );
};
export default Posts;
