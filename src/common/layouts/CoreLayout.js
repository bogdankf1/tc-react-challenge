import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Player from "../components/Player";
import Loader from "../components/Loader";
import { getLoading } from "../../redux/selectors";

function CoreLayout({ children, history }) {
  const isLoading = useSelector(getLoading);
  return (
    <div className="main">
      <SideBar />
      <div className="main__content">
        <Header history={history} />
        <div className="main__content__child">{children}</div>
      </div>
      <Player />
      {isLoading ? <Loader /> : null}
    </div>
  );
}

export default CoreLayout;
