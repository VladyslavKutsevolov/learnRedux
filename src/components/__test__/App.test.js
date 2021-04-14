import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { render } from "@testing-library/react";
import CommentBox from "../CommentBox";

it("should show comment box ", function () {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);

  ReactDOM.unmountComponentAtNode(div);
});
