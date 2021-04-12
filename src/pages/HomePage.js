import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreations } from "../store/creation/actions";
import { selectSortedCreations } from "../store/creation/selectors";

import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProgressBar from "react-bootstrap/ProgressBar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [selectedSortingMethod, setSelectedSortingMethod] = useState("recent");
  const dispatch = useDispatch();
  const creations = useSelector(selectSortedCreations(selectedSortingMethod));

  useEffect(() => {
    dispatch(fetchCreations());
  }, [dispatch]);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Sort creations
    </Tooltip>
  );

  return (
    <div>
      <h2 style={{ padding: 20, fontWeight: "bold" }}>Explore all creations</h2>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <select
          style={{
            padding: 12,
            boxShadow: "3px 3px 10px 1px gray",
            backgroundColor: "#36b8cf",
            color: "white",
            fontWeight: "bold",
          }}
          value={selectedSortingMethod}
          onChange={(e) => setSelectedSortingMethod(e.target.value)}
        >
          <option value="recent">Most recent</option>
          <option value="difficult">Most difficult</option>
          <option value="easy">Most easy</option>
          <option value="AZ">A-Z</option>
          <option value="ZA">Z-A</option>
        </select>
      </OverlayTrigger>
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
              justifyContent: "space-around",
            }}
          >
            {creations.map((creation) => {
              return (
                <Row>
                  <Card
                    // bg="info"
                    // text="light"
                    key={creation.id}
                    style={{
                      width: "18rem",
                      height: "auto",
                      boxShadow: "6px 6px 10px 1px gray",
                      marginLeft: "15px",
                      marginRight: "5px",
                      marginBottom: "30px",
                    }}
                  >
                    <Card.Img
                      style={{
                        height: "200px",
                        width: "200px",
                        alignSelf: "center",
                        borderRadius: "15px 15px 15px 15px",
                        marginTop: "10px",
                      }}
                      variant="top"
                      src={creation.imageUrl}
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "bold", fontSize: 25 }}>
                        {creation.title}
                      </Card.Title>
                      <div>
                        Difficulty level:{" "}
                        <ProgressBar
                          // animated
                          max={5}
                          now={creation.difficulty}
                        />
                        {creation.difficulty}
                      </div>
                      {/* <div>Author: {creation.user.fullName}</div> */}
                      <Link to={`/creations/${creation.id}`}>
                        <Button variant="primary">View creation</Button>
                      </Link>
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
