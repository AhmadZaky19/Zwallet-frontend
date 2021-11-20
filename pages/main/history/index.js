import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "components/module/Navbar";
import Footer from "components/module/Footer";
import Sidebar from "components/module/Sidebar";
import Layout from "components/Layout";

import User from "assets/img/user_icon.png";

export default function History(props) {
  return (
    <Layout title="History">
      <Navbar />
      <div className="bg__main">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9 col-12">
              <div className="user__history">
                <div className="d-flex user__history--title">
                  <div className="col-10">
                    <h5>Transaction History</h5>
                  </div>
                  <div className="col-2">
                    <select
                      className="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option selected>--Select Filter--</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-2 image__contact">
                    <Image src={User} alt="user" />
                  </div>
                  <div className="col-5 mt-1">
                    <h6>Samuel Suhi</h6>
                    <p>Accept</p>
                  </div>
                  <div className="col-4 offset-1 mt-4 d-flex justify-content-end amount">
                    <h6>+Rp50.000</h6>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-2 image__contact">
                    <Image src={User} alt="user" />
                  </div>
                  <div className="col-5 mt-1">
                    <h6>Samuel Suhi</h6>
                    <p>Accept</p>
                  </div>
                  <div className="col-4 offset-1 mt-4 d-flex justify-content-end amount">
                    <h6>+Rp50.000</h6>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-2 image__contact">
                    <Image src={User} alt="user" />
                  </div>
                  <div className="col-5 mt-1">
                    <h6>Samuel Suhi</h6>
                    <p>Accept</p>
                  </div>
                  <div className="col-4 offset-1 mt-4 d-flex justify-content-end amount">
                    <h6>+Rp50.000</h6>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-2 image__contact">
                    <Image src={User} alt="user" />
                  </div>
                  <div className="col-5 mt-1">
                    <h6>Samuel Suhi</h6>
                    <p>Accept</p>
                  </div>
                  <div className="col-4 offset-1 mt-4 d-flex justify-content-end amount">
                    <h6>+Rp50.000</h6>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-2 image__contact">
                    <Image src={User} alt="user" />
                  </div>
                  <div className="col-5 mt-1">
                    <h6>Samuel Suhi</h6>
                    <p>Accept</p>
                  </div>
                  <div className="col-4 offset-1 mt-4 d-flex justify-content-end amount">
                    <h6>+Rp50.000</h6>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-2 image__contact">
                    <Image src={User} alt="user" />
                  </div>
                  <div className="col-5 mt-1">
                    <h6>Samuel Suhi</h6>
                    <p>Accept</p>
                  </div>
                  <div className="col-4 offset-1 mt-4 d-flex justify-content-end amount">
                    <h6>+Rp50.000</h6>
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
