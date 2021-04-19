import React from "react";
import { Card, Container, Row, Col, Alert } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import googleIcon from "../../images/google.svg";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useAuth } from "../../App";
import { useState } from "react";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const { setCurrentUser } = useAuth();
  let history = useHistory();
  let location = useLocation();
  const [error, setError] = useState("");

  let { from } = location.state || { from: { pathname: "/" } };

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const user = result.user;
        setCurrentUser(user);
        history.push(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <section className="login">
      <Container>
        <Row className="justify-content-center">
          <Col md={{ span: 7 }} lg={{ span: 5 }}>
            {error && <Alert variant="danger">{error}</Alert>}
            <Card className="shadow-lg border-0">
              <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>
                <div className="w-100 text-center mt-4">
                  <button onClick={handleGoogleLogin} className="btn">
                    <img src={googleIcon} alt="" />
                  </button>
                </div>
                <div className="w-100 text-center mt-3">
                  <Link className="btn btn-link" to="/">
                    Go to Home
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
