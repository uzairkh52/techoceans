import { Box, Container, Grid, } from "@mui/material";
import Link from "next/link";
import styles from "../../../styles/sass/components/Home.module.scss";


const Experties = (props) => {
   return (
    <section className={styles.Experties + " section-padding basecolor1-dark"}>
      <Container>
        <div className="align-center hgroup">
          <h2 className="mb-10 white">
          Our Process
          </h2>
        </div>
        <Grid container spacing={3} mt={3}>
            <Grid  className="" item md={3} xs={6}>
              <div
                className={
                  styles.box +
                  "  br-12 lightgray-bg"
                }
              >
                <div>
                  <Box className={styles.icon + " mb-3"} sx={{ mb: 2 }}>
                    <img width={"60"} height={"60"} alt="Research" className="lozad" data-src="/images/Research-icon.svg" />
                  </Box>
                  <h3 className="basecolor2 h5">Research</h3>
                  <p>We look at how visitors interact with your site to improve usability and engagement.</p>
                </div>
              </div>
            </Grid>
            {/*  */}
            <Grid  className="" item md={3} xs={6}>
              <div
                className={
                  styles.box +
                  "  br-12 lightgray-bg"
                }
              >
                <div>
                  <Box className={styles.icon + " mb-3"} sx={{ mb: 2 }}>
                    <img width={"60"} height={"60"} alt="Design" className="lozad" data-src="/images/design-icon.svg" />
                  </Box>
                  <h3 className="basecolor2 h5">Design</h3>
                  <p>We focus on the needs of your audience to create seamless experiences.  Designs that enhance your brand identity and captivate consumers.</p>
                </div>
              </div>
            </Grid>
            <Grid  className="" item md={3} xs={6}>
              <div
                className={
                  styles.box +
                  "  br-12 lightgray-bg"
                }
              >
                <div>
                  <Box className={styles.icon + " mb-3"} sx={{ mb: 2 }}>
                    <img width={"60"} height={"60"} alt="Develope" className="lozad" data-src="/images/Develope-icon.svg" />
                  </Box>
                  <h3 className="basecolor2 h5">Develope</h3>
                  <p>We specialize in providing advanced services that help build responsive, high-performing websites.</p>
                </div>
              </div>
            </Grid>
            <Grid  className="" item md={3} xs={6}>
              <div
                className={
                  styles.box +
                  "  br-12 lightgray-bg"
                }
              >
                <div>
                  <Box className={styles.icon + " mb-3"} sx={{ mb: 2 }}>
                    <img width={"60"} height={"60"} alt="Test" className="lozad" data-src="/images/test-icon.svg" />
                  </Box>
                  <h3 className="basecolor2 h5">Test</h3>
                  <p>We specialize in comprehensive website testing that ensures your site works flawlessly on any device or browser.</p>
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