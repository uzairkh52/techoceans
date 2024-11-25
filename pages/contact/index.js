import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "./../../styles/Home.module.css";
import Link from "next/link";
import Header from "./../../component/Header";
import { Container, Grid } from "@mui/material";

export default function Contact() {
  return (
    <>
    <Header/>
      <Head>
      <title>web development | mobile app development | digital marketting | mobile app and website seo </title>
        <meta
         name="description"
         content="we do mobile app, website development and digital marketing seo in our all over the world"
         />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="section-padding-xl basecolor1-bg">
        <Container maxWidth="sm">
          <Grid>
            <Grid item xs={12}>
              <h1 className="uppercase align-center white f20  mb-20">Solution For Your Business</h1>
              <h2 className="align-center  white  mb-20">Get a Website or Mobile app to Grow Your Business Fastly</h2>
              <p className="align-center regular white">We are happy to help you. Call us for a free consultation</p>
              <div className="d-flex justify-content-center">
                <Link
                    className={styles.enterbutton + " btn button mr-20 ui btn-white btn-md align-center"}
                    href={"https://wa.me/03472696576?text=please%20visit%20our%20facebook%20page%20for%20more%20detail%20you%20want%20to%20purchase%20anything%20just%20message%20inbox%20on%20whatsapp%20chat%20or%20call%20we%20will%20response%20quick%0Ahttps://www.facebook.com/profile.php?id=61568919442130"}
                  >
                    Back
                  </Link>
                  <Link
                    className={styles.enterbutton + " btn button ui btn-white btn-md align-center"}
                    href={"https://wa.me/03472696576?text=please%20visit%20our%20facebook%20page%20for%20more%20detail%20you%20want%20to%20purchase%20anything%20just%20message%20inbox%20on%20whatsapp%20chat%20or%20call%20we%20will%20response%20quick%0Ahttps://www.facebook.com/profile.php?id=61568919442130"}
                  >
                    Contact Us
                  </Link>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <div
        
      >
        <main className={styles.main}>
        
        

          <div className={styles.ctas}>
          <div className="flexbox jc-center flex-center flex" style={{flexDirection:"column"}}>

            <h4 className="align-center" >Explore more</h4> 
            <p style={{textAlign:"center", fontSize:14}}>please visit our facebook page for more detail if you want to purchase anything just message our inbox on whatsapp chat or call. we will response quick</p>
            <div className="d-flex justify-content-center">
               <Link
               className={
               styles.enterbutton + " aa btn button ui btn-primary"
               }
               href={"/about"}
               >
                  Blog
               </Link>
            </div>
          </div>
            
            <ul style={{display:"flex", justifyContent:"center", listStyle:"none", gap:40, marginTop:50}}>
              <li>
                <a target="_blank" href="https://www.facebook.com/worldwidenews52/"> <img style={{width:50}} src="/images/fb.svg" /></a>
              </li>
              <li>
                <img style={{width:50}} src="/images/insta.svg" />
              </li>
              <li>
              <a href="https://wa.me/03472696576?text=please%20visit%20our%20facebook%20page%20for%20more%20detail%20you%20want%20to%20purchase%20anything%20just%20message%20inbox%20on%20whatsapp%20chat%20or%20call%20we%20will%20response%20quick%0Ahttps://www.facebook.com/profile.php?id=61568919442130">
                <img style={{width:50}} src="/images/whatsapp.svg" />
              </a>
              
              </li>
            </ul>
            </div>
        </main>
        
      </div>
    </>
  );
}
