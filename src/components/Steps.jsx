import React from "react";
import Button from "react-bootstrap/Button";

function Steps() {
  return (
    <div className="hp-steps">
      <div className="hp-steps-wrapper">
        <div className="hp-step1">
          <div className="hp-step1-left-panel">
            <h2 className="hp-step1-left-panel-heading">STEP 1</h2>
            <br />
            <p>SELECT YOUR ARTIST</p>
            <h2>
              CHOOSE ARTIST
              <br />
              TYPE, LOCATION, DATE <br />
              AND BUDGET
            </h2>
            <p className="hp-step1-left-panel-details">
              myDurbar.com offers you many types of artists available in your
              <br />
              area within your budget
            </p>
          </div>
          <div className="hp-step1-right-panel">
            <div className="hp-step1-right-panel-image-wrapper">
              <img
                className="hp-step1-right-panel-image"
                src="https://i.postimg.cc/KzCtkrPS/png-20220716-220152-0000.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="hp-step2">
          <div className="hp-step2-left-panel-image-wrapper">
            <img
              className="hp-step2-left-panel-image"
              src="https://i.postimg.cc/vTxZm6st/png-20220720-084117-0000.png"
              alt=""
            />
          </div>
          <div className="hp-step2-right-panel">
            <h2 className="hp-step2-right-panel-heading">STEP 2</h2>
            <h2 className="hp-step2-right-panel-subheading">
              EXPLORE VERIFIED <br />
              RESULTS AND BOOK
            </h2>
            <p className="hp-step2-right-panel-details">
              Browse through a list of verified artists generated by our
              next-generation
              <br />
              AI Engine, pick the artist of your choice and book your Durbar
              experience!
            </p>
            <div className="hp-step2-right-panel-button-wrapper">
              <button
                variant="outline-warning"
                className="step-orangeBtn"
                href="/bookartist"
              >
                BOOK NOW <i className="pi pi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
