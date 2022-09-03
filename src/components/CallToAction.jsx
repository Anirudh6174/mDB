import React from "react";
import { Button } from "react-bootstrap";

function CallToAction() {
  return (
    <div className="hp-call-to-action">
      <div className="hp-call-to-action-wrapper">
        <div className="hp-call-to-action-left-panel">
          <h1>ARE YOU A BUISNESS OWNER OR CORPORATE?</h1>
          <div className="hp-call-to-action-button-wrapper">
            <Button className="hp-call-to-action-button">
              Business owners click here
            </Button>
            <Button className="hp-call-to-action-button">
              Corporates click here
            </Button>
          </div>
        </div>
        <div className="hp-call-to-action-right-panel">
          <img src="https://i.postimg.cc/Pf4wYfXT/class05.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
