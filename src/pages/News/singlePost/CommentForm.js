import React from "react";

const CommentForm = () => {
  return (
    <>
      <h5 id="reply-title" className="comment-reply-title text-center">
        Leave a comment
      </h5>
      <div id="respond" className="comment-respond ls d-flex">
        {/* <div className="form-avatar w-38 h-100">
                <img src={require('../../../img/news/avatar.png')} />
            </div> */}
        <form
          action="/"
          method="post"
          id="commentform"
          className="comment-form"
          noValidate=""
        >
          <div className="comment-form-author form-group has-placeholder">
            <label htmlFor="author">Name</label>
            <input
              className="form-control"
              id="author"
              name="author"
              type="text"
              defaultValue=""
              size="30"
              maxLength="245"
              aria-required="true"
              required="required"
              placeholder="Name*"
            />
          </div>
          <p className="comment-form-email form-group has-placeholder">
            <label htmlFor="email">Email </label>
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              defaultValue=""
              size="30"
              maxLength="100"
              aria-required="true"
              required="required"
              placeholder="Email*"
            />
          </p>

          <p className="comment-form-comment form-group has-placeholder">
            <label htmlFor="comment">Comment</label>
            <textarea
              className="form-control"
              id="comment"
              name="comment"
              cols="45"
              rows="8"
              maxLength="65525"
              aria-required="true"
              required="required"
              placeholder="Message*"
            ></textarea>
          </p>
          <p className="form-submit">
            <button type="button" className="w-100 d-block btn btn-maincolor">
              Send comment
            </button>
          </p>
        </form>
      </div>
    </>
  );
};

export default CommentForm;
