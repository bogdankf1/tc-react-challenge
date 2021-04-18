import { call, put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";
import { ActionTypes } from "../actionTypes";
import {
  LoadCategories,
  LoadCategoriesSuccess,
  LoadCategoriesFailed,
  LoadFeaturedPlaylists,
  LoadFeaturedPlaylistsSuccess,
  LoadFeaturedPlaylistsFailed,
  LoadNewReleases,
  LoadNewReleasesFailed,
  LoadNewReleasesSuccess,
} from "../actions/musicData";

function* loadNewReleases() {
  try {
    const response = yield call(Api.fetchNewReleases);
    yield put(LoadNewReleasesSuccess(response.albums.items));
  } catch (e) {
    yield put(LoadNewReleasesFailed());
  }
}

function* loadFeaturedPlaylists() {
  try {
    const response = yield call(Api.fetchFeaturedPlaylists);
    yield put(LoadFeaturedPlaylistsSuccess(response.playlists.items));
  } catch (e) {
    yield put(LoadFeaturedPlaylistsFailed());
  }
}

function* loadCategories() {
  try {
    const response = yield call(Api.fetchCategories);
    yield put(LoadCategoriesSuccess(response.categories.items));
  } catch (e) {
    yield put(LoadCategoriesFailed());
  }
}

function* loadInitialData() {
  yield put(LoadNewReleases());
  yield put(LoadFeaturedPlaylists());
  yield put(LoadCategories());
}

export function* musicDataSaga() {
  yield takeLatest(ActionTypes.LOAD_INITIAL_DATA, loadInitialData);
  yield takeLatest(ActionTypes.LOAD_NEW_RELEASES.REQUEST, loadNewReleases);
  yield takeLatest(
    ActionTypes.LOAD_FEATURED_PLAYLISTS.REQUEST,
    loadFeaturedPlaylists
  );
  yield takeLatest(ActionTypes.LOAD_CATEGORIES.REQUEST, loadCategories);
}
