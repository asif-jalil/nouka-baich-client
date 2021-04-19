import React from "react";
import { Col } from "react-bootstrap";

const BoatCard = ({ boat }) => {
  const { boatImg, boatInfo } = boat;
  const { boatName, boatFair, boatLocation, boatBarths } = boatInfo;
  const { img, mimetype } = boatImg;

  const styleBackground = {
    backgroundImage: `url(data:${mimetype};base64,${img})`,
  };

  return (
    <Col md={6} className="mb-30">
      <div className="single-boat" style={styleBackground}>
        <span>${boatFair} / Day</span>
        <div className="single-boat-content">
          <h4>{boatName}</h4>
          <p>
            <span>
              <i className="fas fa-map-marker-alt"></i> {boatLocation}
            </span>
            <span>
              <i className="fas fa-users"></i> {boatBarths} Barths
            </span>
          </p>
        </div>
      </div>
    </Col>
  );
};

export default BoatCard;
