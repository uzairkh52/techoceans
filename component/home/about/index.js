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
                      <img width={558} height={399}  alt="Techoceans is Your Partner in Digital Transformation"
                        data-src={"/images/website-wallpaper.png"}
                        className={classNames(
                          styles.screenImg,
                          "cursor-pointer lozad"
                        )}
                      />
                    </div>
                  </Grid>
                  <Grid item md={6} xs={12}>
                  <Box sx={{pl:3}}>

                    <div className="hgroup">
                      <h4 className="mb-10">Who We Are</h4>
                      <h2 className="mb-10 basecolor">Techoceans is Your Partner in Digital Transformation</h2>
                    </div>
                    <p>We specialize in creating seamless digital experiences through top-tier web and mobile app development. Our team of experts is passionate about turning your ideas into powerful solutions that elevate your business.</p>
                    <Link 
                      href={"https://wa.me/03472696576?text=please%20visit%20our%20facebook%20page%20for%20more%20detail%20you%20want%20to%20purchase%20anything%20just%20message%20inbox%20on%20whatsapp%20chat%20or%20call%20we%20will%20response%20quick%0Ahttps://www.facebook.com/profile.php?id=61568919442130"}
                    >
                    <span className="d-none">techoceans</span>
                      <img  alt="techoceans"
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
   );
}

export default About;