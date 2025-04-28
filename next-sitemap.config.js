// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://ybonesolutions.com', // your website URL
    generateRobotsTxt: true, // Generate robots.txt automatically
    sitemapSize: 5000,
    changefreq: 'weekly',
    priority: 0.7,
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' }
      ],
    },
  };
  