import { Box, Container, Grid, } from "@mui/material";
import Link from "next/link";
import styles from "./../../../styles/sass/components/About.module.scss";
import classNames from "classnames";


const About = () => {
   return (
      <div
        className={
          styles.whatIsSection +
          " brd-top brd-bottom brd-bc1-lighter  white-bg section-padding"
        }
      >
        <Container>
          <div className={styles.whatIsSectionIn}>
            <div className={styles.whatIsSectionBox}>
              <Grid container spacing={3}>
                
                  <Grid item md={6} xs={12}>
                    <div className={styles.whatIsWjImg + " align-center"}>
                      <img
                        src={"/images/website-wallpaper.png"}
                        className={classNames(
                          styles.screenImg,
                          "cursor-pointer"
                        )}
                      />
                    </div>
                  </Grid>
                  <Grid item md={6} xs={12}>
                  <Box sx={{pl:3}}>

                    <div className="hgroup">
                      <h4 className="mb-10">Who We Are</h4>
                      <h2 className="mb-10 basecolor">Your Partner in Digital Transformation</h2>
                    </div>
                    <p>We specialize in creating seamless digital experiences through top-tier web and mobile app development. Our team of experts is passionate about turning your ideas into powerful solutions that elevate your business.</p>
                    <div>
                     <img
                        src={"/images/phone-icon.svg"}
                        className={classNames(
                          styles.screenImg,
                          "cursor-pointer shadow-xs"
                        )}
                      />
                    </div>
                  </Box>
                  
                </Grid>
                
              </Grid>
            </div>
          </div>
        </Container>
        
      </div>
   );
}

export default About;