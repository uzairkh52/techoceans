import { Box, Card, Grid } from "@mui/material";
import styles from "../../../styles/sass/components/Home.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
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
        console.error("Expected a string, but got:", typeof html);
        return ""; // Provide a fallback in case `html` is not a string
      }
    };
    
    const previewContent = truncateContent(props.data.Content, 20); // Limit to 10 words   
    console.log("test12", previewContent); 
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
            <div className={styles.cardThumb + " bg-cover bg-center bg-norepeat"} style={{backgroundImage:`url(${props.data.featuredImage})`}}>
            
            </div>
            <Box sx={{mt: 3}}>
               <div className="bold">{props.data.category}</div>
               <Box className={styles.contentBox +" mt-10"}>
                  <h4 className="mb-0 basecolor2">{props.data.Title}</h4>
                  <p>{previewContent}</p>
               </Box>
               <Box className="d-flex justify-content-end" sx={{mt:3}}>
                  <Link
                     className={ "  align-center text-decoration-none d-flex"}
                     href={"blog/"+props.data.slug}
                  >
                     <span>Read more </span> <i class="icofont icofont-long-arrow-right f30"></i>
                  </Link>

               </Box>
            </Box>
         </Card>
      </Grid>
   );
}

export default BlogBox;