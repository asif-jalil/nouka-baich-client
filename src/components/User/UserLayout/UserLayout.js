import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./UserLayout.css";
import UserSidebar from "../UserSidebar/UserSidebar";
import AddBooking from "../AddBooking/AddBooking";
import Bookings from "../Bookings/Bookings";
import AddReview from "../AddReview/AddReview";
import { useAuth } from "../../../App";
import { useState } from "react";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";

const Layout = () => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://salty-journey-40699.herokuapp.com/check-admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: currentUser?.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          setLoading(false);
        }
      });
  }, []);

  return (
    <main>
      {loading ? (
        <div className="position-center text-center">
          <Spinner animation="border" role="status"></Spinner>
          <h5 className="theme-text mt-3">Checking Permission...</h5>
        </div>
      ) : (
        <>
          <UserSidebar />
          <section className="dashboard-content">
            <Switch>
              <Route exact path="/dashboard/bookings">
                <Bookings />
              </Route>
              <Route exact path="/dashboard/add-review">
                <AddReview />
              </Route>
              <Route path="/dashboard/add-booking/:boat">
                <AddBooking />
              </Route>
              <Route path="/dashboard/add-booking">
                <AddBooking />
              </Route>
              <Route>
                <Redirect to="/dashboard/bookings"></Redirect>
              </Route>
            </Switch>
          </section>
        </>
      )}
    </main>
  );
};

export default Layout;
