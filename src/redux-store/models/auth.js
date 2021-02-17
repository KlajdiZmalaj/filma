import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({
  setAllMovies: ["allMovies"],
  getAllMovies: ["lang"],
  //
  getSingleMovie: ["id"],
  setSingleMovie: ["singleMovie"],
});

export const AuthTypes = Types;
export default Creators;

const INITIAL_STATE = {
  allMovies: [],
  singleMovie: {},
};
export const reducer = createReducer(INITIAL_STATE, {
  SET_ALL_MOVIES: (state, { allMovies }) => ({
    ...state,
    allMovies,
  }),
  SET_SINGLE_MOVIE: (state, { singleMovie }) => ({
    ...state,
    singleMovie,
  }),
});
