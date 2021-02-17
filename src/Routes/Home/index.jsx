import React, { useEffect } from "react";
import { connect } from "react-redux";
import { AuthActions } from "redux-store/models";
import Movie from "Components/Movie";
const Home = ({ allMovies, getAllMovies }) => {
  useEffect(() => {
    if (allMovies.length <= 0) getAllMovies("US");
  }, []);
  console.log("allMovies", allMovies);
  return (
    <div className="home">
      <div className="home--nav">TOP TV SHOWS</div>
      <div className="home--movie">
        {allMovies.map((item, ind) => {
          return (
            <Movie timing={`${ind / 10}`} key={item?.show?.id} item={item} />
          );
        })}
      </div>
    </div>
  );
};
export default connect(
  ({ auth: { allMovies } }) => ({
    allMovies,
  }),
  AuthActions
)(Home);
