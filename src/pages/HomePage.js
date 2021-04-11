import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreations } from "../store/creation/actions";
import { selectCreations } from "../store/creation/selectors";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function HomePage() {
  const dispatch = useDispatch();
  const creations = useSelector(selectCreations);

  useEffect(() => {
    dispatch(fetchCreations());
  }, [dispatch]);

  return (
    <div>
      <h2 style={{ padding: 20, fontWeight: "bold" }}>Explore all creations</h2>
      <Form>
        <Form.Control size="sm" type="text" placeholder="Search a creation" />
      </Form>

      {!Array.isArray(creations) ? (
        <Spinner animation="border" role="status" variant="info">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <div>
          <Container
            style={{
              display: "flex",
              flexFlow: "wrap",
              marginTop: "20px",
            }}
          >
            {creations.map((creation) => {
              return (
                <Row>
                  <Card
                    key={creation.id}
                    style={{
                      width: "18rem",
                      height: "auto",
                      border: "2px solid gray",
                      boxShadow: "8px 8px 2px 1px gray",
                      marginLeft: "5px",
                      marginRight: "5px",
                    }}
                  >
                    <Card.Img
                      style={{
                        height: "200px",
                        width: "200px",
                        alignSelf: "center",
                      }}
                      variant="top"
                      src={creation.imageUrl}
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "bold", fontSize: 25 }}>
                        {creation.title}
                      </Card.Title>
                      {/* <Card.Text style={{ fontSize: 12 }}>
                        {creation.description}
                      </Card.Text> */}
                      <div>Difficulty level: {creation.difficulty}</div>
                      <div>Author: {creation.user.fullName}</div>

                      <Button variant="primary">View creation</Button>
                    </Card.Body>
                  </Card>
                </Row>
              );
            })}
          </Container>
        </div>
      )}
    </div>
  );
}
