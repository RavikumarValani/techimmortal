"use client";
import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btn">
      {showTopBtn && (
        <span className="icon-style icon-position" onClick={goToTop}>
          <i className="fas fa-angle-up m-1 text-2xl"></i>
        </span>
      )}
    </div>
  );
};
export default ScrollToTop;