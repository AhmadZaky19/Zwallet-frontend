import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "assets/img/zwalletPurple.png";
import User from "assets/img/user_icon.png";
import UserDummy from "assets/img/Ahmad Zaky.jpg";
import Bell from "assets/icons/bell.svg";

export default function Navbar() {
  // const router = useRouter();

  // const handleLogout = () => {
  //   console.log("Logout");
  //   router.push("/login");
  // };
  return (
    <>
      <div className="background">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-12 mt-4">
              <div>
                <Image src={Logo} alt="logo2" />
              </div>
            </div>
            <div className="col-md-3 col-12 navbar__right">
              <div className="row">
                <div className="col-md-3 mt-1">
                  <div className="user__image--nav">
                    <Image
                      src={UserDummy}
                      alt="user"
                      className="user__image--nav--border"
                    />
                  </div>
                </div>
                <div className="col-md-7 text-md-start mt-1">
                  <h6>Robert Chandler</h6>
                  <p>+62 8139 3877 7946</p>
                </div>
                <div className="col-md-2 mt-3 text-md-start">
                  <div>
                    <Image src={Bell} alt="user" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
