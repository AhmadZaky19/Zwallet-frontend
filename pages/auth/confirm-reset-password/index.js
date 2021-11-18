import React from "react";
import Image from "next/image";

import Layout from "components/Layout";
import AuthLayout from "components/AuthLayout";

import Lock from "assets/icons/lock.svg";

export default function ConfirmResetPassword() {
  return (
    <Layout title="Confirm Reset Password">
      <div className="row">
        <div className="col-md-7 col-sm-0 d-none d-md-inline-block image__auth__section">
          <AuthLayout />
        </div>
        <div className="col-md-5 col-sm-12 form__auth__section">
          <h2>
            Did You Forgot Your Password? <br />
            Dont Worry, You Can Reset Your <br />
            Password In a Minutes
          </h2>
          <p>
            To reset your password, you must type your e-mail and we <br /> will
            send a link to your email and you will be directed to the <br />
            reset password screens.
          </p>
          <form className="form__input">
            <div className="form__input--group">
              <div className="form__input--icon">
                <Image src={Lock} alt="mail" />
              </div>
              <input
                type="password"
                name="password"
                placeholder="Create new password"
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
                placeholder="Confirm new password"
                className="form__input--item"
              />
            </div>
            <div className="form__button">
              <button
                type="submit"
                className="btn btn-primary form__input--button"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
