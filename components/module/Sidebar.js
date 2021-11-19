import React from "react";
import Image from "next/image";

import Grid from "assets/icons/grid.svg";
import ArrowUp from "assets/icons/arrow-up.svg";
import Plus from "assets/icons/plus.svg";
import User from "assets/icons/user.svg";
import Logout from "assets/icons/log-out.svg";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="d-flex sidebar__item">
          <span>
            <Image src={Grid} alt="grid" />
          </span>
          <h5>Dashboard</h5>
        </div>
        <div className="d-flex sidebar__item">
          <span>
            <Image src={ArrowUp} alt="transfer" />
          </span>
          <h5>Transfer</h5>
        </div>
        <div className="d-flex sidebar__item">
          <span>
            <Image src={Plus} alt="top up" />
          </span>
          <h5>Top Up</h5>
        </div>
        <div className="d-flex sidebar__item">
          <span>
            <Image src={User} alt="profile" />
          </span>
          <h5>Profile</h5>
        </div>
        <div className="d-flex sidebar__item--logout">
          <span>
            <Image src={Logout} alt="logout" />
          </span>
          <h5>Logout</h5>
        </div>
      </div>
    </>
  );
}
