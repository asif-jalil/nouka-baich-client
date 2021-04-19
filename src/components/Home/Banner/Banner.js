import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <Container>
        <Row>
          <Col lg={{ span: 12 }}>
            <div className="banner-content text-center">
              <h1>Boat Rentals</h1>
              <p>
                Search for powerboat rentals, sailboat charters, fishing <br /> charters, jet ski rentals, and houseboat rentals
              </p>
              <HashLink smooth to="/#boat" className="button main-btn">
                Hire Now
              </HashLink>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
