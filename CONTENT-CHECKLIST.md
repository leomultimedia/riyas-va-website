# Content verification checklist: before going live

Facts below were taken from the previous site or read off the award photographs. Each one should be confirmed by CMD's office before publishing. Tick and delete this file when done.

## Must confirm

- [ ] **Domain**: the site assumes `https://riyasva.com`. If different, replace in `index.html`, `privacy.html`, `sitemap.xml`, `robots.txt`, `.well-known/security.txt`.
- [ ] **Email**: `contact@riyasva.com` is used in Contact, FAQ, privacy page and `security.txt`. Confirm the mailbox exists and is monitored.
- [ ] **Family photo**: the Family section shows the group photograph supplied earlier. Confirm every person in it has agreed to appear on a public website (this matters most for any minors). Remove the section if not approved.
- [ ] **Headline numbers**: “25 shops across Kerala”, “400+ people”, “6 retail brands”, “65,000 sq ft, Kerala’s largest bridal showroom” (as supplied on 30 Sep 2026).
- [ ] **Brand descriptions**: the one-line description under each logo (Maharani Wedding Collections, Atlas Fashion, @less Fashion, @less GO, Megamart, Liza Fashions) was written generically; replace with the official positioning if available.

## Awards: confirm exact title, organiser and year

| Card | Read from photo | Confirm |
|---|---|---|
| Times Business Awards Kerala: Spirit of Excellence | Certificate shows *Times Business Awards Kerala 2026 · Spirit of Excellence · Maharani Wedding Collections* | Category wording, year |
| Malayali of the Year: News18 Kerala | Backdrop shows *News18 Kerala · Malayali of the Year* | Year, category (e.g. Business) |
| Guinness World Records: World’s Largest Saree Pookkalam | Certificate reads *World’s Largest Saree Pookkalam* | Date, official record wording, location |
| Businessman of the Year | Screen shows *Businessman of The Year: Riyas V.A* | Organiser, year |
| Honoured at the 31st Annual General Meeting | Backdrop shows *31st Annual General Meeting* | Organisation name, year, what the memento was for |

The earlier `award-4.png` was an exact duplicate of `award-1.png`, so it was dropped. If there is a sixth award, add its photo to `assets/img/` and copy an `<li class="award-card">` block.

## Optional: improves Google “knowledge panel” results

- [ ] Personal **LinkedIn / Instagram / Facebook** profile URLs for Riyas V. A.: add them to the `"sameAs": []` array in the JSON-LD in `index.html` and as rows in the Contact list.
- [ ] Official **YouTube channel** URL: add to Organization `sameAs`.
- [ ] Wikipedia / Wikidata entry, if one exists: add to `sameAs`.
- [ ] Press articles (newspaper / online coverage): a “Press” list with links can be added under Media.
- [ ] A short **Malayalam** version of the hero line and about paragraph, if a bilingual site is wanted.

## Launch tasks (after hosting)

- [ ] Google Search Console: verify domain, submit sitemap.
- [ ] Bing Webmaster Tools: import from Search Console.
- [ ] Google Business Profile for the group, linking to this site.
- [ ] Facebook share debugger → “Scrape again” so the new preview card appears.
- [ ] Submit to hstspreload.org once HTTPS is stable.
