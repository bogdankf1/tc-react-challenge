import { ActionTypes } from "../actionTypes";

const initialState = {
  newReleases: [],
  playlists: [],
  categories: [],
  error: null,
  loading: false,
};

export const musicDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_NEW_RELEASES.REQUEST:
    case ActionTypes.LOAD_FEATURED_PLAYLISTS.REQUEST:
    case ActionTypes.LOAD_CATEGORIES.REQUEST:
      return { ...state, loading: true };
    case ActionTypes.LOAD_NEW_RELEASES.SUCCESS:
    case ActionTypes.LOAD_FEATURED_PLAYLISTS.SUCCESS:
    case ActionTypes.LOAD_CATEGORIES.SUCCESS:
    case ActionTypes.LOAD_NEW_RELEASES.FAILED:
    case ActionTypes.LOAD_FEATURED_PLAYLISTS.FAILED:
    case ActionTypes.LOAD_CATEGORIES.FAILED:
      return { ...state, ...action.payload, loading: false };
    default:
      return state;
  }
};
