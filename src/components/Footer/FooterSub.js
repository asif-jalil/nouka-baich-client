import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterSub = () => {
  return (
    <Col lg={6}>
      <h5 className="foot-title">subscribe to our newsletter</h5>
      <div className="foot-serach">
        <input type="text" placeholder="Your email address" />
        <button className="button subscribe-btn">Subscribe</button>
      </div>
      <div className="social">
        <Link to="#">
          <span>
            <i className="fab fa-facebook-f"></i>
          </span>
        </Link>
        <Link href="#">
          <span>
            <i className="fab fa-twitter"></i>
          </span>
        </Link>
        <Link href="#">
          <span>
            <i className="fab fa-google-plus-g"></i>
          </span>
        </Link>
      </div>
    </Col>
  );
};

export default FooterSub;
