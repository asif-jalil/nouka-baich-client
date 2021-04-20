import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";

const BookingCard = ({ booking }) => {
  const { status, boat, name, day, cost } = booking;
  const [statusClass, setStatusClass] = useState("");
  const [boatInfo, setBoatInfo] = useState({});

  useEffect(() => {
    if (status === "done") {
      setStatusClass("success");
    } else if (status === "ongoing") {
      setStatusClass("warning");
    } else if (status === "pending") {
      setStatusClass("danger");
    }
  }, [status]);

  useEffect(() => {
    fetch(`http://localhost:5000/boatByName/${boat}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBoatInfo(data[0]);
      });
  }, [boat]);
  return (
    <Col sm={6}>
      <Card className="single-booking border-0 mb-30">
        <Card.Body>
          <span className={`d-inline-block mb-4 px-4 py-2 rounded text-capitalize alert-${statusClass}`}>{status}</span>
          <div className="d-flex align-items-start justify-content-between flex-wrap flex-md-nowrap">
            <div className="my-booking-info">
              <Card.Title className="mb-3">{boat}</Card.Title>
              <Card.Subtitle className="mb-1">Booked by {name} </Card.Subtitle>
              <Card.Text className="mb-0">For {day} Day(s)</Card.Text>
              <Card.Text className="mb-0">Total Cost: ${cost}</Card.Text>
            </div>
            <div className="my-booking-img">
              <img src={`data:${boatInfo?.boatImg?.type};base64, ${boatInfo?.boatImg?.img}`} alt="" />
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BookingCard;
