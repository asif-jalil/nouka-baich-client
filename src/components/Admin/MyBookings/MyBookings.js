import React from "react";
import { Container, Row } from "react-bootstrap";
import "./MyBooking.css";
import MyBookingCard from "./MyBookingCard";

const bookingData = [{ status: "pending" }, { status: "ongoing" }, { status: "done" }];

const MyBookings = () => {
  return (
    <Container fluid>
      <h3 className="dashboard-page-title">Your Bookings</h3>
      <Row>
        {bookingData.map((booking) => (
          <MyBookingCard booking={booking} />
        ))}
      </Row>
    </Container>
  );
};

export default MyBookings;
