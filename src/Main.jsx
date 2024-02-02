import React from "react";
import ReactGA from "react-ga";
import About from "./components/About";
import Banner from "./components/Banner";
import CallToAction from "./components/CallToAction";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import Forms from "./components/Forms";
import SliderRevo from "./components/SliderRevo";
import Steps from "./components/Steps";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import ArtistForm from "./components/ArtistForm";
import ContactUs from "./components/ContactUs";
import Instrumentalist from "./components/Instrumentalist";
import Maintenance from "../src/assets/Maintenance.png";

export default function Main() {
  const TRACKING_ID = "384933752";
  ReactGA.initialize("384933752");
  ReactGA.pageview(window.location.pathname + window.location.search);
  const [modalShow, setModalShow] = useState(true);
  return (
    <>
      {/* <Modal
        size="lg"
        show={modalShow}
        enforceFocus="true"
        onHide={() => setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered="true"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            myDurbar Presents GODS OF ROCK - Mega Rock tribute by Trouble Clef
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col>
                <br />
                <br />
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/O7fOIBL0uyU?si=18TL3QdV-_5alrzL"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  title="video"
                ></iframe>
                <p>
                  Saturday, 7th October, 9:00 PM <br />
                  Hard Rock Cafe Delhi,Janpath, Connaught Place, New Delhi
                  110001
                </p>
                <Button
                  variant="outline-warning"
                  href="https://mydurbar.mojo.page/7-oct-gods-of-rock-tribute-trouble-clef"
                  target="_blank"
                >
                  BOOK NOW
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}

      <Header />

      <SliderRevo />
      <About />
      <Steps />
      <Categories />
      <CallToAction />
      {/* <Featured /> */}
      <Banner />
      <Forms />
      {/* <div className="hp-footer-info-left">
        <img alt="" src={Maintenance} />
      </div> */}

      <Footer />
    </>
  );
}
