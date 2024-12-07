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


export default function ContactPage() {
  return (
    <>
      <Head>
      <title>Get in Touch | Techoceans</title>
        <meta
         name="description"
         content="Have a project in mind? Whether you need a custom website, a powerful mobile app, and digital marketing seo for your project, our team is here to help. Contact us today to start your journey toward success!"
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
      <ContactForm />
      <About  />
      
      <Footer/>
    </>
  );
}
