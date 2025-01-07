import lozad from "lozad";
import "../styles/globals.css";
import "../styles/sass/application.scss";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Handle scroll event with passive listener
    const handleScroll = (event) => {
      console.log('Scrolling detected:', event);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initialize Lozad globally
    const observer = lozad('.lozad'); // Target all elements with 'lozad' class
    observer.observe(); // Start observing

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Observer cleanup (optional, based on lozad use-case)
      // observer.disconnect();
    };
  }, []);


  
  return <Component {...pageProps} />;
}
