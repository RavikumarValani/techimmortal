"use client";
import React, { useState, useEffect } from "react";

const ContactMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(showMenu ? false : true);
  };

  return (
    <div className="intercom-wrapper sm:block hidden">
      <div className="intercom-btn">
        <span
          className="intercom-icon-style intercom-icon-position"
          onClick={toggleMenu}
        >
          <img
            className="img-fluid lazy"
            src="/intercom-icon.svg"
            alt="intercom-icon"
          ></img>
        </span>
      </div>

      <div className={`navPanel ${showMenu ? "active" : ""}`}>
        <div className="link link1">
          <figure className="bg-white">
            <a href="tel:+918700364145">
              <img
                className="img-fluid lazy"
                src="/nav-callback.svg"
                alt="Callback"
              />
            </a>
          </figure>
          {/* <span>Call Us</span> */}
        </div>
        <div className="link link2">
          <figure className="bg-white">
            <a href="mailto:contact@immortalgroups.com">
              <img className="img-fluid lazy" src="/email.svg" alt="Mail" />
            </a>
          </figure>
          {/* <span>Mail Us</span> */}
        </div>
        <div className="link link3">
          <figure className="bg-white">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=918700364145&amp;text=Hi, I Want To Know About Budget"
            >
              <img
                className="img-fluid lazy"
                src="/nav-whatsup.svg"
                alt="WhatsApp"
              />
            </a>
          </figure>
          {/* <span>Whatsapp</span> */}
        </div>
        <div className="link link4">
          <figure className="bg-gray-500">
            <div onClick={toggleMenu}>
              {/* <img className="img-fluid lazy" src="/nav-whatsup.svg" alt="WhatsApp"/> */}
              <i className="fal fa-times text-white text-2xl"></i>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};
export default ContactMenu;
