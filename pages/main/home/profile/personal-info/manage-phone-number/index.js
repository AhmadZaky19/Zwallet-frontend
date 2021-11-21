import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "components/module/Navbar";
import Footer from "components/module/Footer";
import Sidebar from "components/module/Sidebar";
import Layout from "components/Layout";

import Trash from "assets/icons/trash.svg";

export default function ManagePhoneNumber(props) {
  return (
    <Layout title="Profile | Manage Phone Number">
      <Navbar />
      <div className="bg__main">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9 col-12">
              <div className="manage__phone__number">
                <div className="d-flex edit__personal__info--title">
                  <h5>Manage Phone Number</h5>
                </div>
                <div className="row mt-3">
                  <p style={{ color: "#6A6A6A" }}>
                    You can only delete the phone number and then <br />
                    you must add another phone number
                  </p>
                </div>
                <div className="row mt-5 personal__info--phone">
                  <div className="col-10">
                    <p>primary</p>
                    <h5>+62 813-9387-7946</h5>
                  </div>
                  <div className="col-2 d-flex justify-content-end">
                    <Image src={Trash} alt="trash" />
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
