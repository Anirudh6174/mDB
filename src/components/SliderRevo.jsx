import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Bounce from "react-reveal/Bounce";
import { Rotate } from "react-reveal";

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
          <Container>
            {/* Background Images */}
            <Bounce left>
              <div
                className="sr-smallbannerimages "
                style={{
                  marginLeft: "50%",
                  position: "absolute",
                  left: "295px",
                }}
              >
                <img
                  src="https://i.postimg.cc/HkXfxNmc/20220720-081220-0000-724x1024.png"
                  alt=""
                  className="sr-imgBox bounce-2"
                  height={240}
                  width={200}
                ></img>
              </div>
            </Bounce>

            <Bounce left>
              <div
                className="sr-smallbannerimages-slide1-item2"
                style={{
                  marginLeft: "50%",
                  position: "absolute",
                  left: "495px",
                  top: "250px",
                }}
              >
                <img
                  src="https://i.postimg.cc/y6fB4267/20220720-081311-0000-724x1024.png"
                  alt=""
                  className="sr-imgBox bounce-2"
                  height={200}
                  width={160}
                ></img>
              </div>
            </Bounce>

            <Bounce left>
              <div
                className="sr-smallbannerimages-slide1-item3"
                style={{
                  marginLeft: "40%",
                  position: "absolute",
                  bottom: "50px",
                  right: "1050px",
                  top: "400px",
                }}
              >
                <img
                  src="https://i.postimg.cc/PqNfNyqJ/png-20220720-081050-0000-724x1024.png"
                  alt=""
                  className="sr-imgBox bounce-3"
                  height={240}
                  width={200}
                ></img>
              </div>
            </Bounce>

            <Bounce left>
              <div
                className="sr-smallbannerimages-slide1-item4"
                style={{
                  marginLeft: "20%",
                  position: "absolute",
                  bottom: "10px",
                  right: "900px",
                  top: "40px",
                }}
              >
                <img
                  src="https://i.postimg.cc/C52WBTdD/object-guitar-1-25.png"
                  alt=""
                  className="sr-imgBox bounce-3"
                  height={240}
                  width={200}
                ></img>
              </div>
            </Bounce>

            {/* Main content */}
            <Row className="sr-leftcomp">
              <Col sm={5}>
                <Bounce right>
                  <div className="sr-leftCol">
                    <h2 className="sr-leftcomp-sub-legendText">
                      <em>EASILY BOOK AN EXCLUSIVE</em>
                    </h2>
                    <h1 className="sr-legendText">
                      <em>
                        Live Music <br /> Performer
                      </em>
                    </h1>
                    <Button className="sr-bookBtn" variant="light">
                      <b>BOOK YOUR MUSICAL SHOW</b>
                    </Button>
                  </div>
                </Bounce>
              </Col>
              <Col sm={5} className="sr-rightCol">
                <Bounce left>
                  <img
                    src="https://i.postimg.cc/XvrvBcg2/png-20220720-080903-0000-768x1086.png"
                    alt=""
                    style={{
                      height: "80vh",
                    }}
                  ></img>
                </Bounce>
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>

      {/* Second ITEM of Carousel ------------------------2-------------------------- */}

      <Carousel.Item>
        <div
          className="sr-fixedheight sr-sliderhard"
          style={{
            background: "url('https://i.postimg.cc/GpQ3BtRy/slide2-bg.jpg')",
          }}
        >
          <Container>
            {/* Background Images */}
            <Bounce left>
              <div
                className="sr-smallbannerimages-slide2-item1"
                style={{
                  marginLeft: "50%",
                  position: "absolute",
                  top: "50px",
                  right: "250px",
                }}
              >
                <img
                  src="https://i.postimg.cc/268J08Zh/20220720-082731-0000-724x1024.png"
                  alt=""
                  className="sr-imgBox bounce-2"
                  height={240}
                  width={150}
                ></img>
              </div>
            </Bounce>

            <Bounce left>
              <div
                className="sr-smallbannerimages"
                style={{
                  marginLeft: "40%",
                  position: "absolute",
                  bottom: "50px",
                  right: "1050px",
                  top: "500px",
                }}
              >
                <img
                  src="https://i.postimg.cc/VvzNGtF4/20220720-082236-0000-212x300.png"
                  alt=""
                  className="sr-imgBox bounce-2"
                  height={200}
                  width={100}
                ></img>
              </div>
            </Bounce>

            <Bounce left>
              <div
                className="sr-smallbannerimages-slide2-item4"
                style={{
                  marginLeft: "20%",
                  position: "absolute",
                  bottom: "10px",
                  right: "300px",
                  top: "500px",
                }}
              >
                <img
                  src="https://i.postimg.cc/sgQ5SYx6/20220720-081639-0000-212x300.png"
                  alt=""
                  className="sr-imgBox bounce-3"
                  height={200}
                  width={160}
                ></img>
              </div>
            </Bounce>

            <Bounce left>
              <div
                className="sr-smallbannerimages-slide2-item5"
                style={{
                  marginLeft: "20%",
                  position: "absolute",
                  bottom: "10px",
                  right: "1250px",
                  top: "100px",
                }}
              >
                <img
                  src="https://i.postimg.cc/xdZRV256/20220720-082949-0000-724x1024.png"
                  alt=""
                  className="sr-imgBox bounce-2"
                  height={300}
                  width={230}
                ></img>
              </div>
            </Bounce>

            <Bounce left>
              <div
                className="sr-smallbannerimages-slide2-item6"
                style={{
                  marginLeft: "20%",
                  position: "absolute",
                  bottom: "10px",
                  right: "1350px",
                  top: "500px",
                }}
              >
                <img
                  src="https://i.postimg.cc/BQshpvf6/png-20220720-082830-0000-724x1024.png"
                  alt=""
                  className="sr-imgBox bounce-3"
                  height={200}
                  width={140}
                ></img>
              </div>
            </Bounce>

            {/* Main content */}
            <Row className="sr-leftcomp">
              <Col sm={6}>
                <Bounce right>
                  <div className="sr-leftCol">
                    <h2 className="sr-leftcomp-sub-legendText">
                      <em>Get your party exciting with</em>
                    </h2>
                    <h1 className="sr-legendText">
                      <em>
                        LIVE STANDUP <br /> COMEDY
                      </em>
                    </h1>
                    <Button className="sr-bookBtn" variant="light">
                      <b>BOOK YOUR COMEDIAN</b>
                    </Button>
                  </div>
                </Bounce>
              </Col>
              <Col sm={5} className="sr-rightCol">
                <Bounce left>
                  <img
                    src="https://i.postimg.cc/wvx0kM7b/11111.png"
                    alt=""
                    style={
                      {
                        // height: "30%",
                      }
                    }
                  ></img>
                </Bounce>
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>

      {/* Third ITEM of Carousel ------------------------3-------------------------- */}

      <Carousel.Item>
        <div
          className="sr-fixedheight sr-sliderhard"
          style={{
            background: "url('https://i.postimg.cc/4d2J50m4/slide3-bg.jpg')",
          }}
        >
          <Container>
            {/* Background Images */}
            <Bounce left>
              <div
                className="sr-smallbannerimages-slide3-item1"
                style={{
                  marginLeft: "50%",
                  position: "absolute",
                  left: "-80px",
                  top: "20px",
                }}
              >
                <img
                  src="https://i.postimg.cc/dVCL0JD2/png-20220720-083732-0000-768x1086.png"
                  alt=""
                  className="sr-imgBox bounce-2"
                  height={480}
                  width={350}
                ></img>
              </div>
            </Bounce>

            <Bounce left>
              <div
                className="sr-smallbannerimages-slide3-item2"
                style={{
                  marginLeft: "40%",
                  position: "absolute",
                  bottom: "50px",
                  right: "250px",
                  top: "70px",
                }}
              >
                <img
                  src="https://i.postimg.cc/wxDfDmPZ/png-20220720-083327-0000-212x300.png"
                  alt=""
                  className="sr-imgBox bounce-3"
                  height={200}
                  width={130}
                ></img>
              </div>
            </Bounce>

            <Bounce left>
              <div
                className="sr-smallbannerimages-slide3-item3"
                style={{
                  marginLeft: "20%",
                  position: "absolute",
                  bottom: "10px",
                  right: "1300px",
                  top: "50px",
                }}
              >
                <img
                  src="https://i.postimg.cc/7LCXhG0B/png-20220720-083401-0000-212x300.png"
                  alt=""
                  className="sr-imgBox bounce-3"
                  height={200}
                  width={140}
                ></img>
              </div>
            </Bounce>

            {/* Main content */}
            <Row className="sr-leftcomp">
              <Col sm={6}>
                <Bounce right>
                  <div className="sr-leftCol">
                    <h2 className="sr-leftcomp-sub-legendText">
                      <em>Add Mystery & Spice with your</em>
                    </h2>
                    <h1 className="sr-legendText">
                      <em>
                        MAGIC
                        <br /> SHOW
                      </em>
                    </h1>
                    <Button className="sr-bookBtn" variant="light">
                      <b>GET YOUR MAGIC SHOW</b>
                    </Button>
                  </div>
                </Bounce>
              </Col>
              <Col sm={5} className="sr-rightCol">
                <Bounce left>
                  <img
                    src="https://i.postimg.cc/fW8gBGng/png-20220720-083216-0000.png"
                    alt=""
                    style={{
                      height: "70vh",
                    }}
                  ></img>
                </Bounce>
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>

      {/* Fourth ITEM of Carousel ------------------------4-------------------------- */}

      <Carousel.Item>
        <div
          className="sr-fixedheight sr-sliderhard"
          style={{
            background: "url('https://i.postimg.cc/L5qm0V1t/slide4-bg.jpg')",
          }}
        >
          <Container>
            {/* Background Images */}
            <Bounce left>
              <div
                className="sr-smallbannerimages"
                style={{
                  marginLeft: "50%",
                  position: "absolute",
                  left: "350px",
                  top: "15px",
                }}
              >
                <img
                  src="https://i.postimg.cc/brnKtVnB/png-20220720-082327-0000-724x1024.png"
                  alt=""
                  className="sr-imgBox bounce-2"
                  height={140}
                  width={100}
                ></img>
              </div>
            </Bounce>

            <Bounce left>
              <div
                className="sr-smallbannerimages"
                style={{
                  marginLeft: "40%",
                  position: "absolute",
                  bottom: "50px",
                  right: "600px",
                  top: "60px",
                }}
              >
                <img
                  src="https://i.postimg.cc/59ZJ2Lzr/object-turntable-1-50.png"
                  alt=""
                  className="sr-imgBox bounce-2"
                  height={240}
                  width={200}
                ></img>
              </div>
            </Bounce>

            <Bounce left>
              <div
                className="sr-smallbannerimages"
                style={{
                  marginLeft: "20%",
                  position: "absolute",
                  bottom: "10px",
                  right: "1050px",
                  top: "150px",
                }}
              >
                <img
                  src="https://i.postimg.cc/HLtR07VT/object-vinyl-1-25.png"
                  alt=""
                  className="sr-imgBox bounce-2"
                  height={140}
                  width={100}
                ></img>
              </div>
            </Bounce>

            {/* Main content */}
            <Row className="sr-leftcomp">
              <Col sm={3}>
                <Bounce right>
                  <div className="sr-leftCol">
                    <h2 className="sr-leftcomp-sub-legendText">
                      <em>AND</em>
                    </h2>
                    <h1 className="sr-legendText">
                      <em>
                        MUCH MUCH <br /> MORE
                      </em>
                    </h1>
                    <Button className="sr-bookBtn" variant="light">
                      <b>CHECK OUR TOP CATEGORIES</b>
                    </Button>
                  </div>
                </Bounce>
              </Col>
              <Col sm={2} className="sr-rightCol-image3">
                <Bounce left>
                  <img
                    src="https://i.postimg.cc/FRVSKVpY/New-DJ.png"
                    alt=""
                    style={
                      {
                        // height: "30%",
                      }
                    }
                  ></img>
                </Bounce>
              </Col>

              <Col sm={3} className="sr-rightCol sr-imgBox bounce-3">
                <Bounce left>
                  <img
                    src="https://i.postimg.cc/FRHr0vFn/png-20220720-084852-0000-768x1086.png"
                    alt=""
                    style={
                      {
                        // height: "30%",
                      }
                    }
                  ></img>
                </Bounce>
              </Col>

              <Col sm={3} className="sr-rightCol sr-imgBox bounce-3">
                <Bounce left>
                  <img
                    src="https://i.postimg.cc/Y21JRGnb/20220805-102449-0000.png"
                    alt=""
                    style={
                      {
                        // height: "30%",
                      }
                    }
                  ></img>
                </Bounce>
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
