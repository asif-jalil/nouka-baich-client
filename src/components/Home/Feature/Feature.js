import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import fishingImg from "../../../images/feature/fishing.jpg";
import celebrateImg from "../../../images/feature/celebrate.jpg";
import sailingImg from "../../../images/feature/sailing.jpg";
import waterSportImg from "../../../images/feature/watersport.jpg";
import "./Feature.css";
import FeatureContent from "./FeatureContent";

const Feature = () => {
  const [option, setOption] = useState("celebrate");

  return (
    <section className="feature sec-pad-top sec-pad-bottom">
      <Container>
        <Row>
          <Col md={6}>
            <FeatureContent setOption={setOption} />
          </Col>
          <Col md={6}>
            <div className="feature-img">
              {option === "fishing" && <img src={fishingImg} alt="" className="img-fluid" />}
              {option === "celebrate" && <img src={celebrateImg} alt="" className="img-fluid" />}
              {option === "sailing" && <img src={sailingImg} alt="" className="img-fluid" />}
              {option === "waterSport" && <img src={waterSportImg} alt="" className="img-fluid" />}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Feature;
