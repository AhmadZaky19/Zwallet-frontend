import React from "react";
import Image from "next/image";

import Layout from "components/Layout";
import AuthLayout from "components/AuthLayout";

import Success from "assets/img/success.png";

export default function PinSuccess() {
  return (
    <Layout title="Create PIN">
      <div className="row">
        <div className="col-md-7 col-sm-0 d-none d-md-inline-block image__auth__section">
          <AuthLayout />
        </div>
        <div className="col-md-5 col-sm-12 form__auth__section">
          <div className="mb-5">
            <Image src={Success} alt="success" />
          </div>
          <h2>Your PIN Was Successfully Created</h2>
          <p>
            Your PIN was successfully created and you can now access <br />
            all the features in Zwallet. Login to your new account and <br />
            start exploring
          </p>
          <div className="form__button">
            <button className="btn btn-primary form__input--button--active">
              Login Now
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
