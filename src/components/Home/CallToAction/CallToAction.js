import React from "react";
import { HashLink } from "react-router-hash-link";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <section className="c2a">
      <h2>HAVE YOUR OWN BOAT?</h2>
      <p>navigare necesse est, vivere non est necesse</p>
      <HashLink to="/#boat" className="button main-btn c2a-btn">
        make money with your boat
      </HashLink>
    </section>
  );
};

export default CallToAction;
