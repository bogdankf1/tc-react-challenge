import { createActions } from "../../utils/reduxUtils";

export const ActionTypes = {
  LOAD_INITIAL_DATA: "LOAD_INITIAL_DATA",
  LOAD_NEW_RELEASES: createActions("LOAD_NEW_RELEASES"),
  LOAD_FEATURED_PLAYLISTS: createActions("LOAD_FEATURED_PLAYLISTS"),
  LOAD_CATEGORIES: createActions("LOAD_CATEGORIES"),
};
