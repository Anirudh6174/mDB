import React from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";

function Form() {
  return (
    <div className="hp-form">
      <div className="hp-form-wrapper">
        <div className="hp-form-left-panel">
          <img src="https://i.postimg.cc/jdSJXV2N/class03.png" alt="" />
        </div>
        <div className="hp-form-right-panel">
          <h1>CALLBACK FORM</h1>
          <span className="p-float-label">
            <InputText id="username" onChange={(e) => console.log(e)} />
            <label htmlFor="username">Name</label>
          </span>
          <br />
          <span className="p-float-label">
            <InputText id="username" onChange={(e) => console.log(e)} />
            <label htmlFor="username">Email</label>
          </span>
          <br />
          <span className="p-float-label">
            <InputNumber id="username" onChange={(e) => console.log(e)} />
            <label htmlFor="username">Phone Number</label>
          </span>
          <br />
          <button>Get in Touch</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
