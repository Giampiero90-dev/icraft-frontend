import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Container, Button, Col } from "react-bootstrap";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitForm(event) {
    event.preventDefault();

    setEmail("");
    setPassword("");
  }

  return (
    <div className="loginImage">
      <Container className="loginGroup">
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
            <Button variant="primary" type="submit" onClick={submitForm}>
              Log in
            </Button>
          </Form.Group>
          <Link
            className="loginText"
            to="/signup"
            style={{ textAlign: "center" }}
          >
            New here? Sign up here
          </Link>
        </Form>
      </Container>
    </div>
  );
}
