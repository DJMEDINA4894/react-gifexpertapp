import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("Dragon Ball Z");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputClick = (e) => {
    const value = e.target.closest("form").querySelector("input").value;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 1) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <br />
      <button onClick={handleInputClick}>Add</button>
      {/* <input type="text" name="addcategory" placeholder="Add Category" /> */}
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
