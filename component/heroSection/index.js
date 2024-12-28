import { Box, Container, Grid, } from "@mui/material";
import Link from "next/link";
import styles from "../../styles/sass/components/Home.module.scss"


const HeroSection = (props) => {
   return (
      <section className= {styles.Banner}>
        <Container>
          <Grid>
            <Grid item xs={12}>
            <div className="test mb-2">
              <h1 className="uppercase align-center white f20  mb-20">{props.SubHeading}</h1>
              <h2 className="align-center white mb-20">{props.Heading}</h2>
              <p className="align-center regular white">{props.text}</p>
            </div>
              <Box sx={{mt:4}} className="d-flex justify-content-center ">
                <Link
                    className={styles.enterbutton + " " + `${props.button}`+  " btn button ui btn-primary btn-md align-center"}
                    href={props.buttonLink ? props.buttonLink : "/contact"}
                  >
                    {props.buttonTitle ? props.buttonTitle : "Get in touch"} 
                  </Link>
              </Box>
            </Grid>
          </Grid>
          
        </Container>
      </section>
   );
}

export default HeroSection;