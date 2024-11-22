/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://techoceans.vercel.app', // Replace with your website URL
    generateRobotsTxt: true,          // Generate robots.txt file
    changefreq: 'daily',              // How often pages change
    priority: 0.7,                    // Priority of URLs
    sitemapSize: 5000,                // Max URLs per sitemap file
    exclude: ['/admin/*', '/secret'], // Exclude specific paths
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' }, // Allow all user agents
        ],
    },
};