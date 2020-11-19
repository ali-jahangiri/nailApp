import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import selectUserName from "../store/selectore/selectUserName";

import HomePage from "../page/HomePage";

const HomeDirection = ({ userName }) => {
  if (!userName) {
    return <Redirect to="/wellcome" />;
  }
  return <Route path="/" exact component={HomePage} />;
};

const mapStateToProps = (state) => ({
  userName: selectUserName(state),
});

export default connect(mapStateToProps)(HomeDirection);
