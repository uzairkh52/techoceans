import { Box, Container, Grid, } from "@mui/material";
import Link from "next/link";
import styles from "../../../styles/sass/components/Home.module.scss";


const Mission = (props) => {
   return (
    <section className={styles.Experties + " section-padding"}>
      <Container>
        <div className="align-center hgroup section-h">
          <h2 className="mb-10">
          Our Mission & Values
          </h2>
          <p>"Our mission is to empower businesses by creating seamless, scalable, and innovative digital experiences. We believe in collaboration, transparency, and a commitment to excellence. Our core values are</p>
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
                  <Box className={styles.icon + " mb-3"} sx={{ mb: 2 }}>
                    <img className="lozad" data-src="/images/mission-2222.svg" />
                  </Box>
                  <h3 className="basecolor2 h5">Innovation</h3>
                  <p>Continuously pushing the boundaries of technology.</p>
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
                  <Box className={styles.icon + " mb-3"} sx={{ mb: 2 }}>
                    <img className="lozad" data-src="/images/mission-444.svg" />
                  </Box>
                  <h3 className="basecolor2 h5">Quality</h3>
                  <p>Quality: Providing reliable, robust, and tested solutions.</p>
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
                  <Box className={styles.icon + " mb-3"} sx={{ mb: 2 }}>
                    <img className="lozad" data-src="/images/mission-111.svg" />
                  </Box>
                  <h3 className="basecolor2 h5">Customer-Centric Approach</h3>
                  <p>Focusing on understanding and meeting our clients’ needs.</p>
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
                  <Box className={styles.icon + " mb-3"} sx={{ mb: 2 }}>
                    <img className="lozad" data-src="/images/mission-3333.svg" />
                  </Box>
                  <h3 className="basecolor2 h5">Integrity</h3>
                  <p>Ensuring transparent communication and ethical business practices.</p>
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

export default Mission;