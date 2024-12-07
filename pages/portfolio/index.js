import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import Header from "./../../component/Header";
import { Container, Grid } from "@mui/material";
import Footer from "../../component/footer";
import HeroSection from "../../component/heroSection";
import About from "../../component/home/about";
import Experties from "../../component/home/Experties";
import Process from "../../component/home/Process";


import styles from "../../styles/sass/components/Home.module.scss";
import Portfolio from "../../component/home/Portfolio";
import Mission from "../../component/home/Mission";
import ContactForm from "../../component/home/Contact";


export default function PortfolioPage() {
  return (
    <>
      <Head>
      <title>"Our Portfolio | Website & Mobile App Development Projects | SEO | mobile app development | Digital Marketting SEO</title>
        <meta
         name="description"
         content="Explore our portfolio of successfully delivered projects. From innovative websites to user-friendly mobile apps, we’ve partnered with businesses across industries to create impactful digital solutions. See how we bring ideas to life with creativity, precision, and expertise."
         />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className= {styles.Herosection + " bg-cover bg-center bg-norepeat"} style={{ backgroundImage: "url(/images/banner-home.png)"}}>
        <Header/>
        <HeroSection
          Heading={"Expert Web and Mobile App &  QA Solutions to grow your business"} 
          text={"Partner with us to create stunning websites and innovative mobile apps according to your business goals, and make any changes to your project. We will do the best for you in an innovative way. rigorously test to ensure flawless digital experiences for your business."} 
          
        />

      </section>
      {/* whatsapp */}
      {/* href={"https://wa.me/03472696576?text=please%20visit%20our%20facebook%20page%20for%20more%20detail%20you%20want%20to%20purchase%20anything%20just%20message%20inbox%20on%20whatsapp%20chat%20or%20call%20we%20will%20response%20quick%0Ahttps://www.facebook.com/profile.php?id=61568919442130"} */}
        
        <Portfolio />
      <ContactForm />

      <Footer/>
    </>
  );
}
