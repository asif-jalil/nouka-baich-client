import React from "react";
import { Container, Table } from "react-bootstrap";
import "./BookingList.css";

const BookingList = () => {
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Asif</td>
            <td>asifjalil0@gmail.com</td>
            <td>Dolphin 47</td>
            <td>7</td>
            <td>$1000</td>
            <td>
              <select onChange={handleStatusChange} className="form-control">
                <option value="pending">Pending</option>
                <option value="ongoing">OnGoing</option>
                <option value="done">Done</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Asif</td>
            <td>asifjalil0@gmail.com</td>
            <td>Dolphin 47</td>
            <td>7</td>
            <td>$1000</td>
            <td>
              <select onChange={handleStatusChange} className="form-control">
                <option value="pending">Pending</option>
                <option value="ongoing">OnGoing</option>
                <option value="done">Done</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Asif</td>
            <td>asifjalil0@gmail.com</td>
            <td>Dolphin 47</td>
            <td>7</td>
            <td>$1000</td>
            <td>
              <select onChange={handleStatusChange} className="form-control">
                <option value="pending">Pending</option>
                <option value="ongoing">OnGoing</option>
                <option value="done">Done</option>
              </select>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default BookingList;
