import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/category/actions";
import { selectCategories } from "../store/category/selectors";
import { postCreation } from "../store/creation/actions";
import { useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function AddCreationPage() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const [category, setCategory] = useState(1);

  const uploadImage = async (e) => {
    console.log("triggered");
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "dgcuu1zf");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/giampierocloud/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    console.log(file.url);
    setImage(file.url);
  };
  console.log(image);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  function submitForm(event) {
    event.preventDefault();
    dispatch(postCreation(title, description, image, difficulty, category));
    history.push("/");
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
          <Form.Label>Upload your image</Form.Label>
          <input
            // value={image}
            type="file"
            name="file"
            placeholder="drag it here"
            onChange={uploadImage}
          />
        </Form.Group>
        {image ? (
          <img
            alt="preview"
            src={image}
            style={{ maxWidth: 250, maxHeight: 250 }}
          />
        ) : null}

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
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </Form.Group>

        <Form.Group className="mt-5">
          <Button
            style={{
              boxShadow: "3px 3px 10px 1px gray",
              color: "white",
              fontWeight: "bold",
            }}
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
