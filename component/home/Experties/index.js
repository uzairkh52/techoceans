import { Box, Container, Grid, } from "@mui/material";
import Link from "next/link";
import styles from "../../../styles/sass/components/Home.module.scss";


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
            <Grid  className="" item md={4} xs={12}>
              <div
                className={
                  styles.box +
                  "  br-12 lightgray-bg"
                }
              >
                <div>
                  <Box className="mb-3" sx={{ mb: 2 }}>
                    <img src="/images/Web-Design-Development-icon.svg" />
                  </Box>
                  <h4 className="basecolor2">Web Design / Development</h4>
                  <p>We specialize in creating websites that captivate, convert and inspire. Visually stunning: designs that leave a lasting impression Performance optimized: fast loading, responsive, and optimized for all devices</p>
                </div>
              </div>
            </Grid>
            {/*  */}
            <Grid  className="" item md={4} xs={12}>
              <div
                className={
                  styles.box +
                  "  br-12 lightgray-bg"
                }
              >
                <div>
                  <Box className="mb-3" sx={{ mb: 2 }}>
                    <img src="/images/UX-Design-icon.svg" />
                  </Box>
                  <h4 className="basecolor2">UI/UX Design</h4>
                  <p>We not only elevate your brand with stunning UI/UX design, but also make it visually appealing, intuitive, functional and memorable, making every interaction count with exceptional UI/UX.</p>
                </div>
              </div>
            </Grid>
            <Grid  className="" item md={4} xs={12}>
              <div
                className={
                  styles.box +
                  "  br-12 lightgray-bg"
                }
              >
                <div>
                  <Box className="mb-3" sx={{ mb: 2 }}>
                    <img src="/images/Website-Migration-icon.svg" />
                  </Box>
                  <h4 className="basecolor2">Website Migration</h4>
                  <p>Now is the time to migrate your website to a new platform, host or design, we specialize in website migration services that provide a smooth, secure, and Ensure efficient transfer.</p>
                </div>
              </div>
            </Grid>
            <Grid  className="" item md={4} xs={12}>
              <div
                className={
                  styles.box +
                  "  br-12 lightgray-bg"
                }
              >
                <div>
                  <Box className="mb-3" sx={{ mb: 2 }}>
                    <img src="/images/App-Development-icon.svg" />
                  </Box>
                  <h4 className="basecolor2">App Development</h4>
                  <p>We develop apps to meet your unique goals and target audience. Develop for iOS, Android and web using the latest technologies like Flutter and React Native.</p>
                </div>
              </div>
            </Grid>
            <Grid  className="" item md={4} xs={12}>
              <div
                className={
                  styles.box +
                  "  br-12 lightgray-bg"
                }
              >
                <div>
                  <Box className="mb-3" sx={{ mb: 2 }}>
                    <img src="/images/Quality-Assurance.svg" />
                  </Box>
                  <h4 className="basecolor2">Quality Assurance</h4>
                  <p>Quality Assurance (QA) ensures that your products, It is an integral part of the development lifecycle to maintain high reliability and user satisfaction.</p>
                </div>
              </div>
            </Grid>
            <Grid  className="" item md={4} xs={12}>
              <div
                className={
                  styles.box +
                  "  br-12 lightgray-bg"
                }
              >
                <div>
                  <Box className="mb-3" sx={{ mb: 2 }}>
                    <img src="/images/Email-Marketing-icon.svg" />
                  </Box>
                  <h4 className="basecolor2">Email Marketing</h4>
                  <p>Boost Your Sales with Targeted Email Campaigns Unlock the Power of Email Marketing for Your Business .we specialize in creating and managing email campaigns that deliver results.</p>
                </div>
              </div>
            </Grid>
          </Grid>  
          <Grid>
            <Box className="d-flex justify-content-center" sx={{mt: 4}}>
              <Link
                  className={styles.enterbutton + " btn button ui btn-primary btn-md align-center mr-20"}
                  href={"#contact-section"}
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