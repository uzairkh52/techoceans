const robotsTxtConfig = {
  rules: [
    { userAgent: '*', allow: '/' },
    { userAgent: 'Googlebot', disallow: '/private' },
  ],
  sitemap: 'https://techoceans.vercel.app/sitemap.xml',
};