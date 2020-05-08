import React from "react";

function Homeworks({
  homeworks: hm = [],
  isDemo = false,
  isClosed = false,
  openHomeWorkVideo,
}) {
  const demoItemContext = (item) => (
    <>
      <span className="sub-lessons closed">
        <i className="fa fa-play homework-icon" aria-hidden="true" />
        {item.title} <i className="fa fa-lock" aria-hidden="true"></i>
      </span>
    </>
  );

  const pleaseSignIn = (
    <div className="mx-20">
      Տվյալ բաժինը հասանելի է միայն գրանցված օգտատերերին։
      <a className="please-sign-in" href="/signup">
        Գրանցվել
      </a>
    </div>
  );

  const askToOpen = (
    <div className="mx-20">
      Այս դասի առաջադրանքները դեռ փակ են ձեզ համար։
      <br />
      Մանրամասների համար կարող եք դիմել ադմինիստրատորին։
    </div>
  );

  const hintMessages = (isDemo, isClosed) => {
    if (isDemo) {
      return pleaseSignIn;
    } else if (isClosed) {
      return askToOpen;
    }
    return null;
  };

  const courseItemContext = (item) => (
    <a
      className="home-work"
      href="#"
      onClick={(e) => {
        e.preventDefault();
        openHomeWorkVideo(item);
      }}
    >
      <i className="fa fa-play homework-icon" aria-hidden="true" />
      <span>{item.title}</span>
    </a>
  );

  const hmRendering = (hm) =>
    hm.map((item, index) =>
      isDemo || isClosed ? (
        <li key={index}>{demoItemContext(item)}</li>
      ) : (
        <li key={index}>{courseItemContext(item)}</li>
      )
    );

  //   console.log(hm, "hmw");
  return (
    <>
      {hm.length > 0 && (
        <div className="widget widget_course_level">
          <div className="container">
            <h5 className="mb-20">Վիդեո Առաջադրանքներ</h5>
            <ul className="lh-30 mx-40">{hmRendering(hm)}</ul>
            {hintMessages(isDemo, isClosed)}
          </div>
        </div>
      )}
    </>
  );
}

export default Homeworks;
