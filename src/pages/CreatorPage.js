import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectOneCreator } from "../store/creator/selectors";
import { fetchOneCreator } from "../store/creator/actions";
import { useDispatch } from "react-redux";

import Card from "react-bootstrap/Card";

import "./creatorPage.css";
import Icon from "../logo/user.png";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CreatorPage() {
  const { id } = useParams();
  const creator = useSelector(selectOneCreator);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneCreator(id));
  }, [dispatch, id]);

  return (
    <div>
      <Row>
        <img className="profilePic" src={Icon} alt="user profile" />
        <div className="creatorInfo">
          <h1 className="creatorName">{creator.fullName}</h1>
          <h3 className="creatorBio">{creator.bio}</h3>
        </div>
      </Row>
      <div>
        <h3 className="myCreations">My creations:</h3>
        <div>
          {!creator.creations ? (
            <p>No creations yet</p>
          ) : (
            <div>
              <Container className="cardGrid">
                {creator.creations?.map((creation) => {
                  return (
                    <Row key={creation.id}>
                      <Card className="creationCard">
                        <Card.Title className="cardTitle">
                          {creation.title}
                        </Card.Title>
                        <Card.Img
                          className="cardImage"
                          src={creation.imageUrl}
                          alt="Card image"
                        />
                        <Link to={`/creations/${creation.id}`}>
                          <Button className="cardButton" variant="info">
                            View
                          </Button>
                        </Link>
                      </Card>
                    </Row>
                  );
                })}
              </Container>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
