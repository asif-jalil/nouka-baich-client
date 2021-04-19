import React from "react";

const FeatureIcon = ({ icon, handleOptionChange }) => {
  const { img, txt } = icon;

  return (
    <div onClick={() => handleOptionChange(img)} className="icon">
      <img src={img} alt="" />
      <p>{txt}</p>
    </div>
  );
};

export default FeatureIcon;
