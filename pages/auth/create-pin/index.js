import React, { useState } from "react";

import Layout from "components/Layout";
import AuthLayout from "components/AuthLayout";

export default function CreatePin() {
  const [pin, setPin] = useState({});

  const addPin = (event) => {
    if (event.target.value) {
      const nextSibling = document.getElementById(
        `pin-${parseInt(event.target.name, 10) + 1}`
      );

      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }

    setPin({ ...pin, [`pin${event.target.name}`]: event.target.value });
  };

  const handleSubmit = () => {
    const allPin =
      pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;
    console.log(allPin);
  };
  return (
    <Layout title="Zwallet | Create PIN">
      <div className="row">
        <div className="col-md-7 col-sm-0 d-none d-md-inline-block image__auth__section">
          <AuthLayout />
        </div>
        <div className="col-md-5 col-sm-12 form__auth__section">
          <h2>
            Secure Your Account, Your Wallet, <br />
            and Your Data With 6 Digits PIN <br />
            That You Created Yourself.
          </h2>
          <p>
            Create 6 digits pin to secure all your money and your data in <br />
            Zwallet app. Keep it secret and dont tell anyone about your <br />
            Zwallet account password and the PIN.
          </p>
          <div className="form__pin">
            <div className="input__pin my-5">
              <input
                className="pinForm"
                placeholder="__"
                maxLength="1"
                onChange={(event) => addPin(event)}
                name="1"
                id="pin-1"
              />
              <input
                className="pinForm"
                placeholder="__"
                maxLength="1"
                onChange={(event) => addPin(event)}
                name="2"
                id="pin-2"
              />
              <input
                className="pinForm"
                placeholder="__"
                maxLength="1"
                onChange={(event) => addPin(event)}
                name="3"
                id="pin-3"
              />
              <input
                className="pinForm"
                placeholder="__"
                maxLength="1"
                onChange={(event) => addPin(event)}
                name="4"
                id="pin-4"
              />
              <input
                className="pinForm"
                placeholder="__"
                maxLength="1"
                onChange={(event) => addPin(event)}
                name="5"
                id="pin-5"
              />
              <input
                className="pinForm"
                placeholder="__"
                maxLength="1"
                onChange={(event) => addPin(event)}
                name="6"
                id="pin-6"
              />
            </div>
            <div className="form__button">
              <button
                className="btn btn-disable form__input--button"
                onClick={handleSubmit}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
