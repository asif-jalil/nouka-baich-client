import React from "react";
import { Card, Col } from "react-bootstrap";
import quote from "../../../images/left-quote.svg";

const ReviewCard = ({ review }) => {
  const { name, company, designation, message } = review;

  return (
    // <Col lg={4} md={6}>
      <Card className="single-review shadow border-0">
        <Card.Body>
          <img src={quote} alt="" className="mb-3" />
          <p className="review-text">{message}</p>
          <h5>{name}</h5>
          <Card.Subtitle>
            {designation}, {company}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    // </Col>
  );
};

export default ReviewCard;
