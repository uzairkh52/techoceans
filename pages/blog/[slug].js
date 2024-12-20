import { Box, Card, CardMedia, Container, Grid, } from "@mui/material";
import Link from "next/link";
import styles from "../../styles/sass/components/Home.module.scss";
import api, { BLOG_GET_API, BLOG_GET_API_SLUG } from "../../api/api";
import { useEffect, useState } from "react";


import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import BlogBox from "../../component/home/BlogSection/BlogBox";
import HeroSection from "../../component/heroSection";
import Header from "../../component/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import classNames from "classnames";
import moment from "moment";
import Footer from "../../component/footer";

const Blog = (props) => {
  const router = useRouter();
  const {slug}  = router.query;
  console.log("aaa", slug);

   if (typeof window !== "undefined") {
      window.$ = window.jQuery = require("jquery");
    }
    
    const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
      ssr: false,
    });

   const[data, setData]= useState("");
   const[mainslug, setMainslug]= useState("");
   const [ error, setError]=useState("")
   const [blogcontent ,setBlogcontent]=useState();
   
   
   const getBlog =(e)=> {      
     api.get(BLOG_GET_API_SLUG+slug).then((res) => {
       setData(res)
       
      })
      .catch((error) => {
        setError("datanot found");
      });    
    }

    // contwent decrease
    const truncateContent = (html, wordLimit) => {
      if (!html) return ""; // Handle undefined or null content safely
  
      const text = html.replace(/<[^>]+>/g, ""); // Strip HTML tags
      const words = text.split(" ");
      return words.length > wordLimit
        ? words.slice(0, wordLimit).join(" ") + "..."
        : text;
    };
    const previewContent = truncateContent(blogcontent, 50); // Limit to 10 words
    
    // content covert 
    const htmlcontent = ()=> {
      // 
      const content = <div dangerouslySetInnerHtml={ {__html:data?.data?.blog?.Content}} />
      setBlogcontent(content?.props?.dangerouslySetInnerHtml?.__html)
    }
    
    
    useEffect(() => {
      htmlcontent()
      truncateContent()
      if (slug) {
        getBlog(slug);
      }
    }, [router]);

   return (
    <>
    <Head>
      <title>{data?.data?.blog?.Title}</title>
      <meta
        name="description"
        content={previewContent}
      />
      <link rel="canonical" href={`https://techoceans.vercel.app//blog/${slug}`} />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: data?.data?.blog?.Title,
              description: blogcontent,
              url: `https://techoceans.vercel.app//blog/${slug}`,
              datePublished: data?.data?.blog?.date,
              author: {
                "@type": "Person",
                name: data?.data?.blog?.Author,
              },
            }),
          }}
        />

    </Head>
    <section className= {styles.Herosection + " bg-cover bg-center bg-norepeat"} style={{backgroundImage:`url(${data?.data?.blog?.featuredImage})`}}>
      <Header/>
      <HeroSection
        Heading={"Blogs"} 
        button= {"hide"}
        
        
      />
    </section>
    <section className={styles.Experties + " " + styles.Portfolio + " section-padding lightgray-dark bg-cover bg-center bg-norepeat"}>
    
      <Container>
      <div
        className={
          styles.whatIsSection +
          " br-20 brd-bc1-lighter  white-bg section-padding-sm mb-30"
        }
      >
        <Container>
          <div className={styles.whatIsSectionIn}>
            <div className={styles.whatIsSectionBox}>
              <Grid container spacing={3}>
                
                  <Grid item lg={5} md={5} xs={12} className=" d-flex justify-content-start pl-50">
                    <div className={styles.BlogFeatureImage + " align-center bg-cover bg-center bg-norepeat"} style={{backgroundImage:`url(${data?.data?.blog?.featuredImage})`}}>
                    </div>
                  </Grid>
                  <Grid item md={7} xs={12}>
                  <Box >

                    <div className="hgroup mb-50 mt-30">
                    <section className=" d-flex gap-20 mb-20">
                        <div>
                            Category: <span className=" bold">{data?.data?.blog?.category}</span>
                        </div>
                        <div className="ml-30">Date: <span className=" bold">
                              {moment(data?.data?.blog?.date).format(
                                "MMMM Do YYYY"
                              )}{" "}
                          </span>
                        </div>

                    </section>
                      <h2 className="mb-10 basecolor">{data?.data?.blog?.Title}</h2>
                    </div>
                    <Link 
                      href={"https://wa.me/03472696576?text=please%20visit%20our%20facebook%20page%20for%20more%20detail%20you%20want%20to%20purchase%20anything%20just%20message%20inbox%20on%20whatsapp%20chat%20or%20call%20we%20will%20response%20quick%0Ahttps://www.facebook.com/profile.php?id=61568919442130"}
                    >
                      <img
                          src={"/images/phone-icon.svg"}
                          className={classNames(
                            styles.screenImg,
                            "cursor-pointer shadow-xs"
                          )}
                        />
                    </Link>
                  </Box>
                  
                </Grid>
                
              </Grid>
            </div>
          </div>
        </Container>
        
      </div>
      <div className="hgroup">
          {blogcontent}
      {console.log("previewContent", previewContent)}
        </div>
        
      </Container>
    </section>
    <Footer/>


    </>
   );
}

export default Blog;