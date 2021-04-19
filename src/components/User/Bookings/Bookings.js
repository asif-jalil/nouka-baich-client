import React from "react";
import { Container, Row } from "react-bootstrap";
import BookingCard from "./BookingCard";
import "./Bookings.css";

const bookingData = [{ status: "pending" }, { status: "ongoing" }, { status: "done" }];

const Bookings = () => {
  return (
    <Container fluid>
      <h3 className="dashboard-page-title">Your Bookings</h3>
      <Row>
        {bookingData.map((booking) => (
          <BookingCard booking={booking} />
        ))}
      </Row>
    </Container>
  );
};

export default Bookings;
