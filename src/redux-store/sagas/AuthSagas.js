import { put, call } from "redux-saga/effects";
import AuthActions from "../models/auth";

import * as AuthReq from "services/auth";

export function* getAllMovies({ lang }) {
  const response = yield call(AuthReq.fetchAllMovies, lang);

  if (response) {
    yield put(AuthActions.setAllMovies(response.data));
  }
}

export function* getSingleMovie({ id }) {
  const response = yield call(AuthReq.fechSingleMovie, id);
  if (response) {
    yield put(AuthActions.setSingleMovie(response.data));
  }
}
