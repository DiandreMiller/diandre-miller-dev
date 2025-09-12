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