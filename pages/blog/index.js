import { Box, Card, CardMedia, Container, Grid, } from "@mui/material";
import Link from "next/link";
import styles from "../../styles/sass/components/Home.module.scss";
import api, { BLOG_GET_API } from "../../api/api";
import { useEffect, useState } from "react";


import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import BlogBox from "../../component/home/BlogSection/BlogBox";
import HeroSection from "../../component/heroSection";
import Header from "../../component/Header";
import Head from "next/head";
import Footer from "../../component/footer";

const Blog = (props) => {
   if (typeof window !== "undefined") {
      window.$ = window.jQuery = require("jquery");
    }
    
    const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
      ssr: false,
    });

   const[data, setData]= useState("");
   const getBlog =(e)=> {      
      api.get(BLOG_GET_API).then((res) => {
         setData(res.data)
      })
      .catch((error) => {
         setError("datanot found");
      });    
   }
   useEffect(()=>{
      getBlog()
   }, []);
   return (
    <>
    <Head>
      <title>Blogs</title>
      <meta
        name="description"
        content="Techoceans will do mobile app, website development and digital marketing seo in our all over the world"
        />
    </Head>
    <section className= {styles.Herosection + " bg-cover bg-center bg-norepeat"} style={{ backgroundImage: "url(/images/banner-home.png)"}}>
      <Header/>
      <HeroSection
        Heading={"Blogs"} 
        text={"Our Latest Blog"}
        button= {"hide"}
        
      />
    </section>
    <section className={styles.Experties + " " + styles.Portfolio + " section-padding lightgray-dark bg-cover bg-center bg-norepeat"}>
      <Container>
         {data ? (
            <>
            

              <Grid container spacing={3} mt={3}>
                {data.blogs.map((getData)=>{
                  console.log("getData111", getData)
                  return (
                    <Grid  className="" item md={4} xs={12}>
                      <BlogBox data={getData}  />
                    </Grid>
                  );
                })}
              </Grid>
          </>
        ) :""}
        
      </Container>
    </section>
    <Footer />
    </>
   );
}

export default Blog;