import React from "react";
import { connect } from "react-redux";

import selecteUserName from "../store/selectore/selectUserName";
import AddBox from "./AddingBox";

const HelloUser = ({ userName }) => (
  <div className="col-md-12">
    <div className="hello--user__container">
      <p className="hello--user__para">
        Howdy <span>{userName}</span>
      </p>
      <AddBox />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  userName: selecteUserName(state),
});
export default connect(mapStateToProps)(HelloUser);
