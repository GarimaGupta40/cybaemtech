import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://cybaemtech.com';
const lastmod = '2026-07-27';

// Static pages & Solutions
const pages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/life-at-cybaemtech', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
  { path: '/portfolio', changefreq: 'monthly', priority: '0.9' },
  { path: '/leadership', changefreq: 'monthly', priority: '0.8' },
  { path: '/solutions/enterprise-software', changefreq: 'monthly', priority: '0.9' },
  { path: '/solutions/web-systems', changefreq: 'monthly', priority: '0.9' },
  { path: '/solutions/it-staff-augmentation', changefreq: 'monthly', priority: '0.9' },
  { path: '/solutions/managed-it', changefreq: 'monthly', priority: '0.9' },
  { path: '/solutions/digital-revenue-growth', changefreq: 'monthly', priority: '0.9' },
  { path: '/solutions/it-infrastructure-services', changefreq: 'monthly', priority: '0.9' },
  { path: '/solutions/managed-it-cloud-security', changefreq: 'monthly', priority: '0.9' },
  { path: '/blog', changefreq: 'weekly', priority: '0.7' },
  { path: '/accessibility', changefreq: 'yearly', priority: '0.3' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms-of-service', changefreq: 'yearly', priority: '0.3' },
  { path: '/cookie-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/refund-cancellation-policy', changefreq: 'yearly', priority: '0.3' }
];

// Leaders from src/pages/Leadership.tsx
const leaders = [
  'rohan-bhosale',
  'akshay-navle',
  'yash-bhalekar',
  'dilip-d\'souza',
  'mr.-sanjay-mahadeo-bobde'
];

// Blog posts extracted from Google Sheet
const blogSlugs = [
  'business-technology-trends-in-2026-smarter-digital-solutions-for-growth',
  'case-studies-brands-that-transformed-sales-through-touchpoint-optimization',
  'understanding-buyer-behaviour-through-digital-touchpoint-analysis',
  'how-to-turn-website-visitors-into-it-service-leads',
  'how-an-seo-ppc-agency-for-it-companies-drives-b2b-leads',
  'end-to-end-b2b-digital-marketing-services-in-india-for-high-value-leads',
  'the-role-of-content-marketing-in-building-a-strong-business-brand-online',
  'how-saas-startups-in-pune-can-scale-faster-with-seo-google-ads',
  'real-estate-co-working-lead-generation-with-meta-and-google-ads-digital-marketing-company-in-pune',
  'how-pune-clinics-doctors-can-get-more-leads-with-digital-marketing',
  'best-digital-marketing-strategy-for-pune-it-saas-companies-cybaem-tech',
  'why-authenticity-beats-algorithms-in-modern-marketing',
  'strengthening-digital-trust-why-cybersecurity-is-every-businesss-priority',
  'from-data-to-delight-how-ai-personalization-shapes-the-modern-customer-journey',
  'the-rise-of-ai-driven-personalization-crafting-experiences-that-convert',
  'the-psychology-of-digital-trust-why-customers-choose-one-brand-over-another',
  'how-to-build-a-brand-from-the-ground-up-with-digital-marketing',
  'brand-storytelling-that-actually-resonates-in-a-noisy-world'
];

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// 1. Add static pages
for (const page of pages) {
  xml += '  <url>\n';
  xml += `    <loc>${BASE_URL}${page.path}</loc>\n`;
  xml += `    <lastmod>${lastmod}</lastmod>\n`;
  xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
  xml += `    <priority>${page.priority}</priority>\n`;
  xml += '  </url>\n';
}

// 2. Add leadership profiles
for (const leader of leaders) {
  // Escape quote character for XML
  const escapedLeader = leader.replace(/'/g, '&apos;');
  xml += '  <url>\n';
  xml += `    <loc>${BASE_URL}/leadership/${escapedLeader}</loc>\n`;
  xml += `    <lastmod>${lastmod}</lastmod>\n`;
  xml += `    <changefreq>monthly</changefreq>\n`;
  xml += `    <priority>0.6</priority>\n`;
  xml += '  </url>\n';
}

// 3. Add blog posts
for (const slug of blogSlugs) {
  xml += '  <url>\n';
  xml += `    <loc>${BASE_URL}/blog/${slug}</loc>\n`;
  xml += `    <lastmod>${lastmod}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.6</priority>\n`;
  xml += '  </url>\n';
}

xml += '</urlset>\n';

fs.writeFileSync(path.resolve('public/sitemap.xml'), xml, 'utf8');
console.log('Sitemap generated successfully in public/sitemap.xml!');
