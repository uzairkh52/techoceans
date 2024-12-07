import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import Header from "./../../../component/Header";
import { Container, Grid, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useTable, useSortBy } from "@tanstack/react-table";
import api from "../../../api/api";
import { useEffect, useState } from "react";

const index = () => {
   const [contactData, setContactData] = useState();
   const getfunction = ()=> {
      api.get("/api/get",) .then((res) => {
         
         setContactData(res.data)
      })
      .catch((error) => {});
  };
  
  useEffect(()=> {
    getfunction();
  }, [])

    const data = [
    { id: 1, name: "Uzair", role: "Developer", age: 25 },
    { id: 2, name: "Alice", role: "Designer", age: 30 },
    { id: 3, name: "Bob", role: "Product Manager", age: 35 },
  ];
  return (
    <>
    <Header />
      <Head>
      <title>Techoceans | Dashboard</title>
        <meta
         name="description"
         content="we do mobile app, website development and digital marketing seo in our all over the world"
         />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="section-padding-xl white-bg">
        <Container maxWidth="lg">
          <Grid container spacing={3} mt={3}>
            <Grid item xs={12}>
               <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                     <TableRow>
                        <TableCell style={{width:"20%"}}>id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Country</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                  {contactData?.map((getdata) => (
                     <TableRow
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                        <TableCell style={{width:"20%"}} align="left">{getdata.id}</TableCell>
                        <TableCell  align="left">{getdata.name}</TableCell>
                        <TableCell align="left">{getdata.phone}</TableCell>
                        <TableCell align="left">{getdata.email}</TableCell>
                        <TableCell align="left">{getdata.country}</TableCell>
                  </TableRow>
                  ))}
               </TableBody>
            </Table>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
export default index;
