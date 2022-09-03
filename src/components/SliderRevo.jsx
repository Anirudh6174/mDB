import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SliderRevo() {
  return (
    <Carousel>
      <Carousel.Item>
        <div
          className="sr-fixedheight sr-sliderhard"
          style={{
            background: "url('https://i.postimg.cc/3R8R9p11/slide1-bg.jpg')",
          }}
        >
          {/* <div className="sr-leftcomp">
            <h2 className="sr-leftcomp-sub-legendText">
              EASILY BOOK AN EXCLUSIVE
            </h2>
            <h1 className="sr-legendText">Live Music Performer</h1>
            <Button variant="outline-Light">BOOK YOUR MUSICAL SHOW</Button>
          </div>
          <div className="sr-rightcomp"></div> */}
          <Container>
            <Row className="sr-leftcomp">
              <Col>
                <h2 className="sr-leftcomp-sub-legendText">
                  EASILY BOOK AN EXCLUSIVE
                </h2>
                <h1 className="sr-legendText">Live Music Performer</h1>
              </Col>

              <Col>
                <img
                  src="https://i.postimg.cc/Kz2LbRN3/png-20220720-080903-0000-768x1086.png"
                  alt=""
                  style={{
                    height: "30%",
                  }}
                ></img>
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>
      {/* <Carousel.Item>
        <div
          className="sr-fixedheight sr-sliderhard"
          style={{
            backgroundImage: "https://i.postimg.cc/3R8R9p11/slide1-bg.jpg",
          }}
        ></div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="sr-fixedheight sr-sliderhard"
          style={{
            backgroundImage: "https://i.postimg.cc/3R8R9p11/slide1-bg.jpg",
          }}
        ></div>
      </Carousel.Item> */}
    </Carousel>
  );
}
