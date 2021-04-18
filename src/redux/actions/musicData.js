import { ActionTypes } from "../actionTypes";

export const LoadInitialData = () => {
  return {
    type: ActionTypes.LOAD_INITIAL_DATA,
  };
};

export const LoadNewReleases = () => {
  return {
    type: ActionTypes.LOAD_NEW_RELEASES.REQUEST,
  };
};
export const LoadNewReleasesSuccess = (newReleases) => {
  return {
    type: ActionTypes.LOAD_NEW_RELEASES.SUCCESS,
    payload: {
      newReleases,
    },
  };
};
export const LoadNewReleasesFailed = (error) => {
  return {
    type: ActionTypes.LOAD_NEW_RELEASES.FAILED,
    payload: {
      error,
    },
  };
};

export const LoadFeaturedPlaylists = () => {
  return {
    type: ActionTypes.LOAD_FEATURED_PLAYLISTS.REQUEST,
  };
};
export const LoadFeaturedPlaylistsSuccess = (playlists) => {
  return {
    type: ActionTypes.LOAD_FEATURED_PLAYLISTS.SUCCESS,
    payload: {
      playlists,
    },
  };
};
export const LoadFeaturedPlaylistsFailed = (error) => {
  return {
    type: ActionTypes.LOAD_FEATURED_PLAYLISTS.FAILED,
    payload: {
      error,
    },
  };
};

export const LoadCategories = () => {
  return {
    type: ActionTypes.LOAD_CATEGORIES.REQUEST,
  };
};
export const LoadCategoriesSuccess = (categories) => {
  return {
    type: ActionTypes.LOAD_CATEGORIES.SUCCESS,
    payload: {
      categories,
    },
  };
};
export const LoadCategoriesFailed = (error) => {
  return {
    type: ActionTypes.LOAD_CATEGORIES.FAILED,
    payload: {
      error,
    },
  };
};
