import { Box, Container, Grid, } from "@mui/material";
import Link from "next/link";
import styles from "../../../styles/sass/components/Home.module.scss";


const Contact = (props) => {
   return (
    <section className={styles.Experties + " section-padding basecolor1-dark"}>
      <Container>
        <div className="align-center hgroup">
          <h2 className="mb-10 white">
          Hey! Let’s Talk
          </h2>
        </div>
        <Grid container spacing={3} mt={3}>
            <Grid  className="" item md={3} xs={12}>
              <div
                className={
                  styles.box +
                  "  br-12 lightgray-bg"
                }
              >
                <div>
                  <Box className="mb-3" sx={{ mb: 2 }}>
                    <img src="/images/Research-icon.svg" />
                  </Box>
                  <h4 className="basecolor2">Research</h4>
                  <p>We look at how visitors interact with your site to improve usability and engagement.</p>
                </div>
              </div>
            </Grid>
            {/*  */}
            <Grid  className="" item md={3} xs={12}>
              <div
                className={
                  styles.box +
                  "  br-12 lightgray-bg"
                }
              >
                <div>
                  <Box className="mb-3" sx={{ mb: 2 }}>
                    <img src="/images/design-icon.svg" />
                  </Box>
                  <h4 className="basecolor2">Design</h4>
                  <p>We focus on the needs of your audience to create seamless experiences.  Designs that enhance your brand identity and captivate consumers.</p>
                </div>
              </div>
            </Grid>
            <Grid  className="" item md={3} xs={12}>
              <div
                className={
                  styles.box +
                  "  br-12 lightgray-bg"
                }
              >
                <div>
                  <Box className="mb-3" sx={{ mb: 2 }}>
                    <img src="/images/Develope-icon.svg" />
                  </Box>
                  <h4 className="basecolor2">Develope</h4>
                  <p>We specialize in providing advanced services that help build responsive, high-performing websites.</p>
                </div>
              </div>
            </Grid>
            <Grid  className="" item md={3} xs={12}>
              <div
                className={
                  styles.box +
                  "  br-12 lightgray-bg"
                }
              >
                <div>
                  <Box className="mb-3" sx={{ mb: 2 }}>
                    <img src="/images/test-icon.svg" />
                  </Box>
                  <h4 className="basecolor2">Test</h4>
                  <p>We specialize in comprehensive website testing that ensures your site works flawlessly on any device or browser.</p>
                </div>
              </div>
            </Grid>
         </Grid>
      </Container>
    </section>
   );
}

export default Contact;