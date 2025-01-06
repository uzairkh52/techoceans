import lozad from "lozad";
import "../styles/globals.css";
import "../styles/sass/application.scss";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Lozad globally
    const observer = lozad('.lozad'); // Target all elements with 'lozad' class
    observer.observe(); // Start observing
  }, []);
  return <Component {...pageProps} />;
}
