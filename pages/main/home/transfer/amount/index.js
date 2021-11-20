import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "components/module/Navbar";
import Footer from "components/module/Footer";
import Sidebar from "components/module/Sidebar";
import Layout from "components/Layout";

import User from "assets/img/user_icon.png";
import Pen from "assets/icons/pen.svg";

export default function Amount(props) {
  return (
    <Layout title="Transfer | Amount">
      <Navbar />
      <div className="bg__main">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9 col-12">
              <div className="transfer__receiver__amount">
                <div className="d-flex transfer__receiver__amount--title">
                  <h5>Transfer Money</h5>
                </div>
                <div className="row mt-4 receiver__item">
                  <div className="col-2 image__contact">
                    <Image src={User} alt="user" />
                  </div>
                  <div className="col-10 mt-1">
                    <h6>Samuel Suhi</h6>
                    <p>+62 813-8492-9994</p>
                  </div>
                </div>
                <div className="row mt-4">
                  <p>
                    Type the amount you want to transfer and then <br />
                    press continue to the next steps.
                  </p>
                  <form className="form__amount">
                    <div className="form__amount--transfer">
                      <input
                        type="text"
                        placeholder="0.00"
                        className="form__amount--input"
                      />
                      <h6>Rp120.000 Available</h6>
                      <div className="form__amount--group">
                        <div className="form__amount--icon">
                          <Image src={Pen} alt="mail" />
                        </div>
                        <input
                          type="text"
                          placeholder="Add some notes"
                          className="form__amount--item"
                        />
                      </div>
                    </div>
                    <div className="form__amount--button">
                      <button
                        type="button"
                        className="btn btn-primary continue"
                      >
                        Continue
                      </button>
                    </div>
                  </form>
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
