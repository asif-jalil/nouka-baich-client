import React from 'react';
import { Card, Container, Row, Col, Alert } from "react-bootstrap";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import { useAuth } from "../../App";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';

const AdminLogin = () => {
    const { setCurrentUser } = useAuth();
    let history = useHistory();
    const [error, setError] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
      firebase.auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((result) => {
          const user = result.user;
          setCurrentUser(user);
          history.push("/dashboard");
      })
      .catch((error) => {
          var errorMessage = error.message;
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
                    <h2 className="text-center mb-4">Admin Log In</h2>
                  <div className="w-100 mt-4">
                    <p>Admin Email: admin@admin.com</p>
                    <p>Admin Password: 123456</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-2">
                              <input className="form-control" type="email" {...register("email", { required: true })} placeholder="Email" />
                              {errors.email && <span className="error">This field is required</span>}
                            </div>
                            <div className="mb-2">
                              <input className="form-control" type="password" {...register("password", { required: true })} placeholder="Password" />
                              {errors.password && <span className="error">This field is required</span>}
                            </div>
                            <button className="button main-btn main-btn-sm main-btn-transparent">Login</button>
                        </form>
                    </div>
                    <div className="w-100 text-center mt-3">
                      <Link className="btn btn-link theme-text" to="/">
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

export default AdminLogin;