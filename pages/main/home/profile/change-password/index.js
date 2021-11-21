import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "components/module/Navbar";
import Footer from "components/module/Footer";
import Sidebar from "components/module/Sidebar";
import Layout from "components/Layout";

import Lock from "assets/icons/lock.svg";

export default function ChangePassword(props) {
  return (
    <Layout title="Profile | Change Password">
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
                  <h5>Change Password</h5>
                </div>
                <div className="row mt-3">
                  <p style={{ color: "#6A6A6A" }}>
                    You must enter your current password and then <br />
                    type your new password twice.
                  </p>
                </div>
                <form className="form__changePassword">
                  <div className="form__input--group">
                    <div className="form__input--icon">
                      <Image src={Lock} alt="mail" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Current password"
                      className="form__input--item"
                    />
                  </div>
                  <div className="form__input--group">
                    <div className="form__input--icon">
                      <Image src={Lock} alt="mail" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      placeholder="New password"
                      className="form__input--item"
                    />
                  </div>
                  <div className="form__input--group">
                    <div className="form__input--icon">
                      <Image src={Lock} alt="mail" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Repeat new password"
                      className="form__input--item"
                    />
                  </div>
                  <div className="form__button">
                    <button
                      type="submit"
                      className="btn btn-disable form__input--button"
                    >
                      Change Password
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
