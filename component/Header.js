import Image from "next/image";
import Script from 'next/script'
import Head from 'next/head';
import styles from "@/styles/sass/components/Header.module.scss"

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

    </>
  );
};

export default Header;