import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import Header from "./../component/Header";
import { Container, Grid } from "@mui/material";
import Footer from "../component/footer";
import HeroSection from "../component/heroSection";
import About from "../component/home/about";
import Experties from "../component/home/Experties";
import Process from "../component/home/Process";


import styles from "../styles/sass/components/Home.module.scss";
import Portfolio from "../component/home/Portfolio";
import Mission from "../component/home/Mission";
import ContactForm from "../component/home/Contact";
import BlogSection from "../component/home/BlogSection";


export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Techoceans",
    "image": "https://techoceans.vercel.app/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1234 Ocean Street",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "postalCode": "75500",
      "addressCountry": "PK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-300-1234567",
      "contactType": "Customer Service"
    },
    "url": "https://techoceans.vercel.app",
  };
  return (
    <>
      <Head>
      <title>Techoceans - web development | mobile app development | digital marketting | mobile app and website seo </title>
        <meta
         name="description"
         content="Techoceans will do mobile app, website development and digital marketing seo in our all over the world"
         />
          <meta name="description" content="Web development, mobile app development, SEO services for your digital growth." />
          <meta name="keywords" content="web development, mobile app development, SEO services, digital marketing" />
          <meta name="author" content="Techoceans" />
          
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </Head>
      <section className= {styles.Herosection + " bg-cover bg-center bg-norepeat"} style={{ backgroundImage: "url(/images/banner-home.png)"}}>
        <Header/>
        <HeroSection
          Heading={"Transform Your Digital Presence"} 
          text={"From innovative web design to powerful mobile apps and SEO strategies, we create solutions that drive results and elevate your brand."}
          
        />

      </section>
      <BlogSection />
      {/* whatsapp */}
      {/* href={"https://wa.me/03472696576?text=please%20visit%20our%20facebook%20page%20for%20more%20detail%20you%20want%20to%20purchase%20anything%20just%20message%20inbox%20on%20whatsapp%20chat%20or%20call%20we%20will%20response%20quick%0Ahttps://www.facebook.com/profile.php?id=61568919442130"} */}
        <Experties />
        <Process />
        <Portfolio />
      <About  />
      <Mission/>
      <ContactForm />

      <Footer/>
    </>
  );
}
