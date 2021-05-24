import { useState, useEffect } from "react";
<<<<<<< HEAD
import './Posts.css'

import Post from "../../components/Post/Post"
import Layout from "../../components/Layout/Layout"
import { getPosts } from "../../services/posts"
=======
import "./Posts.css";

import Post from "../../components/Post/Post";
import Layout from "../../components/Layout/Layout";
import { getPosts } from "../../services/posts";
>>>>>>> 4c1f5f8f0f4fdafaa84bbdb7edd6cc8090901391

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
<<<<<<< HEAD
        <Post
          _id={post._id}
          author={post.author}
          title={post.title}
          content={post.content}
          key={index}
          imgURL={post.imgURL}
          alt={post.author}
 
        />
          )
})}
=======
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
>>>>>>> 4c1f5f8f0f4fdafaa84bbdb7edd6cc8090901391
      </div>
    </Layout>
  );
};
export default Posts;
