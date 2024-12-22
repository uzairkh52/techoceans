import { Box, Card, CardMedia, Container, Grid, LinearProgress, Stack, } from "@mui/material";
import Link from "next/link";
import styles from "../../../styles/sass/components/Home.module.scss";
import api, { BLOG_GET_API } from "../../../api/api";
import { useEffect, useState } from "react";


import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import BlogBox from "./BlogBox";

const BlogSection = (props) => {
   if (typeof window !== "undefined") {
      window.$ = window.jQuery = require("jquery");
    }
    
    const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
      ssr: false,
    });

   const[data, setData]= useState("");
   const[isLoading, setIsLoading]= useState(true);
   const getBlog =(e)=> {      
      api.get(BLOG_GET_API).then((res) => {
        const sortedBlogs = res.data.blogs.sort((a, b) => {
          const dateA = new Date(a.date || 0).getTime(); // Default to 0 if missing
          const dateB = new Date(b.date || 0).getTime();
          return dateB - dateA;
        });
        
         setData({blogs: sortedBlogs})
      })
      .catch((error) => {
         setError("datanot found");
      }).finally(() => {
        setIsLoading(false);
      });
   }
   useEffect(()=>{
      getBlog()
   }, []);
   return (
    <section className={styles.Experties + " " + styles.Portfolio + " section-padding lightgray-dark bg-cover bg-center bg-norepeat"}>
      <Container>
        <div className=" hgroup">
          <h2 className="mb-10">
            Blogs
          </h2>
        </div>

        {console.log("data111", data)}
         {!isLoading  ? (
            <> 
            <OwlCarousel
                className={styles.CreatorSLider + "  owl-theme mb-hide-nav"}
                loop={false}
                margin={10}
                nav={true}
                dots={false}
                responsive={{
                  0: {
                    items: 1.4,
                  },
                  480: {
                    items: 1.4,
                  },
                  768: {
                    items: 3,
                  },
                  1024: {
                    items: 3,
                  },
                }}
              >
                {data.blogs.slice(0, 10).map((getData)=>{
                    console.log("getData", getData)
                    return (
                      <BlogBox data={getData}  />
                    );
                })}
              </OwlCarousel>
            </>
        ) :(
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
   );
}

export default BlogSection;