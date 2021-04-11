import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <Spinner animation="border" role="status" variant="info">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}
