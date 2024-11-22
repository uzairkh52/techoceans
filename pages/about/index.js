import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "./../../styles/Home.module.css";
import Link from "next/link";
import Header from "./../../component/Header";

const About =()=> {
  return (
    <>
    <Header/>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>techoceans offer best mobile and web app service</title>
        <meta
         name="description"
         content="techoceans offer best mobile and web app service for our all over the world"
         />
      </Head>
      <div
        
      >
        <main className={styles.main}>
        <img style={{width:400}}  src="/images/logo.jpg" />
        <h1>New website Lounching soon</h1>
        

          <div className={styles.ctas}>
          <div className="flexbox jc-center flex-center flex" style={{flexDirection:"column"}}>

            <h4 className="align-center" >Explore more</h4> 
            <p style={{textAlign:"center", fontSize:14}}>please visit our facebook page for more detail if you want to purchase anything just message our inbox on whatsapp chat or call. we will response quick</p>
            <Link
            className={
              styles.enterbutton + " aa btn button ui btn-primary"
            }
            href={"/"}
          >
            back to home
          </Link>
          </div>
            
            <ul style={{display:"flex", justifyContent:"center", listStyle:"none", gap:40, marginTop:50}}>
              <li>
                <a target="_blank" href="https://www.facebook.com/profile.php?id=61568919442130"> <img style={{width:50}} src="/images/fb.svg" /></a>
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

export default About;