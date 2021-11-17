import React from "react";
import Image from "next/image";

import zwallet from "assets/img/zwalletWhite.png";
import image from "assets/img/authImage.png";
import background from "assets/img/authBg.png";

export default function LayoutAuth() {
  return (
    <>
      <div className="layout">
        <div className="layout__auth--background">
          <Image src={background} alt="background" />
        </div>
        <div className="layout__auth">
          <Image src={zwallet} alt="logo" />
          <div className="layout__auth--image overlay d-flex justify-content-center">
            <Image src={image} alt="imageApp" />
          </div>

          <h2>App that Covering Banking Needs.</h2>
          <p>
            Zwallet is an application that focussing in banking needs for all
            users <br /> in the world. Always updated and always following world
            trends.
            <br /> 5000+ users registered in Zwallet everyday with worldwide{" "}
            <br /> users coverage.
          </p>
        </div>
      </div>
    </>
  );
}
