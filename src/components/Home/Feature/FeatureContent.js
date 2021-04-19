import React from "react";
import fishingIcon from "../../../images/feature/fishing.svg";
import celebrateIcon from "../../../images/feature/celebrate.svg";
import sailingIcon from "../../../images/feature/sailing.svg";
import waterSportIcon from "../../../images/feature/watersport.svg";
import FeatureIcon from "./FeatureIcon";

const iconsList = [
  { img: fishingIcon, txt: "FISHING" },
  { img: celebrateIcon, txt: "CELEBRATE" },
  { img: sailingIcon, txt: "SAILING" },
  { img: waterSportIcon, txt: "WATERSPORT" },
];

const FeatureContent = ({ setOption }) => {
  const handleOptionChange = (icon) => {
    if (icon === fishingIcon) {
      setOption("fishing");
    } else if (icon === celebrateIcon) {
      setOption("celebrate");
    } else if (icon === sailingIcon) {
      setOption("sailing");
    } else if (icon === waterSportIcon) {
      setOption("waterSport");
    }
  };

  return (
    <div className="feature-content">
      <div className="section-title">
        <h3>Nouka Baich</h3>
      </div>
      <p className="feature-txt">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum beatae adipisci praesentium magnam, aut iste autem dolor omnis fugiat. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit.
      </p>
      <div className="feature-icons d-flex flex-wrap justify-content-between">
        {iconsList.map((icon, idx) => (
          <FeatureIcon key={idx} icon={icon} handleOptionChange={handleOptionChange} />
        ))}
      </div>
    </div>
  );
};

export default FeatureContent;
