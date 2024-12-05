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


export default function Home() {
  return (
    <>
      <Head>
      <title>web development | mobile app development | digital marketting | mobile app and website seo </title>
        <meta
         name="description"
         content="we do mobile app, website development and digital marketing seo in our all over the world"
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
