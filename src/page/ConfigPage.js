import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import SetUpCategory from "../components/SetUpCategory";
import SetUpDetails from "../components/SetUpDetils";
import selectCategory from "../store/selectore/selectCategory";
import selectConfig from "../store/selectore/selectUserName";

const ConfigPage = ({ userName, category, history }) => {
  if (userName && Object.keys(category).length) return <Redirect to="/" />;
  return (
    <div className="container">
      <div className="row">
        <div className="config__container">
          <div className="config__intro">
            <div className="col-md-12">
              <SetUpDetails />
              <SetUpCategory history={history} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userName: selectConfig(state),
  category: selectCategory(state),
});

export default connect(mapStateToProps)(ConfigPage);
