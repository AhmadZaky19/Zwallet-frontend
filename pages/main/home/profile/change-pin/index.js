import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "components/module/Navbar";
import Footer from "components/module/Footer";
import Sidebar from "components/module/Sidebar";
import Layout from "components/Layout";

export default function ChangePin(props) {
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
    <Layout title="Profile | Change PIN">
      <Navbar />
      <div className="bg__main">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9 col-12">
              <div className="edit__personal__info">
                <div className="d-flex edit__personal__info--title">
                  <h5>Change PIN</h5>
                </div>
                <div className="row mt-3">
                  <p style={{ color: "#6A6A6A" }}>
                    Enter your current 6 digits Zwallet PIN below to <br />
                    continue to the next steps.
                  </p>
                </div>
                <div className="form__changePin">
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
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
