import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Modal, Button } from "react-bootstrap";

import Grid from "assets/icons/grid.svg";
import ArrowUp from "assets/icons/arrow-up.svg";
import Plus from "assets/icons/plus.svg";
import User from "assets/icons/user.svg";
import Logout from "assets/icons/log-out.svg";

export default function Sidebar() {
  const router = useRouter();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleTopUp = () => {
    handleShow();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} className="modal__topup">
        <div className="modal__topup--content">
          <Modal.Header
            closeButton
            style={{ borderBottom: "none", paddingBottom: "0" }}
          >
            <h5>Topup</h5>
          </Modal.Header>
          <Modal.Body style={{ paddingTop: "0" }}>
            <p style={{ fontSize: "14px", color: "#3A3D4299" }}>
              Enter the amount of money, and click <br /> submit.
            </p>
            <input
              className="topup__amount"
              placeholder="___________________"
            />
          </Modal.Body>
          <Modal.Footer style={{ borderTop: "none" }}>
            <button className="modal__topup--button">Submit</button>
          </Modal.Footer>
        </div>
      </Modal>

      <div className="sidebar">
        <div
          className="d-flex sidebar__item"
          onClick={() => router.push("/home/dashboard")}
        >
          <span>
            <Image src={Grid} alt="grid" />
          </span>
          <h5>Dashboard</h5>
        </div>
        <div
          className="d-flex sidebar__item"
          onClick={() => router.push("/home/transfer")}
        >
          <span>
            <Image src={ArrowUp} alt="transfer" />
          </span>
          <h5>Transfer</h5>
        </div>
        <div className="d-flex sidebar__item" onClick={() => handleTopUp()}>
          <span>
            <Image src={Plus} alt="top up" />
          </span>
          <h5>Top Up</h5>
        </div>
        <div
          className="d-flex sidebar__item"
          onClick={() => router.push("/home/profile")}
        >
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
