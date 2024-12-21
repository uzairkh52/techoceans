import { Box, Card, CardMedia, Container, Grid, } from "@mui/material";
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
    <section className={styles.Experties + " " + styles.Portfolio + " section-padding lightgray-dark bg-cover bg-center bg-norepeat"}>
      <Container>
        <div className=" hgroup">
          <h2 className="mb-10">
            Blogs
          </h2>
        </div>

        
         {data ? (
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
                  {data.blogs.map((getData)=>{
                     console.log("getData", getData)
                     return (
                        <BlogBox data={getData}  />
                     );
                  })}
              </OwlCarousel>
            </>
        ) :""}
      </Container>
    </section>
   );
}

export default BlogSection;