import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "components/module/Navbar";
import Footer from "components/module/Footer";
import Sidebar from "components/module/Sidebar";
import Layout from "components/Layout";

import Phone from "assets/icons/phone.svg";

export default function AddPhoneNumber(props) {
  return (
    <Layout title="Profile | Add Phone Number">
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
                  <h5>Add Phone Number</h5>
                </div>
                <div className="row mt-3">
                  <p style={{ color: "#6A6A6A" }}>
                    Add at least one phone number for the transfer <br />
                    ID so you can start transfering your money to <br />
                    another user.
                  </p>
                </div>
                <form className="form__addPhoneNumber">
                  <div className="form__input--group">
                    <div className="form__input--icon">
                      <Image src={Phone} alt="mail" />
                    </div>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Enter your phone number"
                      className="form__input--item"
                    />
                  </div>
                  <div className="form__button">
                    <button
                      type="submit"
                      className="btn btn-disable form__input--button"
                    >
                      Add Phone Number
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
