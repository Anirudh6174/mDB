import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Categories() {
  return (
    <div className="hp-categories">
      <h3>Categories</h3>
      <h1>EXPLORE FROM A WIDE RANGE BELOW</h1>
      <div className="hp-card-wrapper">
        <CardGroup>
          <Card bg="light">
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/05ML6Dbp/ADHRIT-2.jpg"
            />
            <Card.Body>
              <Card.Title>Singer</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/05ML6Dbp/ADHRIT-2.jpg"
            />
            <Card.Body>
              <Card.Title>Anchor</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/05ML6Dbp/ADHRIT-2.jpg"
            />
            <Card.Body>
              <Card.Title>DJ</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/05ML6Dbp/ADHRIT-2.jpg"
            />
            <Card.Body>
              <Card.Title>Comedian</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/05ML6Dbp/ADHRIT-2.jpg"
            />
            <Card.Body>
              <Card.Title>Classical Singer</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.postimg.cc/05ML6Dbp/ADHRIT-2.jpg"
            />
            <Card.Body>
              <Card.Title>Magician</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default Categories;
