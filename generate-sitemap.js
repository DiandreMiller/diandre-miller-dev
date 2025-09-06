import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/about-me', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact-me', changefreq: 'monthly', priority: 0.7 },
];

// Base URL of deployed site
const hostname = 'https://diandremillerdev.netlify.app';

const stream = new SitemapStream({ hostname });

links.forEach(link => stream.write(link));
stream.end();

streamToPromise(stream).then(sm =>
  createWriteStream('./public/sitemap.xml').write(sm)
);