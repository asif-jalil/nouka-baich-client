import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useAuth } from "../../../App";
import BookingCard from "./BookingCard";
import "./Bookings.css";

const Bookings = () => {
  const { currentUser } = useAuth();
  const [myBookings, setMyBookings] = useState([]);

  useEffect(() => {
    fetch("https://salty-journey-40699.herokuapp.com/booking-by-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: currentUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMyBookings(data);
        console.log(data);
      });
  }, [currentUser.email]);

  return (
    <Container fluid>
      <h3 className="dashboard-page-title">Your Bookings</h3>
      <Row>
        {myBookings.map((booking) => (
          <BookingCard booking={booking} />
        ))}
      </Row>
    </Container>
  );
};

export default Bookings;
