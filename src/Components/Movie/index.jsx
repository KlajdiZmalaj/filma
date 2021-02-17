import React from "react";

export default ({ item, timing }) => (
  <div
    onClick={() => {
      window.location.hash = `singleMovie/${item?.show?.id}`;
    }}
    className={`home--movie__item animated fadeIn`}
    style={{ animationDuration: `${timing}s` }}
  >
    <img src={item?.show?.image?.medium} alt="" />
    <div className="title">{item?.show?.name}</div>
    <div className="infos">
      <span dangerouslySetInnerHTML={{ __html: item?.show?.summary }}></span>
    </div>
  </div>
);
