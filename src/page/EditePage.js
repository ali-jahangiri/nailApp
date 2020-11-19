import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import GetCategory from "../components/Modal/GetCategory";

import selecteOnProgressTaskIdHelper from "../store/selectore/selecteOnProggressId";
import selectCategory from "../store/selectore/selectCategory";

import { modifyProgressAction } from "../store/Reducers/onProgressReducer";

const EditePage = ({ task, category, modifyProgressAction, history }) => {
  const { id } = useParams();
  const [current, setCurrent] = useState(null);
  const [desc, setDesc] = useState("");
  const [descError, setDescError] = useState(false);
  const [cate, setCate] = useState("");
  const [color, setColor] = useState("");
  const [cateError, setCateError] = useState(false);
  useEffect(() => {
    setCurrent(task.find((el) => el.id === id));
  }, [id, task]);
  const chnageHandler = (e) => {
    e.preventDefault();
    if (!cate || cate.length < 1) {
      return setCateError(true);
    }
    if (!desc || desc.length < 5) {
      return setDescError(true);
    }
    modifyProgressAction({
      id,
      data: { desc, color, category: cate, isEdited: true },
    });
    history.push("/");
  };
  const cancelHandler = () => {
    setCate("");
    setDesc("");
    setColor("");
    setCateError(false);
    setCurrent(null);
    setDescError(false);
    history.push("/");
  };
  if (current) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9 m-auto col-sm-12">
            <div className="edit__container">
              <div className="edit__box">
                <div className="edit__intro">
                  <i className="fas fa-edit"></i>
                  <p>Edit</p>
                </div>
                <form>
                  <div className="edit__desc">
                    <label htmlFor="descChanger">description</label>
                    <input
                      id="descChanger"
                      placeholder={current.desc || ""}
                      onChange={({ target: { value } }) => {
                        setDesc(value);
                        setDescError(false);
                      }}
                      value={desc}
                    />
                  </div>
                  <div className="edit__category">
                    <label>Category</label>
                    <GetCategory
                      placeholder={current.category || ""}
                      additionClass="edit__get--color"
                      erorr={cateError}
                      setError={setCateError}
                      setter={setCate}
                      category={category}
                      setCategoryColor={setColor}
                    />
                  </div>
                  <div className="edit__controler">
                    <button
                      disabled={descError || cateError}
                      onClick={chnageHandler}
                      type="submit"
                    >
                      save change
                    </button>
                    <button onClick={cancelHandler}>cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else return <div></div>;
};

const mapStateToProps = (state) => ({
  task: selecteOnProgressTaskIdHelper(state),
  category: selectCategory(state),
});

export default connect(mapStateToProps, { modifyProgressAction })(EditePage);
