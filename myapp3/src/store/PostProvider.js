import PostContext from "./PostContext";
import { useState } from "react";

const PostProvider = (props) => {
  const [post, setPost] = useState("Hello");
  const [like, setLike] = useState(0);

  const edit_post = (new_post) => {
    setPost(new_post);
  };

  const likeHandaler = () => {
    setLike(like + 1);
  };

  return (
    <PostContext.Provider value={{ post, like, edit_post, likeHandaler }}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostProvider;
