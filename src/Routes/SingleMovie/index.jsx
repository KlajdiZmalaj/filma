import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AuthActions } from "redux-store/models";
import { withRouter } from "react-router-dom";

const SM = ({ singleMovie, getSingleMovie, match }) => {
  const [favList, setFav] = useState(
    JSON.parse(localStorage.getItem("favList") || "[]")
  );
  const [rerender, setrender] = useState(1);
  useEffect(() => {
    const { id } = match.params;
    getSingleMovie(id);
  }, []);
  const isFav = favList.includes(singleMovie.id);
  console.log("singleMovie", singleMovie);
  return (
    <div className="singleMovie">
      <div className="singleMovie--left ">
        <div
          className="underlay"
          style={{ backgroundImage: `url(${singleMovie?.image?.original})` }}
        ></div>
        <img
          className={"animated slideInLeft"}
          src={singleMovie?.image?.original}
          alt=""
        />
      </div>
      <div className="singleMovie--right">
        <div className="options">
          <span
            onClick={() => {
              window.location.hash = "/";
            }}
          >
            <i className="fal fa-backward" aria-hidden="true"></i>
            Go BACK
          </span>
          <span
            onClick={() => {
              var arr = favList;
              if (arr.includes(singleMovie.id)) {
                const index = arr.indexOf(singleMovie.id);

                arr.splice(index, 1);

                localStorage.setItem("favList", JSON.stringify(arr));
                setFav(arr);
                setrender(rerender + 1);
              } else {
                localStorage.setItem(
                  "favList",
                  JSON.stringify([...favList, singleMovie.id])
                );
                setFav([...favList, singleMovie.id]);
                setrender(rerender + 1);
              }
            }}
            className={isFav ? "active" : ""}
          >
            <i className="fal fa-star" aria-hidden="true"></i>
            {isFav ? "Favorited" : "Add Favorites"}
          </span>
        </div>
        <div className="title">{singleMovie.name}</div>
        <div className="rating">Rating : {singleMovie.rating?.average}</div>
        <div className="type">Type : {singleMovie.type}</div>
        <div className="lang">Language : {singleMovie.language}</div>
        <div className="prem">Premiered : {singleMovie.premiered}</div>
        <div className="schedule">schedule : {singleMovie.schedule?.time}</div>
        <div className="schedule days">
          Every :{" "}
          {(singleMovie.schedule?.days || []).map((day) => {
            return <span key={day}>{day}</span>;
          })}
        </div>
        <div
          className="desc"
          dangerouslySetInnerHTML={{ __html: singleMovie.summary }}
        ></div>
      </div>
    </div>
  );
};
export default withRouter(
  connect(
    ({ auth: { singleMovie } }) => ({
      singleMovie,
    }),
    AuthActions
  )(SM)
);
