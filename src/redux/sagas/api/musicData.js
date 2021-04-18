import { Endpoints } from "../../../constants/endpoints";
import { callApi } from "./callApi";

const fetchNewReleases = () => {
  return callApi(Endpoints.LoadNewReleases);
};

const fetchFeaturedPlaylists = () => {
  return callApi(Endpoints.LoadFeaturedPlaylists);
};

const fetchCategories = () => {
  return callApi(Endpoints.LoadCategories);
};

export const Api = {
  fetchNewReleases,
  fetchFeaturedPlaylists,
  fetchCategories,
};
