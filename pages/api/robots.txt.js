export default function handler(req, res) {
   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://techoceans.vercel.app/';

   res.setHeader('Content-Type', 'text/plain');
   res.status(200).send(`
User-agent: *
Allow: /


Sitemap: ${baseUrl}/sitemap.xml
   `);
}