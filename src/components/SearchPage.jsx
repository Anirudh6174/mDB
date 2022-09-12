import React from "react";
import ReactBootstrap, {
  Container,
  ProgressBar,
  Card,
  Badge,
  Col,
  Button,
  Jumbotron,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import * as dataFile from "../constants/DataFile";
import Spinner from "react-bootstrap/Spinner";
import "./SearchPage.css";
import ArtistProfile from "./ArtistProfile";
import { Calendar } from "primereact/calendar";
import { Bounce } from "react-reveal";
import { Rating } from "primereact/rating";
import Header from "./Header";

export default function SearchPage() {
  let [stepCount, setStepCount] = useState(1);
  let [screen, setScreen] = useState(1);
  const [answerArray, setAnswerArray] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState([]);

  const questionsArray = dataFile.questions;

  const AllArtists = dataFile.dataList;

  const FilteredArtist = AllArtists.filter(
    (e) => e.price <= answerArray[2]
    //  && e.price <= answerArray[3]
  )
    .filter((e) => e.location === answerArray[1])
    .filter((e) => e.category === answerArray[0]);

  // Function that runs onClick of the filter Cards
  function answerClicked(answer) {
    {
      /* 
        Screen 1 : Search Screen
        Screen 2 : Result Screen
        Screen 3 : Artist Profile
        Screen 4 : Loading Screen
      */
    }
    const showResult = () => {
      setScreen(2);
      setAnswerArray([...answerArray, answer]);
    };

    const showNextQuest = () => {
      setAnswerArray([...answerArray, answer]);
      setStepCount(stepCount + 1);
      setScreen(1);
    };

    setScreen(4);

    return new Promise(() => {
      setTimeout(() => {
        stepCount === 4 ? showResult() : showNextQuest();
      }, 700);
    });
  }

  function onBackPressed() {
    console.log("CurrentQuestion---> On Back", CurrentQuestion);

    console.log("stepCount -----------", stepCount);
    console.log("CurrentQuestion", CurrentQuestion);
    setStepCount(stepCount - 1);
    answerArray.pop();
  }

  function onArtistClick(e) {
    setSelectedArtist(e);
    setScreen(3);
  }

  function restFilter() {
    setStepCount(1);
    setScreen(1);
    setAnswerArray([]);
  }

  const CurrentQuestion = questionsArray?.find(
    (question) => question.Count === stepCount
  );

  return (
    <>
      <Header />
      <div className="sp-wrapper">
        {/* Filter Screen */}
        {screen != 3 && (
          <ProgressBar className="laptopProgressBar">
            <ProgressBar
              animated
              striped
              variant="danger"
              now={stepCount * 25}
              label={stepCount * 25 + "%"}
            />
          </ProgressBar>
        )}
        {screen == 1 && (
          <div style={{ height: "100vh", backgroundColor: "#000000" }}>
            {/*------- Header -----  */}
            <div className="sp-heading">
              <h1 className="heading-search">
                {" "}
                Welcome to myDurbar.com Artist Search
              </h1>
              <h3 className="heading-search">
                Select your details to continue the booking.
                <br />
                <Badge bg="danger" text="dark">
                  Step -{stepCount}
                </Badge>
              </h3>
            </div>
            {/*------- Question ----- */}
            <Container>
              <div className="questionHeading">
                <h1 className="heading-search">
                  <Badge bg="light" text="dark">
                    {CurrentQuestion.Question}
                  </Badge>
                </h1>
                {/* <h1 className="heading-search"> 
                  <div className="sp-badgeBackground">
                    {CurrentQuestion.Heading}
                  </div>
                </h1> */}
              </div>
            </Container>
            {/* Options */}
            <Container
              className="sp-optionsCard"
              style={{
                backgroundColor: "#000000",
              }}
            >
              {CurrentQuestion?.Options.map((opt) => (
                <Card
                  key={opt?.id}
                  onClick={() => answerClicked(opt?.value)}
                  variant="dark"
                  style={{
                    width: "15rem",
                    display: "inline-block",
                    margin: "15px",
                    cursor: "pointer",
                  }}
                >
                  {CurrentQuestion?.Count === 3 || 4 ? (
                    <></>
                  ) : (
                    <Card.Img
                      style={{
                        maxHeight: 120,
                      }}
                      variant="top"
                      src={CurrentQuestion?.Thumnail}
                    />
                  )}

                  <Card.Body>
                    {opt?.label === "Choose a date" && (
                      <Calendar
                        style={{ display: "flex", width: "500px" }}
                        onChange={(e) => answerClicked(e.value)}
                        inline
                      />
                    )}
                    <Card.Title>{opt?.label}</Card.Title>
                  </Card.Body>
                </Card>
              ))}
              <br></br>

              {CurrentQuestion.Count === 1 ? (
                <></>
              ) : (
                <Button
                  onClick={() => onBackPressed()}
                  variant="outline-warning"
                  size="md"
                >
                  Go Back
                </Button>
              )}
            </Container>{" "}
          </div>
        )}
        {/* Result Screen */}
        {screen === 2 && (
          <div style={{ padding: 25 }}>
            <Badge id="sp-transparent-badge" bg="dark" text="light">
              <h1 className="sp-heading-in-badge"> Search Results !!</h1>
            </Badge>
            <hr />
            <Button
              variant="success"
              onClick={restFilter}
              style={{ minWidth: 225, margin: 25, padding: 5 }}
            >
              Reset
            </Button>
            <Bounce bottom>
              <br />
              <div className="CustomCardRow">
                {FilteredArtist.length > 0 ? (
                  FilteredArtist.map((e) => {
                    return (
                      <div className="CustomCard">
                        <div className="fourCardStyleNoBorder">
                          <img
                            className="CardImageBlog"
                            onClick={() => onArtistClick(e)}
                            height="220px"
                            width="130px"
                            alt=""
                            src={e.coversrc}
                          />
                          <h5 className="subsCardHeading"> {e.title} </h5>
                          <Badge
                            className="CustomCardBadge"
                            pill
                            bg="dark"
                            text="light "
                          >
                            {e.category}
                          </Badge>
                          <p className="sp-card-genre">{e.genre}</p>
                          <div className="ap-rating">
                            <Rating value={e.rating} cancel={false} stars={5} />
                          </div>
                          <div className="ap-info">
                            <div className="sp-info-wrapper">
                              <div className="ap-infoRow">
                                <span className="pi pi-home">
                                  {" "}
                                  {e.location}
                                </span>
                                <div>
                                  <span className="pi pi-tag">
                                    {" "}
                                    {e.category}
                                  </span>
                                </div>
                              </div>
                              <div className="ap-infoRow">
                                <div>
                                  <span className="pi pi-money-bill">
                                    {" "}
                                    ₹{e.price}
                                  </span>
                                </div>
                                <div>
                                  <span className="pi pi-globe">
                                    {" "}
                                    {e.experience}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Button
                            variant="warning"
                            onClick={() => onArtistClick(e)}
                            size="sm"
                            style={{
                              minWidth: 50,
                              display: "block",
                              alignSelf: "center",
                              margin: 20,
                            }}
                          >
                            Read More
                          </Button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  // Code when no artist is found from the List
                  <>
                    <Card.Img
                      style={{
                        padding: "20px",
                        width: "20vw",
                        height: "50vh",
                      }}
                      variant="top"
                      src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result_still_2x.gif?compress=1&resize=400x300"
                    />
                  </>
                )}
              </div>
            </Bounce>
          </div>
        )}
        {screen === 3 && (
          <>
            <ArtistProfile selectedArtist={selectedArtist} />
          </>
        )}
        {screen === 4 && (
          <>
            <div className="sp-blockUi-wrapper">
              <h1 style={{ padding: 2, color: "white" }}>
                Processing Info.. Please wait.
              </h1>
              <div className="sp-spinner-wrapper">
                <Spinner
                  className="sp-spinner"
                  variant="success"
                  animation="grow"
                  size="xl"
                />
                <Spinner
                  className="sp-spinner"
                  variant="warning"
                  animation="grow"
                  size="xl"
                />
                <Spinner
                  className="sp-spinner"
                  variant="primary"
                  animation="grow"
                  size="xl"
                />
                <Spinner
                  className="sp-spinner"
                  variant="danger"
                  animation="grow"
                  size="xl"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
