import { Box, Card, Grid } from "@mui/material";
import styles from "../../../styles/sass/components/Home.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import moment from "moment";
const BlogBox = (props) => {
   const [blogcontent ,setBlogcontent]=useState();
   
   
   // Function to truncate HTML content to a word limit
   const truncateContent = (html, wordLimit) => {
      if (typeof html === "string") {
        const modifiedHtml = html.replace(/<[^>]+>/g, ""); // Strip HTML tags
        const words = modifiedHtml.split(" "); // Use `modifiedHtml` here instead of `text`
        return words.length > wordLimit
          ? words.slice(0, wordLimit).join(" ") + "..."
          : modifiedHtml; // Return `modifiedHtml` if it's within the limit
      } else {
        
        return ""; // Provide a fallback in case `html` is not a string
      }
    };
    
    const previewContent = truncateContent(props.data.Content, 20); // Limit to 10 words   
    useEffect(() => {
      // htmlcontent()
      truncateContent()
      
    }, []);

   
   return (
      
      <Grid  className={styles.HomeBlogSection}>
         <Card
            className={
            styles.box + " " + styles.Portfoliobox +
            "  br-12 white-bg"
            }
         >
         
            <Link className="text-decoration-none "
               href={"blog/"+props.data.slug}
            >
               <div  aria-label={props.data.Title} className={styles.cardThumb + " bg-cover bg-center bg-norepeat"} style={{backgroundImage:`url(${props.data.featuredImage})`}}>
               </div>
            </Link>
            <Box sx={{mt: 3}}>
            <div className="f12">
               {moment(props.data.date).format(
                  "MMMM Do YYYY"
               )}{" "}
            </div>
               <div className="bold">{props.data.category}</div>
               <Box className={styles.contentBox +" mt-10"}>
                  <Link className="text-decoration-none "
                     href={"blog/"+props.data.slug}
                  >
                     <h4 className="mb-0 basecolor2">{props.data.Title}</h4>
                  </Link>
                  <p>{previewContent}</p>
               </Box>
               <Box className="d-flex justify-content-end" sx={{mt:3}}>
                  <Link
                     className={ "  align-center text-decoration-none d-flex"}
                     href={"blog/"+props.data.slug}
                  >
                     <span>Read more </span> <i className="icofont icofont-long-arrow-right f30"></i>
                  </Link>

               </Box>
            </Box>
         </Card>
      </Grid>
   );
}

export default BlogBox;