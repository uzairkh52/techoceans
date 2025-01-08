import lozad from "lozad";
import "../styles/globals.css";
import "../styles/sass/application.scss";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Lozad observer
    const observer = lozad(".lozad", {
      loaded: (el) => {
        console.log("Loaded element:", el); // Debug log
        if (el.tagName === "DIV" && el.hasAttribute("data-src")) {
          el.style.backgroundImage = `url(${el.getAttribute("data-src")})`;
        }
      },
    });

    // Start observing
    observer.observe();

    return () => {
      // No need for `observer.disconnect` as Lozad handles it automatically
    };
  }, []);

  return <Component {...pageProps} />;
}
