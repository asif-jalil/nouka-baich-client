import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BoatCard = ({ boat }) => {
  const { boatName, boatFair, boatLocation, boatBarths, boatImg } = boat;
  const { img, mimetype } = boatImg;

  const styleBackground = {
    backgroundImage: `url(data:${mimetype};base64,${img})`,
  };

  return (
    <Col md={6} className="mb-30">
      <div className="single-boat" style={styleBackground}>
        <Link to={`/dashboard/add-booking/${boatName}`} className="button main-btn main-btn-sm boat-btn">
          Book Now
        </Link>
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
