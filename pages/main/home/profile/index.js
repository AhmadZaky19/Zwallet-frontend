import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "components/module/Navbar";
import Footer from "components/module/Footer";
import Sidebar from "components/module/Sidebar";
import Layout from "components/Layout";

import User from "assets/img/user_icon.png";
import Zaky from "assets/img/Ahmad Zaky.jpg";
import Pen from "assets/icons/pen.svg";
import ArrowRight from "assets/icons/arrow-right.svg";

export default function Profile(props) {
  const router = useRouter();
  return (
    <Layout title="Zwallet | Profile">
      <Navbar />
      <div className="bg__main">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9 col-12 user__profile">
              <div className="user__profile--section">
                <div className="d-flex justify-content-center">
                  <div className="user__profile--image">
                    <Image
                      src={Zaky}
                      alt="user"
                      className="user__profile--image--border"
                    />
                  </div>
                </div>
                <p className="d-flex justify-content-center edit__image">
                  {" "}
                  <div className="edit__image--icon">
                    <Image src={Pen} alt="pen" />
                  </div>{" "}
                  Edit
                </p>
                <h4 className="d-flex justify-content-center">
                  Robert Chandler
                </h4>
                <p className="d-flex justify-content-center">
                  +62 813-9387-7946
                </p>
                <div className="user__profile--menu d-flex justify-content-center">
                  <div
                    className="card user__profile--menu--list"
                    onClick={() => router.push("profile/personal-info")}
                  >
                    <div className="card-body">
                      <h6 className="mt-1">Personal Information</h6>{" "}
                      <div className="user__profile--menu--icon">
                        <Image src={ArrowRight} alt="pen" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="card user__profile--menu--list"
                    onClick={() => router.push("profile/change-password")}
                  >
                    <div className="card-body">
                      <h6 className="mt-1">Change Password</h6>{" "}
                      <div className="user__profile--menu--icon">
                        <Image src={ArrowRight} alt="pen" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="card user__profile--menu--list"
                    onClick={() => router.push("profile/change-pin")}
                  >
                    <div className="card-body">
                      <h6 className="mt-1">Change PIN</h6>{" "}
                      <div className="user__profile--menu--icon">
                        <Image src={ArrowRight} alt="pen" />
                      </div>
                    </div>
                  </div>
                  <div className="card user__profile--menu--list">
                    <div className="card-body">
                      <h6 className="mt-1">Logout</h6>{" "}
                    </div>
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
