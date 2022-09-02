import React from "react";
import Button from "react-bootstrap/Button";

function Steps() {
  return (
    <div className="hp-steps">
      <div className="hp-steps-wrapper">
        <div className="hp-step1">
          <div className="hp-step1-left-panel">
            <h2>STEP 1</h2>
            <p>SELECT YOUR ARTIST</p>
            <h2>
              CHOOSE YOUR ARTIST TYPE,
              <br /> LOCATION, DATES AND BUDGET
            </h2>
            <p>
              myDurbar.com offers you many types of artists available in your
              area within your budget
            </p>
          </div>
          <div className="hp-step1-right-panel">
            <div className="hp-step1-right-panel-image-wrapper">
              <img
                className="hp-step1-image"
                src="https://i.postimg.cc/HkDVV3jc/png-20220716-220152-0000.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="hp-step2">
          <div className="hp-step2-left-panel-image-wrapper">
            <img
              src="https://i.postimg.cc/vTxZm6st/png-20220720-084117-0000.png"
              alt=""
            />
          </div>
          <div className="hp-step2-right-panel">
            <h2>STEP 2</h2>

            <h2>
              EXPLORE VERIFIED <br />
              RESULTS AND BOOK
            </h2>
            <p>
              Browse through a list of verified artists generated by our
              next-generation AI Engine,
              <br /> pick the artist of your choice and book your Durbar
              experience!
            </p>
            <Button variant="primary" size="lg">
              Large button
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;