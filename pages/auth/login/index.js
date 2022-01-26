import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Layout from "components/Layout";
import AuthLayout from "components/AuthLayout";

import axios from "utils/axios";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import { getDataCookie } from "middleware/authorizationPage";

import Mail from "assets/icons/mail.svg";
import Lock from "assets/icons/lock.svg";

export async function getServerSideProps(context) {
  const dataCookie = await getDataCookie(context);
  if (dataCookie.isLogin) {
    return {
      redirect: {
        destination: "/main/home",
        permanent: false,
      },
    };
  }
  return { props: {} };
}

export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/login", form)
      .then((res) => {
        console.log(res);
        Cookie.set("token", res.data.data.token);
        Cookie.set("id", res.data.data.id);
        router.push("/main/home/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(form);
  };

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <Layout title="Zwallet | Login">
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
                <Image src={Mail} alt="mail" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Enter your e-mail"
                className="form__input--item"
                onChange={handleChangeText}
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
                onChange={handleChangeText}
              />
            </div>
            <div className="resetPassword__page">
              <Link href="/reset-password">Forgot password?</Link>
            </div>
            <div className="form__button">
              <button
                type="submit"
                className="btn btn-disable form__input--button"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
            <div className="login__page">
              <p>
                Dont have an account? Let’s{" "}
                <Link href="/register">Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
