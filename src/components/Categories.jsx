import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Categories() {
  return (
    <div className="hp-categories">
      <h3>Categories</h3>
      <h1>EXPLORE FROM A WIDE RANGE BELOW</h1>
      <div className="hp-card-wrapper">
        <Row className="featured-row">
          <Col className="cat-col">
            <Card bg="light">
              <a href="/bookartist">
                <Card.Img
                  className="cat-images"
                  variant="top"
                  src="https://i.imgur.com/aQdphaU.jpg"
                />
              </a>
              <Card.Body>
                <Card.Title>Singer</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="cat-col">
            <Card>
              <a href="/bookartist">
                <Card.Img
                  className="cat-images"
                  variant="top"
                  src="https://i.imgur.com/Bpt9PtC.jpg"
                />
              </a>
              <Card.Body>
                <Card.Title>Anchor</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="cat-col">
            <Card>
              <a href="/bookartist">
                <Card.Img
                  className="cat-images"
                  variant="top"
                  src="https://i.imgur.com/xay9H1m.png"
                />
              </a>
              <Card.Body>
                <Card.Title>DJ</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="featured-row">
          <Col className="cat-col">
            <Card>
              <a href="/bookartist">
                <Card.Img
                  className="cat-images"
                  variant="top"
                  src="https://i.imgur.com/QetDy2w.jpg"
                />
              </a>
              <Card.Body>
                <Card.Title>Instrumentalist</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="cat-col">
            <Card>
              <a href="/bookartist">
                <Card.Img
                  className="cat-images"
                  variant="top"
                  src="https://i.imgur.com/mVXgdiR.jpg"
                />
              </a>
              <Card.Body>
                <Card.Title>Classical Singer</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="cat-col">
            <Card>
              <a href="/bookartist">
                <Card.Img
                  className="cat-images"
                  variant="top"
                  src="https://i.imgur.com/WfN3Pt5.jpg"
                />
              </a>
              <Card.Body>
                <Card.Title>Band</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Categories;
