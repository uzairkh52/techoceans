import { Box, Card, CardMedia, Container, Grid, LinearProgress, Stack, } from "@mui/material";
import Link from "next/link";
import styles from "../../styles/sass/components/Home.module.scss";
import api, { BLOG_GET_API } from "../../api/api";
import { useState } from "react"; // We'll still use state for loading/error handling
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import BlogBox from "../../component/home/BlogSection/BlogBox";
import HeroSection from "../../component/heroSection";
import Header from "../../component/Header";
import Head from "next/head";
import Footer from "../../component/footer";

// Fetch data on the server side using getServerSideProps
export async function getServerSideProps() {
  try {
    const res = await api.get(BLOG_GET_API);
    // Sort blogs by publicationDate in descending order
    const sortedBlogs = res.data.blogs ? res.data.blogs.sort((a, b) => {
      const dateA = new Date(a.date || 0).getTime(); // Default to 0 if missing
      const dateB = new Date(b.date || 0).getTime();
      return dateB - dateA;
    }) : []; // If no blogs are found, return an empty array

    return { props: { blogs: sortedBlogs } };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { props: { blogs: [] } }; // Return empty array if fetching fails
  }
}

const Blogs = ({ blogs }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Head>
        <title>Techoceans Blog | Insights on Web & Mobile Development, QA, and SEO</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Explore expert articles and the latest trends in web design, mobile app development, quality assurance, and SEO strategies. Stay informed with Techoceans' insights to elevate your digital presence."
        />
        <link rel="canonical" href="https://techoceans.vercel.app/blogs" />
      </Head>

      <section className={styles.Herosection + " bg-cover bg-center bg-norepeat"} style={{ backgroundImage: "url(/images/banner-home.png)" }}>
        <Header />
        <HeroSection Heading={"Blogs"} text={"Our Latest Blog"} button={"hide"} />
      </section>

      <section className={styles.Experties + " " + styles.Portfolio + " section-padding lightgray-dark bg-cover bg-center bg-norepeat"}>
        <Container>
          {blogs && blogs.length > 0 ? (
            <Grid container spacing={3} mt={3}>
              {blogs.map((getData) => (
                <Grid key={getData.id} className="" item md={4} xs={12}>
                  <BlogBox data={getData} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
              <LinearProgress color="inherit" />
              <LinearProgress color="inherit" />
              <LinearProgress color="inherit" />
            </Stack>
          )}
        </Container>
      </section>
      
      <Footer />
    </>
  );
}

export default Blogs;
