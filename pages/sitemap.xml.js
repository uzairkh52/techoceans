const EXTERNAL_DATA_URL = 'https://techoceans.vercel.app'; // Your site URL

// Function to generate the static XML sitemap
function generateSiteMap() {
  // Static URLs for blog and about pages
  console.log("aaaa", )
  const staticUrls = [
   // <lastmod>${new Date(post.date).toISOString()}</lastmod>
    { loc: `${EXTERNAL_DATA_URL}/`, lastmod: '2024-11-22', priority: '1.0' }, // Homepage
    { loc: `${EXTERNAL_DATA_URL}/about`, lastmod: '2024-11-20', priority: '0.8' }, // About page
    { loc: `${EXTERNAL_DATA_URL}/blog/`, lastmod: '2024-11-22', changefreq: 'daily', priority: '0.9' }, // Blog index page
  ];

  // Create the XML string for static URLs
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${staticUrls
       .map(({ loc, lastmod, changefreq, priority }) => {
         return `
           <url>
             <loc>${loc}</loc>
             <lastmod>${lastmod}</lastmod>
             ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
             ${priority ? `<priority>${priority}</priority>` : ''}
           </url>
         `;
       })
       .join('')}
   </urlset>`;
}

export async function getServerSideProps({ res }) {
  try {
    // Generate the static XML sitemap
    const sitemap = generateSiteMap();

    // Set headers and return the sitemap
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }

  return { props: {} }; // Ensure no rendering happens on the client
}

export default function Sitemap() {
  return null; // This page won't render anything
}
