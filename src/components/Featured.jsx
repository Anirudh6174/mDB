import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Featured() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Our top stars</h3>
          <h1>MEET TRENDING ARTISTS</h1>
          <p>
            Our AI Engine automatically searches for the top performing artists
            in your locality
          </p>
          <button>View All</button>
        </Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default Featured;
