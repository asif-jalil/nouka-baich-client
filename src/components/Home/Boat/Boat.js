import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import "./Boat.css";
import BoatCard from "./BoatCard";

const Boat = () => {
  const [boats, setBoats] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    fetch("https://salty-journey-40699.herokuapp.com/boats")
      .then((res) => res.json())
      .then((data) => {
        setBoats(data);
        setLoader(false);
      });
  }, []);

  return (
    <section id="boat" className="boat sec-pad-top sec-pad-bottom">
      <Container>
        <div className="section-title">
          <h3>Featured Boats</h3>
        </div>
        {loader ? (
          <Spinner animation="border"></Spinner>
        ) : (
          <Row>
            {boats.map((boat, idx) => (
              <BoatCard key={idx} boat={boat} />
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Boat;
