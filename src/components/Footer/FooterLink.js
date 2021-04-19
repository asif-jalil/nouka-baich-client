import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterLink = () => {
  const [boats, setBoats] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/boats")
      .then((res) => res.json())
      .then((data) => {
        setBoats(data);
      });
  }, []);
  return (
    <Col lg={3}>
      <h5 className="foot-title">top boats</h5>
      <ul className="foot-menu">
        {boats.map((boat, idx) => (
          <li key={idx}>
            <Link to="/">{boat.boatInfo.boatName}</Link>
          </li>
        ))}
      </ul>
    </Col>
  );
};

export default FooterLink;
