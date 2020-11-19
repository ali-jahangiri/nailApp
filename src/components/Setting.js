import React from "react";
import { withRouter } from "react-router-dom";

const Setting = ({ history }) => (
  <div className="header__setting col-md-4">
    <div onClick={() => history.push("/setting")}>
      <p>Setting</p>
      <i className="fa fa-cog" aria-hidden="true"></i>
    </div>
  </div>
);

export default withRouter(Setting);
