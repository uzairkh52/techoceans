import { Container, Grid, } from "@mui/material";
import Link from "next/link";
import styles from "../../styles/sass/components/Home.module.scss"


const HeroSection = (props) => {
   return (
      <section className= {styles.Banner}>
        <Container>
          <Grid>
            <Grid item xs={12}>
            <div className="mb-2">
              <h1 className="uppercase align-center white f20  mb-20">{props.SubHeading}</h1>
              <h2 className="align-center white mb-20">{props.Heading}</h2>
              <p className="align-center regular white">{props.text}</p>
            </div>
              <div className="d-flex justify-content-center">
                <Link
                    className={styles.enterbutton + " btn button ui btn-primary btn-md align-center mr-20"}
                    href={"https://wa.me/03472696576?text=please%20visit%20our%20facebook%20page%20for%20more%20detail%20you%20want%20to%20purchase%20anything%20just%20message%20inbox%20on%20whatsapp%20chat%20or%20call%20we%20will%20response%20quick%0Ahttps://www.facebook.com/profile.php?id=61568919442130"}
                  >
                    Get in touch
                  </Link>
              </div>
            </Grid>
          </Grid>
          
        </Container>
      </section>
   );
}

export default HeroSection;