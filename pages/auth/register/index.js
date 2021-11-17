import React from "react";
import Link from "next/link";

import Layout from "components/Layout";
import AuthLayout from "components/AuthLayout";

import Person from "assets/icons/person.svg";
import Mail from "assets/icons/mail.svg";
import Lock from "assets/icons/lock.svg";

export default function register() {
  return (
    <Layout title="Register">
      <div className="row">
        <div className="col-lg-7 col-sm-0 d-none d-md-inline-block">
          <AuthLayout />
        </div>
        <div className="col-lg-5 col-sm-12 d-flex justify-content-center layout__login--form">
          <h2>
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </h2>
          <p>
            Transfering money is eassier than ever, you can access Zwallet
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </p>
          <form>
            <input
              img={Person}
              type="text"
              name="firstName"
              placeholder="Enter your firstname"
            />
            <input
              img={Person}
              type="text"
              name="lastName"
              placeholder="Enter your lastname"
            />
            <input
              img={Mail}
              type="email"
              name="email"
              placeholder="Enter your e-mail"
            />
            <input
              img={Lock}
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <div className="form__button">
              <button className="btn btn-primary mt-3">Sign Up</button>
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
