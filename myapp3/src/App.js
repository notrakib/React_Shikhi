import Posts from "./components/post";
import PostProvider from "./store/PostProvider";

function App() {
  return (
    <>
      <PostProvider>
        <Posts />
      </PostProvider>
    </>
  );
}

export default App;
