import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export default function AddCreationPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://kinsta.com/wp-content/uploads/2018/09/best-google-fonts-1024x512.png"
  );
  const [difficulty, setDifficulty] = useState("");

  function submitForm(event) {
    event.preventDefault();
  }

  return (
    <Container
      style={{
        backgroundColor: "#36b8cf",
        borderRadius: "15px 15px 15px 15px",
        boxShadow: "3px 3px 10px 1px gray",
        marginTop: 30,
        width: 700,
        paddingTop: 10,
        paddingBottom: 10,
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
      }}
    >
      <Form as={Col} md={{ span: 6, offset: 3 }} onSubmit={submitForm}>
        <h2 style={{ color: "white", fontSize: 35 }} className="mt-5 mb-5">
          Add your creation
        </h2>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Title of your creation"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            as="textarea"
            placeholder="Describe your creation"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image url</Form.Label>
          <Form.Control
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            type="text"
            placeholder="Paste the url of your image"
          />
          {imageUrl ? (
            <Col className="mt-4" md={{ span: 8, offset: 2 }}>
              <Image src={imageUrl} alt="preview" thumbnail />
            </Col>
          ) : null}
        </Form.Group>

        <Form.Group>
          <Form.Label>Difficulty level</Form.Label>
          <br></br>
          <select
            style={{
              padding: 12,
              boxShadow: "3px 3px 10px 1px gray",
              backgroundColor: "white",
              color: "gray",
              fontWeight: "bold",
              borderRadius: "15px 15px 15px 15px",
              border: 0,
            }}
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </Form.Group>

        <Form.Group>
          <Form.Label>Category</Form.Label>
          {/* <Form.Control
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value)}
            type="number"
            placeholder="From 1 to 5. Depending by the amount of time spent and the materials used."
            maxLength="5"
          /> */}
        </Form.Group>

        <Form.Group className="mt-5">
          <Button
            style={{ boxShadow: "3px 3px 10px 1px gray" }}
            variant="warning"
            type="submit"
            onClick={submitForm}
          >
            Post your creation!
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
