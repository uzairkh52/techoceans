//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = 'https://techoceans.vercel.app';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
      <loc>https://techoceans.vercel.app/</loc>
      <lastmod>2024-11-22</lastmod>
      <priority>1.0</priority>
   </url>
   <url>
      <loc>https://techoceans.vercel.app/about</loc>
      <lastmod>2024-11-20</lastmod>
      <priority>0.8</priority>
   </url>
     
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(request);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;