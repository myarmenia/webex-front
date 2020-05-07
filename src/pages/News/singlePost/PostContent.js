import React from "react";

import Article from "./Article";
import WideImage from "./WideImage";
import Aside from "../aside";

const PostContent = ({ currentPost, author, minutes, newslist }) => {
  const { image, slug } = currentPost;
  return (
    <>
      <WideImage image={image} slug={slug} />
      <section className="ls s-pb-50 s-pb-lg-100 c-gutter-50">
        <div className="container">
          <div className="row">
            <Article
              currentPost={currentPost}
              author={author}
              minutes={minutes}
            />

            <Aside signle newslist={newslist} />
          </div>
        </div>
      </section>
    </>
  );
};

export default PostContent;
