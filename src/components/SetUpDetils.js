import React, { useState } from "react";
import { connect } from "react-redux";
import Input from "./Input";

import { setUpName } from "../store/Reducers/setupReducer";

const SetUpDetails = ({ setUpName }) => {
  const [name, setName] = useState("");
  const [end, setEnd] = useState("");
  const sendHandler = () => {
    setEnd(name);
    setUpName(name);
  };
  return (
    <div className="config__inputs">
      <div style={{ display: end && "none" }}>
        <h2>Hi there</h2>
        <p>Always be on Plane and keep everything under controle</p>
      </div>
      <div style={{ position: "relative" }}>
        <div style={{ display: end && "none" }}>
          <Input
            autoFocus={true}
            handler={setName}
            value={name}
            placeholder="Enter Your Name"
          />
          <button
            onClick={() => sendHandler(name)}
            disabled={!name}
            style={{ opacity: name ? "1" : "0" }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { setUpName })(SetUpDetails);
