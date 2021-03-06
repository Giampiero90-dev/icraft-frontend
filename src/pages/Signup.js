import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";

import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { selectToken } from "../store/user/selectors";
import { signUp } from "../store/user/actions";

import "./signup.css";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  //   const token = useSelector(selectToken);
  const history = useHistory();

  //   useEffect(() => {
  //     if (token !== null) {
  //       history.push("/");
  //     }
  //   }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(fullName, bio, email, password));

    setFullName("");
    setBio("");
    setEmail("");
    setPassword("");
    history.push("/");
  }

  return (
    <div className="image2">
      <Container className="formContainer">
        <Form
          as={Col}
          md={{ span: 6, offset: 3 }}
          className="mt-5"
          onSubmit={submitForm}
        >
          <h1 className="title">Signup</h1>
          <Form.Group controlId="formBasicName">
            <Form.Label className="labelText">Name</Form.Label>
            <Form.Control
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              type="text"
              placeholder="Enter name"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBio">
            <Form.Label className="labelText">Bio</Form.Label>
            <Form.Control
              value={bio}
              onChange={(event) => setBio(event.target.value)}
              type="text"
              placeholder="Enter a short bio"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className="labelText">Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="labelText">Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mt-5">
            <Button variant="info" type="submit" onClick={submitForm}>
              Sign up
            </Button>
          </Form.Group>
          <Link to="/login">Click here to log in</Link>
        </Form>
      </Container>
    </div>
  );
}
