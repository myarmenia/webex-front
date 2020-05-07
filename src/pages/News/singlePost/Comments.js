import React from "react";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";

const Comments = () => {
  return (
    <div id="comments" className="comments-area rounded">
      <CommentForm />
      <CommentsList />
    </div>
  );
};

export default Comments;
