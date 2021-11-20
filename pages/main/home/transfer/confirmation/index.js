import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "components/module/Navbar";
import Footer from "components/module/Footer";
import Sidebar from "components/module/Sidebar";
import Layout from "components/Layout";

import User from "assets/img/user_icon.png";

export default function Confirmation(props) {
  return (
    <Layout title="Transfer | Confirm">
      <Navbar />
      <div className="bg__main">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9 col-12">
              <div className="transfer__receiver__amount">
                <div className="transfer__confirmation--title">
                  <h5>Transfer To</h5>
                </div>
                <div className="row mt-4 receiver__item--detail">
                  <div className="col-2 image__contact">
                    <Image src={User} alt="user" />
                  </div>
                  <div className="col-10 mt-1">
                    <h6>Samuel Suhi</h6>
                    <p>+62 813-8492-9994</p>
                  </div>
                </div>
                <div className="transfer__confirmation--title mt-5">
                  <h5>Details</h5>
                </div>
                <div className="row mt-4 receiver__item--detail">
                  <div className="mt-1">
                    <p>Amount</p>
                    <h5>Rp100.000</h5>
                  </div>
                </div>
                <div className="row mt-4 receiver__item--detail">
                  <div className="mt-1">
                    <p>Balance Left</p>
                    <h5>Rp20.000</h5>
                  </div>
                </div>
                <div className="row mt-4 receiver__item--detail">
                  <div className="mt-1">
                    <p>Date & Time</p>
                    <h5>May 11, 2020 - 12.20</h5>
                  </div>
                </div>
                <div className="row mt-4 receiver__item--detail">
                  <div className="mt-1">
                    <p>Notes</p>
                    <h5>For buying some socks</h5>
                  </div>
                </div>
                <div className="form__amount--button">
                  <button
                    type="button"
                    className="btn btn-primary mt-4 continue"
                  >
                    Continue
                  </button>
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
