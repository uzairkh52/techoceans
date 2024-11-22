import Image from "next/image";
import Script from 'next/script'
import Head from 'next/head';
import styles from "./../styles/sass/components/Header.module.scss"
import { Avatar, Container, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import classNames from "classnames";

const Header = () => {
  
  return (
    <>
<Head>
{/* <!-- Google tag (gtag.js) --> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-5VZKN8GW1Q"></script>

<script>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5VZKN8GW1Q');`}
</script>

</Head>
{/* <!-- Google Tag Manager (noscript) --> */}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-JSWTFCCN6J"
height="0" width="0" className={styles.dNone + styles.hidden}></iframe></noscript>

  <header
        id={styles.header}
        
      >
        <Container>
          <div className={styles.headerRow}>
            <div className={styles.col1}>
              <div id={styles.logo}>
                <Link href="/">
                  FindEaxy
                </Link>
              </div>
            </div>
            <div className={styles.col2}>
               
             </div>
           </div>
        </Container>
      </header>


    </>
  );
};

export default Header;