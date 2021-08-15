import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Scroll({ showBelow }) {
  const [show, setShow] = useState(showBelow ? false : true);

  const scrollHandler = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };
  const clickHandler = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", scrollHandler);
      return () => window.removeEventListener("scroll", scrollHandler);
    }
  });
  return (
    <>
      {show && (
        <button
          href="#"
          onClick={clickHandler}
          style={{
            position: "fixed",
            zIndex: "100",
            right: "20px",
            bottom: "20px",
            backgroundColor: "gray",
            transition: " all 1s",
            color: "white",
            borderRadius: "10px",
            fontSize: "1.5rem",
            cursor: "pointer",
            padding: "5px 15px",

            "&:hover": {
              backgroundColor: "#ff324d",
              transition: "0.7s",
            },
          }}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
