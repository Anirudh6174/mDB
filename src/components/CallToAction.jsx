import React from "react";
import { Button } from "react-bootstrap";

function CallToAction() {
  return (
    <div className="hp-call-to-action">
      <div className="hp-call-to-action-wrapper">
        <div className="hp-call-to-action-left-panel">
          <h1>
            ARE YOU A BUSINESS <br />
            OWNER OR CORPORATE?
          </h1>
          <div className="hp-call-to-action-button-wrapper">
            <a href="/bookartist">
              <button className="step-orangeBtn" href="/bookartist">
                BUSINESS OWNERS CLICK HERE
              </button>
            </a>
            <a href="/bookartist">
              <button className="step-orangeBtn" href="/bookartist">
                CORPORATES CLICK HERE
              </button>
            </a>
          </div>
        </div>
        <div className="hp-call-to-action-right-panel">
          <img
            src="https://i.postimg.cc/tCMBkJR7/png-20220720-084654-0000.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
