import React, { Component } from "react";
import { connect } from "react-redux";

import selectUserName from "../store/selectore/selectUserName";
import AddNewRowInput from "./AddNewRowInputs";
import InpusPallet from "./InputPallet";

import { setUpCategoryAction } from "../store/Reducers/setupReducer";

class SetUpCategory extends Component {
  state = {
    array: [1],
    values: {},
    ok: false,
  };
  handler = (e, index) => {
    this.setState(
      (prevState) => ({
        ...prevState,
        values: {
          ...prevState.values,
          [index]: { ...prevState.values[index], category: e },
        },
      }),
      () => this.chcker()
    );
  };
  colorHandler = (index, color) => {
    this.setState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [index]: { ...prevState.values[index], color },
      },
    }));
  };
  addHandler = () => {
    if (this.state.array.length <= 4) {
      this.setState((prevState) => ({
        ...prevState,
        array: [...this.state.array, 1],
      }));
    }
  };
  enable = () => {
    if (this.state.values[this.state.array.length - 1] && this.state.ok)
      return true;
    return false;
  };
  chcker = () => {
    const { values } = this.state;
    for (let key in values) {
      if (!values[key].category)
        return this.setState((prevS) => ({ ...prevS, ok: false }));
      else this.setState({ ok: true });
    }
  };
  submitValueInReux = () => {
    this.props.setUpCategoryAction(this.state.values);
    this.props.history.push("/");
  };
  render() {
    return (
      <div
        style={{
          display: !this.props.userName && "none",
        }}
      >
        <p style={{ color: "#a8a8a8", marginLeft: "-15px" }}>
          Please Pick your custome Category and color for them
        </p>
        <InpusPallet
          inputHandler={this.handler}
          colorHandler={this.colorHandler}
          array={this.state.array}
        />
        <div className="config__controler">
          <AddNewRowInput enable={this.enable} handler={this.addHandler} />
          <span
            onClick={this.submitValueInReux}
            style={{ display: this.enable() ? "block" : "none" }}
          >
            Let's Go <i className="fas fa-chevron-right"></i>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ userName: selectUserName(state) });

export default connect(mapStateToProps, { setUpCategoryAction })(SetUpCategory);
