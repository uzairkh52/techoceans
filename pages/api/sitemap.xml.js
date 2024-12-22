export default function handler(req, res) {
   // Generate or fetch your sitemap XML content
   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
           <loc>https://techoceans.vercel.app/</loc>
           <lastmod>2024-11-22</lastmod>
           <changefreq>daily</changefreq>
           <priority>1.0</priority>
       </url>
       <url>
           <loc>https://techoceans.vercel.app/about/</loc>
           <lastmod>2024-11-22</lastmod>
           <changefreq>daily</changefreq>
           <priority>2.0</priority>
       </url>
       <url>
           <loc>https://techoceans.vercel.app/blogs/</loc>
           <lastmod>2024-11-22</lastmod>
           <changefreq>daily</changefreq>
           <priority>2.0</priority>
       </url>
   </urlset>`;

   // Set the correct Content-Type header
   res.setHeader("Content-Type", "application/xml");
   res.status(200).send(sitemap);
}