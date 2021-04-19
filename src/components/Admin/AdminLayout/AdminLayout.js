import React from "react";
import { Switch, Route } from "react-router-dom";
import "./AdminLayout.css";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import AddBoat from "../AddBoat/AddBoat";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import BookingList from "../BookingList/BookingList";
import AddAdmin from "../AddAdmin/AddAdmin";
import ManageBoat from "../ManageBoat/ManageBoat";
import AddBooking from "../AddBooking/AddBooking";
import AddReview from "../AddReview/AddReview";
import MyBookings from "../MyBookings/MyBookings";

const AdminLayout = () => {
  return (
    <main>
      <AdminSidebar />
      <section className="dashboard-content">
        <Switch>
          <Route exact path="/dashboard">
            <AdminDashboard />
          </Route>
          <Route path="/dashboard/add-boat">
            <AddBoat />
          </Route>
          <Route path="/dashboard/boats">
            <ManageBoat />
          </Route>
          <Route path="/dashboard/manage-boat">
            <BookingList />
          </Route>
          <Route path="/dashboard/add-booking">
            <AddBooking />
          </Route>
          <Route path="/dashboard/bookings">
            <MyBookings />
          </Route>
          <Route exact path="/dashboard/booking-list">
            <BookingList />
          </Route>
          <Route path="/dashboard/add-admin">
            <AddAdmin />
          </Route>
          <Route path="/dashboard/review">
            <AddReview />
          </Route>
        </Switch>
      </section>
    </main>
  );
};

export default AdminLayout;
