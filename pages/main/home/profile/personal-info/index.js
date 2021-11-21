import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "components/module/Navbar";
import Footer from "components/module/Footer";
import Sidebar from "components/module/Sidebar";
import Layout from "components/Layout";

export default function PersonalInfo(props) {
  return (
    <Layout title="Profile | Personal Info">
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
                  <h5>Personal Information</h5>
                </div>
                <div className="row mt-3">
                  <p style={{ color: "#6A6A6A" }}>
                    We got your personal information from the sign <br />
                    up process. If you want to make changes on <br />
                    your information, contact our support.
                  </p>
                </div>
                <div className="row mt-3 personal__info">
                  <p>First Name</p>
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="row mt-3 personal__info">
                  <p>Last Name</p>
                  <input type="text" placeholder="Last Name" />
                </div>
                <div className="row mt-3 personal__info">
                  <p>Verified E-mail</p>
                  <h5>pewdiepie@gmail.com</h5>
                </div>
                <div className="row mt-3 personal__info--phone">
                  <div className="col-10">
                    <p>Phone Number</p>
                    <h5>+62 813-9387-7946</h5>
                  </div>
                  <div className="col-2 mt-4 d-flex justify-content-end">
                    <Link href="#">Manage</Link>
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
