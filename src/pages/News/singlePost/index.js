import React from "react";
import { useTranslation } from "react-i18next";

import NoMatchPage from "../../noMatchPage";
import PostContent from "./PostContent";

import newsMock from "../lastNews/newsMock";

function SinglePost({
  match: {
    params: { slug = "" },
  },
}) {
  window.scrollTo(0, 150);
  const { t } = useTranslation(["main", "translation"]);
  const currentPost =
    newsMock.filter(({ slug: postSlug }) => postSlug === slug)[0] || {};
  // console.log(currentPost);

  /**
   * for feature
   * (if loading === false && currentPost.length === 0) return <NoMatchPage notFound={'text'}>
   */
  if (!currentPost.id)
    return <NoMatchPage notFound={t("translation:not_found")} />;
  return (
    <PostContent
      currentPost={currentPost}
      author={t("lastnews.author")}
      minutes={t(`courses.flipcard.minutes`)}
      newslist={newsMock}
    />
  );
}

export default SinglePost;
