import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const today = new Date().toISOString().split('T')[0];
const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0, lastmod: today },
  { url: '/about-me', changefreq: 'monthly', priority: 0.8, lastmod: today },
  { url: '/contact-me', changefreq: 'monthly', priority: 0.7, lastmod: today },
];

// Base URL of deployed site
const hostname = 'https://diandremillerdev.netlify.app';

const stream = new SitemapStream({ hostname });

links.forEach(link => stream.write(link));
stream.end();

streamToPromise(stream).then(sm =>
  createWriteStream('./public/sitemap.xml').write(sm)
);