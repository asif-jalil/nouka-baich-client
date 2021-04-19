import React from "react";
import { Container } from "react-bootstrap";
import AddBookingForm from "./AddBookingForm";
import "./AddBooking.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import ThankYou from "./ThankYou";
import { useState } from "react";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const AddBooking = () => {
  const [userInfo, setUserInfo] = useState();
  const [active, setActive] = useState("info");

  const onSubmit = (data) => {
    console.log(data);
    setUserInfo(data);
    setActive("payment");
  };

  return (
    <Container fluid>
      <h3 className="dashboard-page-title">Hire A Boat</h3>
      <div className="form-step">
        <div className={`step ${active && active === "info" && "active"}`}>
          <span>1</span>
          <p>Information</p>
        </div>
        <div className={`step ${active && active === "payment" && "active"}`}>
          <span>2</span>
          <p>Payment</p>
        </div>
        <div className={`step ${active && active === "thank" && "active"}`}>
          <span>3</span>
          <p>Thank You</p>
        </div>
      </div>
      {!(active === "thank") && (
        <h5 className="theme-text text-center mb-3">
          You are about to hire <strong>dolphin 47</strong>
        </h5>
      )}
      {active === "payment" && <h6 className="theme-text text-center mb-5">Total Cost: ${500 * userInfo?.day} (Per Day $500)</h6>}
      {active && active === "info" && <AddBookingForm userInfo={userInfo} onSubmit={onSubmit} />}
      {active && active === "payment" && (
        <Elements stripe={stripePromise}>
          <PaymentForm active={active} setActive={setActive} />
        </Elements>
      )}
      {active && active === "thank" && <ThankYou userInfo={userInfo} />}
    </Container>
  );
};

export default AddBooking;
