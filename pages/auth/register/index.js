import React from "react";
import Link from "next/link";
import Image from "next/image";

import Layout from "components/Layout";
import AuthLayout from "components/AuthLayout";

import Person from "assets/icons/person.svg";
import Mail from "assets/icons/mail.svg";
import Lock from "assets/icons/lock.svg";

export default function Register() {
  return (
    <Layout title="Zwallet | Register">
      <div className="row">
        <div className="col-md-7 col-sm-0 d-none d-md-inline-block image__auth__section">
          <AuthLayout />
        </div>
        <div className="col-md-5 col-sm-12 form__auth__section">
          <h2>
            Start Accessing Banking Needs <br />
            With All Devices and All Platforms <br />
            With 30.000+ Users
          </h2>
          <p>
            Transfering money is eassier than ever, you can access <br />{" "}
            Zwallet wherever you are. Desktop, laptop, mobile phone? <br /> we
            cover all of that for you!
          </p>
          <form className="form__input">
            <div className="form__input--group">
              <div className="form__input--icon">
                <Image src={Person} alt="mail" />
              </div>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                className="form__input--item"
              />
            </div>
            <div className="form__input--group">
              <div className="form__input--icon">
                <Image src={Person} alt="mail" />
              </div>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                className="form__input--item"
              />
            </div>
            <div className="form__input--group">
              <div className="form__input--icon">
                <Image src={Mail} alt="mail" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Enter your e-mail"
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
                placeholder="Enter your password"
                className="form__input--item"
              />
            </div>
            <div className="form__button">
              <button
                type="submit"
                className="btn btn-disable form__input--button"
              >
                Sign Up
              </button>
            </div>
            <div className="register__page">
              <p>
                Already have an account? Let’s{" "}
                <Link href="/auth/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
