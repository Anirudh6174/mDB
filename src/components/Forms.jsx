import React from "react";
import Form from "react-bootstrap/Form";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";

function Forms() {
  return (
    <div className="hp-form">
      <div className="hp-form-wrapper">
        <div className="hp-form-left-panel">
          <img
            className="hp-form-left-panel-image"
            src="https://i.postimg.cc/jdSJXV2N/class03.png"
            alt=""
          />
        </div>
        <div className="hp-form-right-panel">
          <h1>QUICK CALLBACK</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="number" placeholder="Enter Phone" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <button
              variant="outline-warning"
              className="step-orangeBtn form-button"
            >
              Get in Touch <i className="pi pi-envelope"></i>
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Forms;
