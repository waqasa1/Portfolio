// src/containers/topbutton/Top.js (or wherever it is)

import React, { useEffect } from "react";
import "./Top.scss";

export default function Top() {
  useEffect(() => {
    const scrollFunction = () => {
      const topButton = document.getElementById("topButton");

      // Safety check: if button doesn't exist (e.g., on ProjectDetail page), do nothing
      if (!topButton) return;

      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        topButton.style.visibility = "visible";
      } else {
        topButton.style.visibility = "hidden";
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", scrollFunction);

    // Initial check on mount
    scrollFunction();

    // Cleanup: remove listener when component unmounts
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Optional fallback for older browsers
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  };

  return (
    <button onClick={scrollToTop} id="topButton" title="Go to top">
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}