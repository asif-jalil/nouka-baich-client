import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Footer.css";
import FooterContact from "./FooterContact";
import FooterLink from "./FooterLink";
import FooterSub from "./FooterSub";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <FooterLink />
          <FooterSub />
          <FooterContact />
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
