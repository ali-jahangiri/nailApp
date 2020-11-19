import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";

import selecteDoneTask from "../store/selectore/selecteDoneTask";
import selecteOnProgressTask from "../store/selectore/selecteOnProgressTask";
import selecteSkippedTask from "../store/selectore/selecteSkippedTask";
import calcWidth from "../utils/calcWidth";
import getAllLength from "../utils/getAllLength";

const DashBordProgress = ({ done, onProgress, skipped }) => {
  const [allL, setAllL] = useState(0);
  useEffect(() => {
    setAllL(getAllLength(done, onProgress, skipped));
  }, [done, onProgress, skipped]);
  return (
    <div className="col-md-9 m-auto col-sm-12 col-lg-3 mt-md-3 mt-sm-4">
      <div className="dashboard__container">
        <div>
          <p>Status</p>

          <div className="progress__bar">
            {allL.length || allL ? (
              <Fragment>
                <div
                  className={`${
                    !done.length &&
                    !skipped.length &&
                    "progress__bar--radius-right"
                  }`}
                  style={{
                    width: calcWidth(allL, onProgress),
                    borderWidth: calcWidth(allL, onProgress) && "0px",
                  }}
                ></div>
                <div
                  className={`${
                    !onProgress.length && "progress__bar--radius"
                  } ${
                    onProgress.length &&
                    !skipped.length &&
                    "progress__bar--radius-right"
                  }`}
                  style={{ width: calcWidth(allL, done) }}
                ></div>

                <div
                  className={`${
                    !onProgress.length &&
                    !done.length &&
                    "progress__bar--radius"
                  }`}
                  style={{ width: `${(100 / allL) * skipped.length}%` }}
                ></div>
              </Fragment>
            ) : (
              <div className="progress__empty">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  onProgress: selecteOnProgressTask(state),
  skipped: selecteSkippedTask(state),
  done: selecteDoneTask(state),
});

export default connect(mapStateToProps)(DashBordProgress);
