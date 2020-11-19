import React from "react";

import Header from "../components/Header";
import HomeContainer from "../components/HomeContainer";

const HomePage = () => {
  return (
    <div className="home__container">
      <div className="container-fluid">
        <Header />
        <HomeContainer />
      </div>
    </div>
  );
};

export default HomePage;
