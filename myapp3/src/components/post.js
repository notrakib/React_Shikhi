import { useContext } from "react";
import PostContext from "../store/PostContext";

const Posts = () => {
  const post = useContext(PostContext);
  console.log(post);

  const SubmitHandaler = () => {
    post.edit_post("New Post");
  };

  return (
    <>
      <h1>{post.post}</h1>
      <h1>{post.like}</h1>
      <button onClick={SubmitHandaler}>Press</button>
    </>
  );
};

export default Posts;
