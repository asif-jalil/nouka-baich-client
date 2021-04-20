import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import "./BookingList.css";
import BookingListRow from "./BookingListRow";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);

  const handleStatusChange = (event) => {
    event.target.setAttribute("selected", "selected");
    console.log(event.target);
  };
  return (
    <Container fluid>
      <h3 className="dashboard-page-title">All Bookings</h3>
      <Table borderless hover responsive className="booking-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Boat Name</th>
            <th>Day(s)</th>
            <th>Cost</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, idx) => (
            <BookingListRow key={idx} booking={booking} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default BookingList;
