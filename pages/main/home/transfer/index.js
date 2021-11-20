import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "components/module/Navbar";
import Footer from "components/module/Footer";
import Sidebar from "components/module/Sidebar";
import Layout from "components/Layout";

import User from "assets/img/user_icon.png";
import Search from "assets/icons/search.svg";

export default function Transfer(props) {
  return (
    <Layout title="Zwallet | Transfer">
      <Navbar />
      <div className="bg__main">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9 col-12">
              <div className="transfer__receiver">
                <div className="d-flex transfer__receiver--title">
                  <div className="col-10">
                    <h5>Search Receiver</h5>
                  </div>
                </div>
                <div className="col-12">
                  <div className="search__input--group">
                    <div className="search__input--icon">
                      <Image src={Search} alt="mail" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search receiver here"
                      className="search__input--item"
                    />
                  </div>
                </div>
                <div className="row mt-4 receiver__item">
                  <div className="col-2 image__contact">
                    <Image src={User} alt="user" />
                  </div>
                  <div className="col-5 mt-1">
                    <h6>Samuel Suhi</h6>
                    <p>+62 813-8492-9994</p>
                  </div>
                </div>
                <div className="row mt-4 receiver__item">
                  <div className="col-2 image__contact">
                    <Image src={User} alt="user" />
                  </div>
                  <div className="col-5 mt-1">
                    <h6>Samuel Suhi</h6>
                    <p>+62 812-4343-6731</p>
                  </div>
                </div>
                <div className="row mt-4 receiver__item">
                  <div className="col-2 image__contact">
                    <Image src={User} alt="user" />
                  </div>
                  <div className="col-5 mt-1">
                    <h6>Samuel Suhi</h6>
                    <p>+62 811-3452-5252</p>
                  </div>
                </div>
                <div className="row mt-4 receiver__item">
                  <div className="col-2 image__contact">
                    <Image src={User} alt="user" />
                  </div>
                  <div className="col-5 mt-1">
                    <h6>Samuel Suhi</h6>
                    <p>+62 810-4224-4613</p>
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
