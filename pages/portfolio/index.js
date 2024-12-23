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
      <title>Techoceans Portfolio: Showcasing Our Web and Mobile App Development Projects</title>
      <meta name="description" content="Explore Techoceans portfolio featuring successful web and mobile app development projects, including Metastore Dashboard, SmartBenefits website, and Dow University of Health Sciences platform."/>


        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className= {styles.Herosection + " bg-cover bg-center bg-norepeat"} style={{ backgroundImage: "url(/images/banner-home.png)"}}>
        <Header/>
        <HeroSection
          Heading={"Showcasing Our Digital Expertise"} 
          text={"From stunning designs to seamless functionality, our portfolio highlights the diverse range of solutions we’ve delivered for our clients."}
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
