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
              src="https://i.postimg.cc/Y0khTkPR/Ekaterina_(1).jpg"
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
              src="https://i.postimg.cc/rFWLKbfG/Paritosh_Tonk__(15).jpg"
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
              src="https://yt3.ggpht.com/Fm0_cT8zmC9TyId4YQmE-vVl_t4MBINIZog4UjV00Wn_9Jt-P7Z1K8i-Glv43rXXA6DzwXuH=s900-c-k-c0x00ffffff-no-rj"
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
              src="https://i.postimg.cc/6pmLnH5t/Seasons_(2).jpg"
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
