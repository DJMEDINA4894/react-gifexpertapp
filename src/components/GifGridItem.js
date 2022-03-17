import React from "react";

export const GifGridItem = ({ title, images }) => {
  return (
    <div className="card animate__animated animate__bounce animate__faster">
      <img src={images} alt={title} />
      <br />
      <label>{title}</label>
    </div>
  );
};
