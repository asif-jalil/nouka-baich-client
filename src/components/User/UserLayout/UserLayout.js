import React from "react";
import { Switch, Route } from "react-router-dom";
import "./UserLayout.css";
import UserSidebar from "../UserSidebar/UserSidebar";
import AddBooking from "../AddBooking/AddBooking";
import Bookings from "../Bookings/Bookings";
import AddReview from "../AddReview/AddReview";

const Layout = () => {
  return (
    <main>
      <UserSidebar />
      <section className="dashboard-content">
        <Switch>
          <Route exact path="/dashboard/add-booking">
            <AddBooking />
          </Route>
          <Route path="/dashboard/bookings">
            <Bookings />
          </Route>
          <Route path="/dashboard/add-review">
            <AddReview />
          </Route>
        </Switch>
      </section>
    </main>
  );
};

export default Layout;
