import { Card, CardMedia, Box, Container, Grid, LinearProgress, Stack } from "@mui/material"; 
import Link from "next/link";
import styles from "../../styles/sass/components/Home.module.scss";
import api, { BLOG_GET_API_SLUG } from "../../api/api";
import { useRouter } from "next/router";
import moment from "moment";
import Footer from "../../component/footer";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Header from "../../component/Header";
import HeroSection from "../../component/heroSection";

// The Blog component
// Fetch blog data on the server-side
export async function getServerSideProps(context) {
  
  const { slug } = context.params; // Get the slug from URL params
  
  try {
    // Fetch blog data from the API using the slug
    const res = await api.get(`${BLOG_GET_API_SLUG}${slug}`);
    const data = res.data;
    

    // Truncate the content for meta description
    const truncateContent = (html, wordLimit) => {
      if (typeof html === "string") {
        const modifiedHtml = html.replace(/<[^>]+>/g, ""); // Strip HTML tags
        const words = modifiedHtml.split(" ");
        return words.length > wordLimit
          ? words.slice(0, wordLimit).join(" ") + "..."
          : modifiedHtml; // Return truncated content
      }
      return "";
    };

    const metaDescript = truncateContent(data?.blog?.Content, 50); // Limit to 50 words

    return {
      props: {
        data, // Pass the fetched data to the page
        metaDescript, // Pass the truncated meta description
      },
    };
  } catch (error) {
    return {
      props: {
        data: null, // In case of error, send null
        metaDescript: "",
      },
    };
  }
}
const Blog = ({ data, metaDescript }) => {
  console.log("data:", metaDescript);

  const router = useRouter();
  const { slug } = router.query;

  if (!data) {
    return (
      <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
        <LinearProgress color="inherit" />
        <LinearProgress color="inherit" />
        <LinearProgress color="inherit" />
      </Stack>
    );
  }

  return (
    <>
      <Head>
        <NextSeo
          title={data?.blog?.Title}
          description={metaDescript}
          canonical={`https://techoceans.vercel.app/blogs/${slug}`}
          openGraph={{
            url: `https://techoceans.vercel.app/blogs/${slug}`,
            title: data?.blog?.Title,
            description: metaDescript,
            images: [
              {
                url: data?.blog?.featuredImage,
                width: 800,
                height: 600,
                alt: data?.blog?.Title,
              },
            ],
            site_name: "sitemap.xml",
          }}
        />
        <meta name="description" content={metaDescript} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://techoceans.vercel.app/blog/${slug}`} />
      </Head>
      <section className= {styles.Herosection + " bg-cover bg-center bg-norepeat"} style={{ backgroundImage: "url(/images/banner-home.png)"}}>
      <Header/>
      <HeroSection
        Heading={"Blog"} 
        buttonTitle= {"Back to all Blogs"}
        buttonLink= {"/blogs"}
      />

    </section>
      <section
        aria-label={data?.blog?.Title}
        className={styles.Herosection + " bg-cover bg-center bg-norepeat"}
        style={{ backgroundImage: `url(${data?.blog?.featuredImage})` }}
      >
        {/* Your Header and HeroSection components */}
      </section>

      <section className={styles.Experties + " " + styles.Portfolio + " section-padding lightgray-dark bg-cover bg-center bg-norepeat"}>
        <Container>
          <section className={styles.whatIsSection + " br-20 brd-bc1-lighter white-bg section-padding-sm mb-30"}>
            <Container>
              <div className={styles.whatIsSectionIn}>
                <div className={styles.whatIsSectionBox}>
                  <Grid container spacing={3}>
                    <Grid item lg={5} md={5} xs={12} className=" d-flex justify-content-start pl-50">
                      <div
                        className={styles.BlogFeatureImage + " align-center bg-cover bg-center bg-norepeat"}
                        style={{ backgroundImage: `url(${data?.blog?.featuredImage})` }}
                      />
                    </Grid>
                    <Grid item md={7} xs={12}>
                      <Box>
                        <div className="hgroup mb-50 mt-30">
                          <section className=" d-flex gap-20 mb-20">
                            <div>
                              Category: <span className=" bold">{data?.blog?.category}</span>
                            </div>
                            <div className="ml-30">Date: <span className=" bold">{moment(data?.blog?.date).format("MMMM Do YYYY")}</span></div>
                          </section>
                          <h2 className="mb-10 basecolor">{data?.blog?.Title}</h2>
                        </div>
                        <Link href="https://wa.me/03472696576?text=please%20visit%20our%20facebook%20page%20for%20more%20detail%20you%20want%20to%20purchase%20anything%20just%20message%20inbox%20on%20whatsapp%20chat%20or%20call%20we%20will%20response%20quick%0Ahttps://www.facebook.com/profile.php?id=61568919442130">
                          <img
                            src="/images/phone-icon.svg"
                            className="cursor-pointer shadow-xs"
                          />
                        </Link>
                      </Box>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Container>
          </section>

          <div className="hgroup">
            <div dangerouslySetInnerHTML={{ __html: data?.blog?.Content || "Content not available" }} />
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
};



export default Blog;
