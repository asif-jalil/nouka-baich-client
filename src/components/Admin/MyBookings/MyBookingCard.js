import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import boat from "../../../images/boat/boat-1.jpg";

const MyBookingCard = ({ booking }) => {
  const { status } = booking;
  const [statusClass, setStatusClass] = useState("");

  useEffect(() => {
    if (status === "done") {
      setStatusClass("success");
    } else if (status === "ongoing") {
      setStatusClass("warning");
    } else if (status === "pending") {
      setStatusClass("danger");
    }
  }, [status]);

  return (
    <Col sm={6}>
      <Card className="single-booking border-0 mb-30">
        <Card.Body>
          <span className={`d-inline-block mb-4 px-4 py-2 rounded text-capitalize alert-${statusClass}`}>{status}</span>
          <div className="d-flex align-items-start justify-content-between flex-wrap flex-md-nowrap">
            <div className="my-booking-info">
              <Card.Title className="mb-3">Dolphin 47</Card.Title>
              <Card.Subtitle className="mb-1">Booked by Asif </Card.Subtitle>
              <Card.Text className="mb-0">For 2 Day(s)</Card.Text>
              <Card.Text className="mb-0">Total Cost: $1000</Card.Text>
            </div>
            <div className="my-booking-img">
              <img src={boat} alt="" />
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MyBookingCard;
