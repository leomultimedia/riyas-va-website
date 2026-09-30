# Backlink and authority strategy for riyasva.com

Goal: make riyasva.com the page Google, Bing and AI assistants treat as the authoritative source for "Riyas V. A." and related queries ("Riyas VA Maharani", "Atlas Maharani Group chairman", "Maharani Wedding Collections owner"). Links from sites Google already trusts do this; volume does not.

The site itself is ready for this: ProfilePage/Person/Organization schema, an `llms.txt`, clean URLs, and a `sameAs` array waiting for profile links (see CONTENT-CHECKLIST.md).

## Tier 1: links you control (do these first, all free)

| Source | Action | Why it matters |
|---|---|---|
| mymaharani.com and every group brand site | Add "Chairman & Managing Director: Riyas V. A." in the About/Leadership section and footer, linking to https://riyasva.com/ | Same-entity links from the brand domains are the strongest signal that this is the official page |
| Google Business Profile (each of the 25 shops) | Put https://riyasva.com in the "Owner" or description where allowed; keep NAP (name, address, phone) identical everywhere | Feeds Google's knowledge graph about the group and its owner |
| LinkedIn (personal profile + Atlas–Maharani company page) | Website field → riyasva.com; add the URL in the About text | High-authority profile link; also becomes a `sameAs` entry |
| Facebook page, Instagram bio, YouTube channel "About" | Add the link | Profile links for `sameAs`; sends real visitors |
| Email signatures of CMD's office and group leadership | Add the URL | Small but steady referral traffic and brand recall |
| Press kit | Publish a downloadable press kit page (bio, high-resolution portrait, logos, key facts) on riyasva.com | Journalists link to the page they took the photo from |

## Tier 2: earned links from organisations already connected to him

Every award in the Awards section is a potential backlink. Ask each organiser to link the winner's name to riyasva.com on their winners page, or in their post-event article.

- Times Business Awards Kerala (Times of India / Optimal Media) winners page
- News18 Kerala: Malayali of the Year coverage
- Guinness World Records: the record page usually names the record holder; ask for the official-website link
- Businessman of the Year organiser and the association behind the 31st AGM felicitation
- Chambers and trade bodies: Kerala Textile and Garments Dealers Welfare Association, local Chamber of Commerce, Thodupuzha Merchants' Association: member and office-bearer pages
- Educational institutions he has spoken at or supported: "guest lecture" and "sponsor" pages

## Tier 3: media and PR (ongoing)

- Send a short press release for every real milestone (new shop, new brand, award, world record, CSR initiative) to Kerala business desks: The Hindu BusinessLine (Kochi), Mathrubhumi, Manorama, Deshabhimani, Kerala Kaumudi, Onmanorama, Kochi Post, Kerala Business Review. Include the URL in the boilerplate.
- Pitch profile interviews to business podcasts and YouTube channels covering Kerala entrepreneurs; show notes carry links.
- Offer expert quotes on wedding-season retail trends, textile retail in Kerala, and family-business succession. HARO-style services for India: Qwoted, Featured.com, journalist requests on X/LinkedIn.
- Guest columns (with a byline link) in retail trade publications: Images Retail, Indian Retailer, Apparel Resources.

## Tier 4: directories and knowledge bases (one-time, accurate data only)

- Crunchbase (Organization + Person), Wikidata item for Riyas V. A. and for the group (factual, cite the awards coverage), ZaubaCorp/Tofler company pages if the group entities are registered companies, JustDial and Sulekha listings for the shops with the CMD name in descriptions.
- Do not pay for links, use link farms, PBNs or "guest post packages". Google penalises these and the risk to a personal reputation site outweighs any gain.

## Content that attracts links naturally (add to the site over time)

1. **A dated milestone timeline with sources**: journalists and Wikipedia editors cite pages that have dates and references.
2. **The Guinness record story**: a single page with photos, the certificate, the date, how many sarees, who took part. Record pages get linked for years.
3. **Annual "Kerala wedding retail" note**: a short, opinionated yearly commentary. Original data or first-hand observation is what trade press links to.
4. **Speaking and events page**: a list of past and upcoming talks; event organisers link speaker names to their sites.

## Measuring

- Google Search Console: watch the "Links" report and impressions for the name queries above; target the knowledge panel appearing for "Riyas V. A." within 3 to 6 months of Tier 1 and Tier 2 links landing.
- Bing Webmaster Tools and Ahrefs Webmaster Tools (free) for referring domains.
- Review quarterly: add every new profile or article to the JSON-LD `sameAs` array in `index.html`.
