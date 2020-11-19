import React, { useState } from "react";
import colorFunc from "../../utils/colorFunc";

const GetCategory = ({
  category,
  setter,
  erorr,
  setError,
  setCategoryColor,
  additionClass,
  placeholder,
}) => {
  const [value, setValue] = useState("");
  const [wasPicked, setWasPicked] = useState(false);
  const changeHandler = ({ target: { value } }) => {
    setValue(value.trim());
    setWasPicked(false);
    setError(false);
  };
  const pickHandler = ({ category, color }) => {
    setCategoryColor(color);
    setter(category);
    setValue(category);
    setWasPicked(true);
    setError(false);
  };
  const categoryMap = () => {
    const place = Object.values(category).filter((el) =>
      el.category.includes(value)
    );
    if (place.length)
      return place.map((el, index) => (
        <div
          style={{
            backgroundColor: colorFunc(el.color, 70),
            top: wasPicked && "-45px",
          }}
          onClick={() => pickHandler(el)}
          className="modal__div"
          key={index}
        >
          <span style={{ color: colorFunc(el.color, -70) }}>{el.category}</span>
        </div>
      ));
    return <div>No category found</div>;
  };

  return (
    <div
      style={{ marginBottom: wasPicked && "10px" }}
      className={`modal__category ${additionClass || ""}`}
    >
      <input
        style={{
          borderBottomColor: erorr && "#ff00008f",
        }}
        value={value}
        onChange={changeHandler}
        placeholder={placeholder || "Selecte Categoty"}
      />
      <div className="modal__category--match__container">{categoryMap()}</div>
    </div>
  );
};
export default GetCategory;
