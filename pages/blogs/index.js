import { Box, Card, CardMedia, Container, Grid, LinearProgress, Stack, } from "@mui/material";
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

const Blogs = (props) => {
   if (typeof window !== "undefined") {
      window.$ = window.jQuery = require("jquery");
    }
    
    const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
      ssr: false,
    });

   const[data, setData]= useState("");
   const[error, setError]= useState("");
   const [isLoading, setIsLoading]= useState(true);

   const getBlog =(e)=> {      
     api.get(BLOG_GET_API).then((res) => {
        // Sort blogs by publicationDate in descending order
        const sortedBlogs = res.data.blogs.sort((a, b) => {
          const dateA = new Date(a.date || 0).getTime(); // Default to 0 if missing
          const dateB = new Date(b.date || 0).getTime();
          return dateB - dateA;
        });
        setData({ blogs: sortedBlogs });
    })
    .catch((error) => {
      console.error("Data not found", error);
    })
    .finally(() => {
      setIsLoading(false);
    });
   }
   console.log("sortedBlogs", data.blogs);
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
        {!isLoading ? (
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
        ): (
          <>
          <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                  <LinearProgress color="inherit" />
                  <LinearProgress color="inherit" />
                  <LinearProgress color="inherit" />
                </Stack>
          </>
        )}
        
      </Container>
    </section>
    <Footer />
    </>
   );
}

export default Blogs;