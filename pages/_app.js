import lozad from "lozad";
import "../styles/globals.css";
import "../styles/sass/application.scss";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Lozad observer
    const observer = lozad('.lozad', {
      loaded: (el) => {
        console.log("Loaded element:", el); // Debug log
  
        // Check if the element is a DIV with the `data-src` attribute
        if (el.tagName === "DIV" && el.hasAttribute("data-src")) {
          // Dynamically set the background image using `data-src`
          el.style.backgroundImage = `url(${el.getAttribute("data-src")})`;
        }
      },
    });
  
    // Start observing elements with the `.lozad` class
    observer.observe();
  
    // Optional: Scroll event for debugging or additional behavior
    const handleScroll = (event) => {
      console.log("Scrolling detected:", event);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
  
    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect(); // Stop observing
    };
  }, []);
  

  return <Component {...pageProps} />;
}
