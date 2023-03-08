import React from "react";

const PostContext = React.createContext({
  post: "None",
  like: 0,
  edit_post: () => {},
  likeHandaler: () => {},
});

export default PostContext;
