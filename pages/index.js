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
  return (
    <>
      <Head>
      <title>Techoceans - web development | mobile app development | digital marketting | mobile app and website seo </title>
        <meta
         name="description"
         content="Techoceans will do mobile app, website development and digital marketing seo in our all over the world"
         />
      </Head>
      <section className= {styles.Herosection + " bg-cover bg-center bg-norepeat"} style={{ backgroundImage: "url(/images/banner-home.png)"}}>
        <Header/>
        <HeroSection
          Heading={"Techoceans Offer Expert Web and Mobile App, QA & SEO Solutions to grow your business"} 
          text={"Partner with Techoceans to create stunning websites and innovative mobile apps according to your business goals, and make any changes to your project. Techoceans will do the best for you in an innovative way. rigorously test to ensure flawless digital experiences for your business."}
          
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
