# Search Engine Optimization

- **What is SEO**
- **Robots.txt**
- **Open Graph**
- **Schema Markup**
- **Google Site Verification**
- **Sitemap.xml**
- **Indexing**
- **Twitter card**
- **Page Schemas**
- **Crawlers**
- **Spam Protection**
- **Rich Test**

## What is SEO?

SEO (Search Engineer Optimization) is the process of making your website more visible and attractive to search engines. When people search for something that is related to your content, it helps your website show up higher in the search results.

### Why Is SEO Important?

It is important that your website shows up high in the results because a study by [Sistrix](https://www.searchenginejournal.com/google-first-page-clicks/374516/) showed that 28.5 percent of people click the first result that shows up on a page in a search engine with the percentages sharply dropping off each result lower, while almost no one clicks on results on the second page.

**SEO is important because:**

- **Credibilty:** it helps more people find your portfolio higher rankings mean you have more trust and social proof, 

- **Traffic without ads:** you get traffic without having to pay for ads

- **Better UX:** SEI improvements (faster loading, good structure, acessible markup) improves the user experience. 

### Types of SEO

There are three main pillars of SEO. Those pillars are 

1. On-Page SEO - Things you directly control in your code:

- Titles, description, headings.

- Keywords in text.

- Clean urls (/about-me instead of /page?id=2).

- Metada like Open Graph, Twitter Cards, canonical links

- Schema markup (JSON-LD) that gives search engines structured meaning. 

2. Techincal SEO - How well your site is built under the hood:

- Fast loading, mobile-friendly.

- Secure (HTTPS).

- Sitemap and robotos.txt

- Correct canonical URLs (avoid duplicate content issues).

- Indexability (ensuring pages can be crawled and stored).

3. Off-Page SEO - How the wider internet sees your site:

- Backlinks(other sites linking to yours = votes of trust).

- Social signals (shares, mentions).

- Online reputation.

### Summary

SEO is the practice of making your site readable for two audiences at once: humans and search engines. Humans care about design and clarity; search engines care about structure and metadata.

## Robots.txt

robots.txt is a text file that sits at the root of your website (https://example.com/robots.txt)

It tells search engine crawlers like googlebot, bingbot, DuckDuckBot etc., which pages or files are allowed to crawl, and should not be crawled. 

It is essentially a set of traffic rules for bots.

### Why it is important

1. Controls crawl budget - Search engines only spend so much time crawling your site

- You have 100+ pages, but only 5 are important, you don't want bots wasting time on other pages.

2. Keep private or irrelevant pages hidden from bots

- Routes like "/admin, /test /email-sent" doesn't need to be in the search results.

3. Boost SEO indirectly

- By focusing bots on important content, you help search engines index your core pages faster and better.

### How it works

- The file must be called robots.txt

- It must live in the root of your site

- Bots read it before crawling

Here is how it should look:

```
//robots.txt
User-agent: *
Allow: /
Disallow: /admin
Disallow: /email-sent
Sitemap: https://example.com/sitemap.xml
```
### Here's what that means:

- User-agent: * -> applies to all bots

- Allow: / -> crawls everything by default

- Disallow: '/admin, email-sent' -> don't crawl those routes

- Sitemap: -> points bots back to sitemap.xml for faster discovery of pages.

It allows crawlers to see all you public facing pages but skips pages that has no SEO value.

### Important things to know

- **Not a security feature:** If you "Disallow" a route, humans can still type in the URL and see it. Bots can also choose to ignore it. User proper auth for true protection.

- **Indexing vs Crawling:** Disallowing a page may stop it from being crawled, but it other sites link to it, search engines might still index the URL (but without details).

- **Case sensitive:** contact ≠ Contact.

## What is a Sitemap?

A sitemap is an XML file that lists all the important pages of your website so that search engines (Google, Bing, etc.) can discover and index them more efficiently. 

It's like a table of content for your site. 


### Why it is important for SEO

1. Helps crawlers discover content:

- Especially useful for new websites or small sites (like your portfolio) where there aren’t many external links pointing to you yet.

2. Controls Priority 

- You can hint search engines to which pages matter most (priority values).

3. Keeps things fresh

- The lastmod field tells crawlers when a page was last updated, nudging them to re-crawl.

4. Essential for structed sites

- If you have multiple languages, media-heavy content, or subdomains, sitemaps help crawlers understand your structure.

### How does it work?

A typical sitemap.xml looks like this:

```
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com</loc>
    <lastmod>2025-09-06T00:00:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://example.com/about-me</loc>
    <lastmod>2025-09-06T00:00:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://example.com/contact-me</loc>
    <lastmod>2025-09-06T00:00:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

### Key Elements

- <loc> -> URL of the page.

- <lastmod> -> when the page was last updated.

- <changefreq> -> how often it usually changes (daily, weekly, monthly).

<priority> -> hint at importance (1.0 = highest).

### How to Use It

1. Place sitemap.xml in the root. Netlify does this automatically if you generate one.

-> https://example.com/sitemap.xml

2. Reference it in the robot.txt:

```
Sitemap: https://example.com/sitemap.xml
```

3. Submit it in Google Search Console -> this tells Google directly "here are my important pages." 

- Only include important pages that you want visitors to see. Not pages with routes like '/email-sent'.

### Common Mistakes:

- Forgetting to update after new pages are added.

- Blocking important pages in robots.txt (which overrides sitemap).

- Having broken links inside of the sitemap.

## What is Indexing?

Indexing is when a search engine

1. Finds your page (via sitemap, external links, or crawling).

2. Processes the page (reads the HTML, metadata, schema, and content).

3. Stores it in their database(the "Google Index").

It is similar to a library"

- Crawling = discovering new books.

- Indexing = cataloging the books so they can be searched.

- Ranking = deciding which books show up first when you search.

### How Does Google Decide to Index:

Google does not index everything. It looks at:

- Relevance -> Does the page provide value? 
(Home, About, Contact) -> yes
(Email-Sent) -> no

- Quality: -> Is the page accessible, fast, mobile-friendly?

- Meta Tags: ->
<meta name='robots'
content='noindex'> -> tells google not to index.

- Canonical tags -> avoid duplicate content.

### Workflow for a website:

1. **You publish a page** -> /about-me

2. **Sitemap** tells google it exists.

3. **Crawler vists** -> reads HTML, CSS, metadata, schema.

4. **Indexing** -> stores content in Google's Index.

5. **Ranking** -> when someone searches your name, google decides if / or /about-me shows up.

### Why Pages Might Not Be Indexed

- New sites can take days or weeks to be indexed

- No backlinks (Googlebots discovers slower).

- Crawl budget limits (less of an issue for smaller sites).

- robots.txt or noindex blocking it. 

- Thin or duplicate content (Google may skip).

## What is Google Site Verification?

Google site verification is proving to google that you own your site.

- Before Google lets you see private data in Search Console (like indexing status, impressions, clicks, errors), it wants to make sure you're the rightful owner.

- Think of it like showing an ID at a door before you're allowed into your own SERO "control room."