import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchOneCreation } from "../store/creationDetails/actions";
import { selectOneCreation } from "../store/creationDetails/selectors";

export default function CreationPage() {
  const { id } = useParams();
  const creation = useSelector(selectOneCreation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneCreation(id));
  }, [dispatch, id]);

  return (
    <div>
      <Card style={{ width: "50rem" }}>
        <Card.Body>
          <Card.Title>{creation.title}</Card.Title>
          <Card.Text>{creation.description}</Card.Text>
          <Card.Img variant="bottom" src={creation.imageUrl} />
        </Card.Body>
      </Card>
    </div>
  );
}
