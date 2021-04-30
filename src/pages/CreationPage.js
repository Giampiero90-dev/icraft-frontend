import React, { useEffect, useState } from "react";
import { Button, Form, Image, Badge, ProgressBar } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import moment from "moment";

import { fetchOneCreation } from "../store/creationDetails/actions";
import { postComment } from "../store/creationDetails/actions";
import { selectOneCreation } from "../store/creationDetails/selectors";

import "./CreationPage.css";

export default function CreationPage() {
  const { id } = useParams();
  const creation = useSelector(selectOneCreation);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    dispatch(fetchOneCreation(id));
  }, [dispatch, id]);

  return (
    <div>
      <Container className="mainContainer">
        <Container className="topContainer">
          <Row>
            <Col className="infoContainer">
              <h2 className="creationTitle">
                <strong>{creation.title}</strong>
              </h2>
              <p>
                By:{" "}
                <Link to={`/creators/${creation.user?.id}`}>
                  <strong>{creation.user?.fullName}</strong>
                </Link>
              </p>
              <p>{creation.description}</p>
              <p>
                Difficulty level: <strong>{creation.difficulty}</strong>
              </p>
              <ProgressBar variant="info" now={creation.difficulty} max={5} />
              <br></br>
              <p>
                Category:{" "}
                <Badge style={{ fontSize: "15px" }} variant="info">
                  <strong>{creation.category?.name}</strong>
                </Badge>
              </p>
            </Col>
            <Col>
              <Image
                className="creationImage"
                src={creation.imageUrl}
                rounded
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <Form className="commentFormGroup">
                <Form.Group>
                  <h4>Leave a comment</h4>
                  <Form.Control
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Your name"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    as="textarea"
                    placeholder="Your comment"
                  />
                </Form.Group>
                <Button
                  variant="info"
                  type="submit"
                  onClick={() => dispatch(postComment(name, comment))}
                >
                  Submit
                </Button>
              </Form>
            </Col>
            {!creation.comments ? (
              <p>No comments left yet</p>
            ) : (
              <Col>
                {creation.comments.map((comment) => {
                  return (
                    <div className="comment" key={comment.id}>
                      <div className="commentHeader">
                        <strong className="commentAuthor">
                          {comment.author}
                        </strong>
                        <small id="commentDate">
                          {moment(comment.createdAt).fromNow()}
                        </small>
                      </div>
                      <div className="commentText">{comment.commentText}</div>
                    </div>
                  );
                })}
              </Col>
            )}
          </Row>
        </Container>
      </Container>
    </div>
  );
}
