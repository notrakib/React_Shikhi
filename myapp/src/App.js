import { Fragment } from "react";
import Array from "./components/Array";
import Button from "./components/Button";

function App() {
  return (
    <Fragment>
      <Fragment>
        <div>Hello</div>
        <div>Hello</div>
        <Button btnText={"Hello"}></Button>
        <Array />
      </Fragment>
    </Fragment>
  );
}

export default App;
