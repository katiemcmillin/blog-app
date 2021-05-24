import { useState, useEffect } from "react";
import "./PostEdit.css";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { getProduct, updateProduct } from "../../services/products";

const PostEdit = (props) => {
  const [post, setPost] = useState({
    title: "",
    author: "",
    imgURL: "",
    date: "",
    content: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const product = await getPost(id);
      setPost(post);
    };
    fetchPost();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updateProduct(id, post);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/posts/${id}`} />;
  }

  return (
    <Layout>
      <div className="post-edit">
        <div className="image-container">
          <img
            className="edit-post-image"
            src={post.imgURL}
            alt={post.name}
          />
          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image-link"
              placeholder="Image Link"
              value={post.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="input-title"
            placeholder="Title"
            value={post.title}
            name="title"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-author"
            placeholder="Author"
            value={post.author}
            name="author"
            required
            onChange={handleChange}
          />
          <input
            className="input-date"
            placeholder="Date Created (mm/dd/yyyy)"
            value={post.date}
            name="date"
            required
            onChange={handleChange}
          />
          <textarea
            className="textarea-content"
            rows={10}
            cols={78}
            placeholder="Content"
            value={post.content}
            name="content"
            required
            onChange={handleChange}
          />
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default PostEdit;
