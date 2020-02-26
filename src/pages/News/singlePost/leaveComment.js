import React from 'react';

function LeaveComment() {
    return (
        <div id="respond" className="comment-respond ls d-flex">
            {/* <div className="form-avatar w-38 h-100">
                <img src={require('../../../img/news/avatar.png')} />
            </div> */}
            <form action="/" method="post" id="commentform" className="comment-form" novalidate="">
                <div className="comment-form-author form-group has-placeholder">
                    <label for="author">Name</label>
                    <input className="form-control" id="author" name="author" type="text" value="" size="30" maxlength="245" aria-required="true" required="required" placeholder="Name*" />
                </div>
                <p className="comment-form-email form-group has-placeholder">
                    <label for="email">Email </label>
                    <input className="form-control" id="email" name="email" type="email" value="" size="30" maxlength="100" aria-required="true" required="required" placeholder="Email*" />
                </p>

                <p className="comment-form-comment form-group has-placeholder">
                    <label for="comment">Comment</label>
                    <textarea className="form-control" id="comment" name="comment" cols="45" rows="8" maxlength="65525" aria-required="true" required="required" placeholder="Message*"></textarea>
                </p>
                <p className="form-submit">
                    <button type="button" className="w-100 d-block btn btn-maincolor">Send comment</button>
                </p>
            </form>
        </div>
    )
}

export default LeaveComment;