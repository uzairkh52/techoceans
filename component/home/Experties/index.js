import { Box, Container, Grid, } from "@mui/material";
import Link from "next/link";
import styles from "../../../styles/sass/components/Home.module.scss";
import { useEffect } from "react";
import lozad from "lozad";


const Experties = (props) => {
  
   return (
    <section className={styles.Experties + " section-padding"}>
      <Container>
        <div className="align-center hgroup">
          <h2 className="mb-10">
            Our Expertice
          </h2>
        </div>
        <Grid container spacing={3} mt={3}>
            <Grid  className="" item md={4} xs={6}>
              <div
                className={
                  styles.box +
                  "  br-12 lightgray-bg"
                }
              >
                <div>
                  <Box className={styles.icon + " mb-3"} sx={{ mb: 2 }}>
                    <img width={"60"} height={"60"} alt="Web Design / Development"
                     className="lozad" data-src="/images/Web-Design-Development-icon.svg" />
                  </Box>
                  <h3 className="basecolor2 h5">Web Design / Development</h3>
                  <Box
                   sx={{
                     display: { xs: "none", sm: "block", lg: "block", md: "block" }, // Visible on mobile (xs), hidden on tablet+ (sm)
                   }}
                 >
                  <p>We specialize in creating websites that captivate, convert and inspire. Visually stunning: designs that leave a lasting impression Performance optimized: fast loading, responsive, and optimized for all devices</p>
                  </Box>
                </div>
              </div>
            </Grid>
            {/*  */}
            <Grid  className="" item md={4} xs={6}>
              <div
                className={
                  styles.box +
                  "  br-12 lightgray-bg"
                }
              >
                <div>
                  <Box className={styles.icon + " mb-3"} sx={{ mb: 2 }}>
                    <img width={"60"} height={"60"} alt="UI/UX Design" className="lozad" data-src="/images/UX-Design-icon.svg" />
                  </Box>
                  <h3 className="basecolor2 h5">UI/UX Design</h3>
                  <Box
                   sx={{
                     display: { xs: "none", sm: "block", lg: "block", md: "block" }, // Visible on mobile (xs), hidden on tablet+ (sm)
                   }}
                 >
                  <p>We not only elevate your brand with stunning UI/UX design, but also make it visually appealing, intuitive, functional and memorable, making every interaction count with exceptional UI/UX.</p>
                  </Box>
                </div>
              </div>
            </Grid>
            <Grid  className="" item md={4} xs={6}>
              <div
                className={
                  styles.box +
                  "  br-12 lightgray-bg"
                }
              >
                <div>
                  <Box className={styles.icon + " mb-3"} sx={{ mb: 2 }}>
                    <img width={"60"} height={"60"} alt="Website Migration" className="lozad" data-src="/images/Website-Migration-icon.svg" />
                  </Box>
                  <h3 className="basecolor2 h5">Website Migration</h3>
                  <Box
                   sx={{
                     display: { xs: "none", sm: "block", lg: "block", md: "block" }, // Visible on mobile (xs), hidden on tablet+ (sm)
                   }}
                 >
                  <p>Now is the time to migrate your website to a new platform, host or design, we specialize in website migration services that provide a smooth, secure, and Ensure efficient transfer.</p>
                  </Box>
                </div>
              </div>
            </Grid>
            <Grid  className="" item md={4} xs={6}>
              <div
                className={
                  styles.box +
                  "  br-12 lightgray-bg"
                }
              >
                <div>
                  <Box className={styles.icon + " mb-3"} sx={{ mb: 2 }}>
                    <img width={"60"} height={"60"} alt="App Development" className="lozad" data-src="/images/App-Development-icon.svg" />
                  </Box>
                  <h3 className="basecolor2 h5">App Development</h3>
                  <Box
                   sx={{
                     display: { xs: "none", sm: "block", lg: "block", md: "block" }, // Visible on mobile (xs), hidden on tablet+ (sm)
                   }}
                 >
                  <p>We develop apps to meet your unique goals and target audience. Develop for iOS, Android and web using the latest technologies like Flutter and React Native.</p>
                  </Box>
                </div>
              </div>
            </Grid>
            <Grid  className="" item md={4} xs={6}>
              <div
                className={
                  styles.box +
                  "  br-12 lightgray-bg"
                }
              >
                <div>
                  <Box className={styles.icon + " mb-3"} sx={{ mb: 2 }}>
                    <img width={"60"} height={"60"} alt="Quality Assurance" className="lozad" data-src="/images/Quality-Assurance.svg" />
                  </Box>
                  <h3 className="basecolor2 h5">Quality Assurance</h3>
                  <Box
                   sx={{
                     display: { xs: "none", sm: "block", lg: "block", md: "block" }, // Visible on mobile (xs), hidden on tablet+ (sm)
                   }}
                 >
                  <p>Quality Assurance (QA) ensures that your products, It is an integral part of the development lifecycle to maintain high reliability and user satisfaction.</p>
                  </Box>
                </div>
              </div>
            </Grid>
            <Grid  className="" item md={4} xs={6}>
              <div
                className={
                  styles.box +
                  "  br-12 lightgray-bg"
                }
              >
                <div>
                  <Box className={styles.icon + " mb-3"} sx={{ mb: 2 }}>
                    <img width={"60"} height={"60"} alt="Email Marketing" className="lozad" data-src="/images/Email-Marketing-icon.svg" />
                  </Box>
                  <h3 className="basecolor2 h5">Email Marketing</h3>
                  <Box
                   sx={{
                     display: { xs: "none", sm: "block", lg: "block", md: "block" }, // Visible on mobile (xs), hidden on tablet+ (sm)
                   }}
                 >
                  <p>Boost Your Sales with Targeted Email Campaigns Unlock the Power of Email Marketing for Your Business .we specialize in creating and managing email campaigns that deliver results.</p>
                  </Box>
                </div>
              </div>
            </Grid>
          </Grid>  
          <Grid>
            <Box className="d-flex justify-content-center" sx={{mt: 4}}>
              <Link
                  className={styles.enterbutton + " btn button ui btn-primary btn-md align-center mr-20"}
                  href={"/contact"}
                >
                  Get in touch
                </Link>
            </Box>
          </Grid>
      </Container>
    </section>
   );
}

export default Experties;