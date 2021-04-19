import React from "react";
import { useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement } from "@stripe/react-stripe-js";
import { Col, Row, Alert } from "react-bootstrap";
import { useState } from "react";

const PaymentForm = ({ active, setActive }) => {
  const [cardInfo, setCardInfo] = useState();
  const [error, setError] = useState();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message);
    } else {
      setCardInfo({ id: paymentMethod.id, card: paymentMethod.card });
      setActive("thank");
    }
  };

  const handleBack = () => {
    setActive("info");
  };

  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      <form className="payment-form" onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <div className="mb-3">
              <label>Card number</label>
              <CardNumberElement options={{ showIcon: true }} className="form-control" />
            </div>
          </Col>
          <Col md={3}>
            <div className="mb-3">
              <label>Expiration date</label>
              <CardExpiryElement className="form-control" />
            </div>
          </Col>
          <Col md={3}>
            <div className="mb-3">
              <label>CVC</label>
              <CardCvcElement className="form-control" />
            </div>
          </Col>
          <Col xs={12}>
            <button type="button" onClick={handleBack} disabled={!stripe} className="button main-btn main-btn-sm main-btn-transparent mr-3">
              Back
            </button>
            <button type="submit" disabled={!stripe} className="button main-btn main-btn-sm main-btn-transparent">
              Pay
            </button>
          </Col>
        </Row>
      </form>
    </>
  );
};

export default PaymentForm;
