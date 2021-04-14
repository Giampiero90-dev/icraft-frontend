import React, { useEffect } from "react";
import { Image, Toast } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";

import { fetchOneCreation } from "../store/creationDetails/actions";
import { selectOneCreation } from "../store/creationDetails/selectors";

import "./CreationPage.css";

export default function CreationPage() {
  const { id } = useParams();
  const creation = useSelector(selectOneCreation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneCreation(id));
  }, [dispatch, id]);

  return (
    <div>
      <Container className="pageContainer">
        <Row>
          <Col className="infoContainer">
            <h2>{creation.title}</h2>
            <p>Creator: {creation.user?.fullName}</p>
            <p>{creation.description}</p>
            <p>Difficulty level: {creation.difficulty}</p>
            <p>Category: {creation.category?.name}</p>
          </Col>
          <Col>
            <Image className="creationImage" src={creation.imageUrl} rounded />
          </Col>
        </Row>
      </Container>
      <Col>
        <h3>Comments:</h3>
        {!creation.comments ? (
          <p>No comments left yet</p>
        ) : (
          <div>
            {creation.comments.map((comment) => {
              return (
                <Toast>
                  <Toast.Header>
                    <strong className="mr-auto">{comment.author}</strong>
                    <small>
                      {moment(comment.createdAt).startOf("day").fromNow()}
                    </small>
                  </Toast.Header>
                  <Toast.Body>{comment.commentText}</Toast.Body>
                </Toast>
              );
            })}
          </div>
        )}
      </Col>
    </div>
  );
}
