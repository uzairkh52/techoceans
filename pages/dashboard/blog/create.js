import { Alert, Box, Button, Card, CardContent, Container, FormControl, Grid, InputLabel, MenuItem, Select, StepContent, TextField, Typography, } from "@mui/material";
import Link from "next/link";
import styles from "../../../styles/sass/components/Home.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../../api/api";

import { v4 as uuidv4 } from 'uuid';
import { createSlug } from "../../api/slugify";



const ContactForm = (props) => {
  
  
   const [title, setTitle] = useState();
   const [content, setContent] = useState();
   const [category, setCategory]= useState("tech");
   const [tags, setTags] = useState("tech");
  const [action, setAction] = useState("create");
  const [author, setAuthor] = useState("uzair");
  const [status, setstatus] = useState("published");
  const[error, setError]= useState()
  const [submisMessage, setSubmisMessage] = useState(false);
  const [publicationDate, setPublicationDate]= useState();
  const [featuredImage, setFeaturedImage] = useState("");
  const [slug, setSlug] = useState("");

   // Create slug when title changes
   
   
   
   
   
   const FormSubmitHandle =(e)=> {
    const generatedSlug = createSlug(title);
     setSlug(generatedSlug);
     const currentDate = new Date().toISOString(); // ISO format: YYYY-MM-DDTHH:mm:ss.sssZ
     setPublicationDate(currentDate);
     const params = {
       title: title,
       content: content,
       category: category,
       tags: tags,
       action: action,
       author: author,
       status: status,
       publicationDate: currentDate,
       featuredImage: featuredImage,
       slug: generatedSlug,
       
      }
      console.log("params", currentDate);
      console.log("slug", slug); 
    
    
      api.post("/api/api-blog", params) .then((res) => {
        setSubmisMessage(true);  
      })
      .catch((error) => {
        setError("Please fill out all required fields and try again.");
      });    
  }
   return (
    <section id="contact-section" className={styles.ContactForm + " section-padding basecolor1-dark"}>
      <Container>
        <div className="align-center hgroup">
          <h2 className="mb-10 white">
          Hey! Let’s Talk
          </h2>
        </div>
        <Card >
              <CardContent>
                <Grid  className="" item md={12} xs={12}>
                  <div
                    className={
                      styles.box +
                      "  br-12 "
                    }
                  >
                     {submisMessage ? (
                        
                        <Grid container textAlign={"center"} spacing={3} mt={3}>
                          <Box sx={{ px:30, py:10 }}  className=""  item md={12} xs={12}>
                            <h1>Thank you dear {name}</h1>
                            <p>
                              for reaching out! Your details have been successfully submitted. Our team will contact you shortly to discuss your project requirements.
                            </p>
                            </Box>
                        </Grid>
                      ) : (
                        
                        <Box
                          component="form"
                          noValidate
                          autoComplete="off"
                          sx={{ padding: { xs: 4, sm: 6 } }}
                        >
                            <Grid container spacing={3} mt={{xs:0, sm:2}}>
                              <Grid  className="" item md={12} xs={12}>
                                <label>Title</label>
                                <TextField   
                                  fullWidth
                                  required
                                  id="outlined-required"
                                
                                  defaultValue={title}
                                  onChange={(e)=> setTitle(e.target.value)}
                                />
                                
                              </Grid>
                              <Grid  className="" item md={12} xs={12}>
                                  <label>Image</label>

                                 <TextField   
                                    fullWidth
                                    required
                                    id="outlined-required"
                                  
                                    defaultValue={title}
                                    onChange={(e)=> setFeaturedImage(e.target.value)}
                                  />
                              </Grid>
                              <Grid  className="" item md={12} xs={12}>
                              <label>Content</label>
                                <TextField
                                fullWidth
                                  required
                                  id="outlined-required"
                                
                                  defaultValue={content}
                                  onChange={(e)=> setContent(e.target.value)}

                                />
                              </Grid>
                              
                              <Grid className="" item md={12} xs={12}>
                              
                                <Box className="d-flex justify-content-center" sx={{mt: 4}}>
                                  <Button
                                      className={styles.enterbutton + " btn button ui btn-primary btn-md align-center mr-20"}
                                      onClick={()=> FormSubmitHandle()}
                                    >
                                      Submit
                                    </Button>
                                </Box>
                              </Grid>
                              {/*  */}
                            </Grid>
                        </Box>
                     )};
                  </div>
                </Grid>
              </CardContent>
            </Card>
        
      </Container>
    </section>
   );
}

export default ContactForm;