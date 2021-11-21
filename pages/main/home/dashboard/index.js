import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "components/module/Navbar";
import Footer from "components/module/Footer";
import Sidebar from "components/module/Sidebar";
import Layout from "components/Layout";
// import axios from "utils/axios";
// import { getDataCookie } from "middleware/authorizationPage";

import ArrowUp from "assets/icons/arrow-up.svg";
import Plus from "assets/icons/plus.svg";
import Income from "assets/icons/arrow-income.svg";
import Expense from "assets/icons/arrow-expense.svg";
import User from "assets/img/user_icon.png";

// Server Side Rendering
// export async function getServerSideProps(context) {
//   console.log("Server Side is Running !");
//   const dataCookie = await getDataCookie(context);
//   if (!dataCookie.isLogin) {
//     return {
//       redirect: {
//         destination: "/auth/login",
//         permanent: false,
//       },
//     };
//   }

//   const response = await axios
//     .get("/user?page=1&limit=2&search=&sort=", {
//       headers: {
//         Authorization: `Bearer ${dataCookie.token}`,
//       },
//     })
//     .then((res) => {
//       return res.data.data;
//     })
//     .catch((err) => {
//       return [];
//     });
//   return {
//     props: { data: response },
//   };
// }

export default function Home(props) {
  // // Client Side Rendering
  // const [data, setData] = useState(props.data);

  // // useEffect(() => {
  // //   getDataUser();
  // // }, []);

  // const getDataUser = () => {
  //   axios
  //     .get("/user?page=1&limit=2&search=&sort=")
  //     .then((res) => {
  //       // console.log(res);
  //       setData(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //     });
  // };
  // // // =========
  // console.log(props);

  return (
    <Layout title="Zwallet | Dashboard">
      <Navbar />
      <div className="bg__main">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9 col-12">
              <div className="row user__balance">
                <div className="col-md-9 user__balance--leftItem">
                  <h6>Balance</h6>
                  <h1>Rp120.000</h1>
                  <p>+62 813-9387-7946</p>
                </div>
                <div className="col-md-3">
                  <button role="button" className="user__balance--rightItem">
                    <span>
                      <Image src={ArrowUp} alt="transfer" />
                    </span>
                    <p>Transfer</p>
                  </button>
                  <button
                    type="button"
                    className="user__balance--rightItem mt-3"
                  >
                    <span>
                      <Image src={Plus} alt="top up" />
                    </span>
                    <p>Top Up</p>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-7 col-12">
                  <div className="row user__summary">
                    <div className="col-md-4">
                      <div className="income">
                        <Image src={Income} alt="income" />
                      </div>
                      <p style={{ color: "#6A6A6A" }}>Income</p>
                      <h4>Rp2.120.000</h4>
                    </div>
                    <div className="col-md-4 offset-md-4">
                      <div className="expense">
                        <Image src={Expense} alt="expense" />
                      </div>
                      <p style={{ color: "#6A6A6A" }}>Expense</p>
                      <h4>Rp1.560.000</h4>
                    </div>
                    <div className="col-12">
                      {" "}
                      <h1>Coming Soon</h1>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-12">
                  <div className="user__transaction">
                    <div className="d-flex user__transaction--title">
                      <h5>Transaction History</h5>
                      <Link href="/home/dashboard/history">See all</Link>
                    </div>
                    <div className="row mt-3">
                      <div className="col-2">
                        <Image src={User} alt="user" />
                      </div>
                      <div className="col-5">
                        <h6>Samuel Suhi</h6>
                        <p>Accept</p>
                      </div>
                      <div className="col-4 offset-1 mt-3 d-flex justify-content-end">
                        <h6>+Rp50.000</h6>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-2">
                        <Image src={User} alt="user" />
                      </div>
                      <div className="col-5">
                        <h6>Samuel Suhi</h6>
                        <p>Accept</p>
                      </div>
                      <div className="col-4 offset-1 mt-3 d-flex justify-content-end">
                        <h6>+Rp50.000</h6>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-2">
                        <Image src={User} alt="user" />
                      </div>
                      <div className="col-5">
                        <h6>Samuel Suhi</h6>
                        <p>Accept</p>
                      </div>
                      <div className="col-4 offset-1 mt-3 d-flex justify-content-end">
                        <h6>+Rp50.000</h6>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-2">
                        <Image src={User} alt="user" />
                      </div>
                      <div className="col-5">
                        <h6>Samuel Suhi</h6>
                        <p>Accept</p>
                      </div>
                      <div className="col-4 offset-1 mt-3 d-flex justify-content-end">
                        <h6>+Rp50.000</h6>
                      </div>
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
