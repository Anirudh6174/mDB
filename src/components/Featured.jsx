import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

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
          <Button variant="warning" size="lg">
            View All
          </Button>
        </Col>
        <Col>
          <img src="https://i.postimg.cc/05ML6Dbp/ADHRIT-2.jpg" alt="" />
        </Col>
        <Col>
          <img src="https://i.postimg.cc/WbqwDYWV/CDS_Bhatti_(19).jpg" alt="" />
        </Col>
      </Row>
      <Row>
        <Col>
          <img src="https://i.postimg.cc/PJVn1sBK/Manjha_(2).jpg" alt="" />
        </Col>
        <Col>
          <img
            src="https://i.postimg.cc/mDxDFMQh/Ketan-Kr-Giri-18.jpg"
            alt=""
          />
        </Col>
        <Col>
          <img
            src="https://i.postimg.cc/pLLbqT2C/Shraddha_Tiwari_(16).jpg"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Featured;
