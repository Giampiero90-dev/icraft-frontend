import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./login.css";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitForm(event) {
    event.preventDefault();

    setEmail("");
    setPassword("");
  }

  return (
    <div className="image">
      <Container className="loginContainer">
        <Form as={Col} md={{ span: 6, offset: 3 }} className="loginForm">
          <h1>Login</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mt-5">
            <Button
              className="loginButton"
              variant="primary"
              type="submit"
              onClick={submitForm}
            >
              Log in
            </Button>
          </Form.Group>
          <Link
            className="loginText"
            to="/signup"
            style={{ textAlign: "center" }}
          >
            New here? Go to sign up{" "}
          </Link>
        </Form>
      </Container>
    </div>
  );
}
