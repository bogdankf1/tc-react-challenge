import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import {
  getCategories,
  getNewReleases,
  getPlaylists,
} from "../../../redux/selectors";
import { LoadInitialData } from "../../../redux/actions/musicData";
import "../styles/_discover.scss";

const Discover = () => {
  const dispatch = useDispatch();
  const newReleases = useSelector(getNewReleases);
  const playlists = useSelector(getPlaylists);
  const categories = useSelector(getCategories);

  useEffect(() => {
    dispatch(LoadInitialData());
  }, [dispatch]);

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
      />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={categories}
        imagesKey="icons"
      />
    </div>
  );
};
export default Discover;
