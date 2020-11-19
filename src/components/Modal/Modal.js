import React, { useState } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import selecteCategory from "../../store/selectore/selectCategory";

import { addOnProgressTaskAction } from "../../store/Reducers/onProgressReducer";

import GetCategory from "./GetCategory";

Modal.setAppElement("#root");

const MM = ({ close, open, configCategory, addOnProgressTaskAction }) => {
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [categoryColor, setCategoryColor] = useState("");
  const [descError, setDescError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [wasCreated, setWasCreated] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!category || category.length < 1) {
      return setCategoryError(true);
    }
    if (!desc || desc.length < 5) {
      setDescError(true);
      return;
    }

    addOnProgressTaskAction({
      desc,
      color: categoryColor,
      category,
      id: uuidv4(),
      isEdited: false,
      onProgress: true,
      time: Date.now(),
    });
    setWasCreated(() => true);
    setDesc("");
    setCategory("");
    setCategoryColor("");
    setCategoryError(false);
    const id = setTimeout(() => {
      close();
      const id2 = setTimeout(() => {
        setWasCreated(false);
        clearTimeout(id2);
      }, 501);
      clearTimeout(id);
    }, 500);
  };
  const cancelHandlre = (e) => {
    e.preventDefault();
    setCategoryError(false);
    setDescError(false);
    close();
  };
  return (
    <Modal closeTimeoutMS={700} contentLabel="context" isOpen={open}>
      <div className="modal_input">
        <p>Create New Task</p>
        <form onSubmit={submitHandler}>
          <div>
            <GetCategory
              setCategoryColor={setCategoryColor}
              setError={setCategoryError}
              erorr={categoryError}
              category={configCategory}
              setter={setCategory}
            />

            <textarea
              style={{ borderColor: descError && "#ff00008f" }}
              onChange={({ target: { value } }) => {
                setDesc(value);
                setDescError(false);
              }}
              placeholder="Write your task .."
            />
            <div className="modal__desc--error">
              <span>
                {descError &&
                  desc.length > 1 &&
                  desc.length < 5 &&
                  "describtion must be at least 5 character"}
              </span>
            </div>
          </div>
          <div className="modal__controler">
            <button
              disabled={wasCreated}
              className="modal__controler--submit"
              type="submit"
            >
              Create {wasCreated && <i className="fas fa-check"></i>}
            </button>
            <button onClick={cancelHandlre}>Cancel</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  configCategory: selecteCategory(state),
});

export default connect(mapStateToProps, { addOnProgressTaskAction })(MM);
