# Agent Instructions

You're working inside the **WAT framework** (Workflows, Agents, Tools). This architecture separates concerns so that probabilistic AI handles reasoning while deterministic code handles execution. That separation is what makes this system reliable.

## The WAT Architecture

**Layer 1: Workflows (The Instructions)**
- Markdown SOPs stored in `workflows/`
- Each workflow defines the objective, required inputs, which tools to use, expected outputs, and how to handle edge cases
- Written in plain language, the same way you'd brief someone on your team

**Layer 2: Agents (The Decision-Maker)**
- This is your role. You're responsible for intelligent coordination.
- Read the relevant workflow, run tools in the correct sequence, handle failures gracefully, and ask clarifying questions when needed
- You connect intent to execution without trying to do everything yourself
- Example: If you need to pull data from a website, don't attempt it directly. Read `workflows/scrape_website.md`, figure out the required inputs, then execute `tools/scrape_single_site.py`

**Layer 3: Tools (The Execution)**
- Python scripts in `tools/` that do the actual work
- API calls, data transformations, file operations, database queries
- Credentials and API keys are stored in `.env`
- These scripts are consistent, testable, and fast

**Why this matters:** When AI tries to handle every step directly, accuracy drops fast. If each step is 90% accurate, you're down to 59% success after just five steps. By offloading execution to deterministic scripts, you stay focused on orchestration and decision-making where you excel.

## How to Operate

**1. Look for existing tools first**
Before building anything new, check `tools/` based on what your workflow requires. Only create new scripts when nothing exists for that task.

**2. Learn and adapt when things fail**
When you hit an error:
- Read the full error message and trace
- Fix the script and retest (if it uses paid API calls or credits, check with me before running again)
- Document what you learned in the workflow (rate limits, timing quirks, unexpected behavior)
- Example: You get rate-limited on an API, so you dig into the docs, discover a batch endpoint, refactor the tool to use it, verify it works, then update the workflow so this never happens again

**3. Keep workflows current**
Workflows should evolve as you learn. When you find better methods, discover constraints, or encounter recurring issues, update the workflow. That said, don't create or overwrite workflows without asking unless I explicitly tell you to. These are your instructions and need to be preserved and refined, not tossed after one use.

## The Self-Improvement Loop

Every failure is a chance to make the system stronger:
1. Identify what broke
2. Fix the tool
3. Verify the fix works
4. Update the workflow with the new approach
5. Move on with a more robust system

This loop is how the framework improves over time.

## File Structure

**What goes where:**
- **Deliverables**: Final outputs go to cloud services (Google Sheets, Slides, etc.) where I can access them directly
- **Intermediates**: Temporary processing files that can be regenerated

**Directory layout:**
```
.tmp/           # Temporary files (scraped data, intermediate exports). Regenerated as needed.
tools/          # Python scripts for deterministic execution
workflows/      # Markdown SOPs defining what to do and how
.env            # API keys and environment variables (NEVER store secrets anywhere else)
credentials.json, token.json  # Google OAuth (gitignored)
```

**Core principle:** Local files are just for processing. Anything I need to see or use lives in cloud services. Everything in `.tmp/` is disposable.

## Bottom Line

You sit between what I want (workflows) and what actually gets done (tools). Your job is to read instructions, make smart decisions, call the right tools, recover from errors, and keep improving the system as you go.

Stay pragmatic. Stay reliable. Keep learning.

---

## Soni Vision Website Project

### Design References
Two nationally recognized elite surgical practices in LA — use these as the quality and positioning benchmark:

1. **Maloney-Shamie Vision Institute** — `maloneyshamievision.com`
   - Primary design inspiration. Premium boutique surgical practice aesthetic.
   - Teal/seafoam brand color (`#254c53`), serif display font (`ivypresto-display`) + sans-serif body (`europa`)
   - Fixed header, smooth transitions, restrained color use, lots of white space
   - Feel: sophisticated, high-end, surgical — not clinical or corporate

2. **Advanced Vision Care** — `advancedvisioncare.com`
   - Reference for physician presentation and credentials layout
   - Physician-first layout: headshots + expandable bios + achievement badges
   - Clean white grid, dark navy accents (`#0d3450`)

### Soni Vision Brand Assets
Located in `Branding/`:
- `soni-logo.svg` — Full vector logo. Brand colors: `#32384e` (navy) + `#499188` (teal). Tagline: "STORE · RENEW · REIMAGINE"
- `soni.webp` — Dr. Soni hero headshot (arms crossed, clinic waiting room, blue art behind her)
- `soni 3.webp` — Dr. Soni editorial (gold arched mirror, clinic hallway)
- `reddy 1.webp` — Dr. Reddy with patient in exam room (clinical/candid)
- `reddy 2.webp` — Dr. Reddy full-length in clinic with eye painting
- `reddy 3.webp` — Dr. Reddy clean professional headshot
- `both docs.webp` — Both doctors together, professional corridor shoot
- `soni 2_files/2023-08-17.jpg` — Surgery scrub-in photo (authenticates surgical focus)

### Workflows (Slash Commands)
Three review workflows available via slash commands:
- `/code-review` — Pragmatic code review before any push
- `/design-review` — Visual review using Playwright MCP across desktop/tablet/mobile
- `/security-review` — Security-focused review for any new form handling or user input

Agents live in `.claude/agents/`. Commands in `.claude/commands/`. Context in `context/`.

### Quick Visual Check (After Any Front-End Change)
IMMEDIATELY after implementing any front-end change:
1. Use Playwright MCP to navigate to the affected page(s)
2. Take a screenshot at desktop (1440px) and mobile (390px)
3. Verify against `context/design-principles.md` and `context/style-guide.md`
4. Check browser console for errors
5. For major changes, run `/design-review` for full report

### Build Standards
- Plain HTML / CSS / Vanilla JS — no frameworks
- Serif display font for headings (matches premium surgical practice feel)
- Physician-first layout — lead with the doctors, not the services
- 4.95 stars (best in Houston) featured prominently on every page
- Schema markup on every page: MedicalOrganization + Physician + FAQPage
- Mobile-first, fast-loading
- Surgical-only positioning — not a glasses shop, not a chain

### Pages to Build
1. `index.html` — Homepage
2. `about.html` — Dr. Soni + Dr. Reddy bios
3. `cataract-surgery.html` — Core service page
4. `premium-iols.html` — Dedicated IOL page (biggest gap in market)
5. `lasik.html` — Secondary service page
6. `contact.html` — Location, hours, booking
7. `blog/` — Content hub for keyword rankings

### Reference Screenshots
Saved in `temporary screenshots/`:
- `screenshot-1-maloney-shamie.png` — Maloney-Shamie live site
- `screenshot-2-advanced-vision-care.png` — Advanced Vision Care physicians page (live)
- `screenshot-3-maloney-shamie-local.png` — Maloney-Shamie from local saved HTML
- `screenshot-4-advanced-vision-care-local.png` — Advanced Vision Care from local saved HTML
- `screenshot-5-soni-vision-live.png` — Current Soni Vision live site (what we're replacing)

### Current Soni Vision Site — What to Fix
Live site: `sonivisioninstitute.com`
- H1 "LEADING EDGE SURGICAL PRACTICE" — broken, generic, no SEO value
- 4.95 stars completely hidden — buried at bottom, should be front and center
- Clip art service icons — looks cheap
- Doctors buried halfway down the page
- No white space, cramped layout
- Feels like a template, not a premium practice
- "The Patient-First Ophthalmology Practice" copy near bottom — good, keep this concept
- Review section exists but is an afterthought

### Maloney-Shamie Design System (extracted from source)
- **Fonts:** `ivypresto-display` (serif, headings) + `europa` (sans-serif, body)
- **Brand teal:** `#254c53` | **Body text:** `#222` | **Light bg:** `#efefef` | **Dark sections:** `#1a1a1a`
- **Font sizes:** Hero 48–72px | H2 40–48px | H3 28–32px | Body 16–18px
- **Letter spacing:** 0.8px body, 1px headings
- **Line height:** 1.4 body, 1.15 headings
- **Border radius:** 2px buttons/cards
- **Section padding:** 40px standard, 80px large

### Advanced Vision Care Design System (extracted from source)
- **Font:** `akagi-pro` (geometric sans-serif)
- **Navy:** `#0d3450` | **White:** `#ffffff`
- **Font sizes:** Hero 70px | Headings 35px | Body 15–18px

### Screenshot Iteration Workflow
When building, use this loop to refine quality:
1. Build/edit HTML
2. Serve locally: `python3 -m http.server 3000`
3. Screenshot: `node screenshot.mjs http://localhost:3000 label`
4. Read PNG with Read tool — compare against reference screenshots
5. Identify specific issues (font size, spacing, color, alignment)
6. Fix and repeat until it matches Maloney-Shamie quality
- `screenshot.mjs` lives in project root, auto-increments filenames

### GitHub Repository
`https://github.com/spatel0115/soni-vision-website` (public)
Push changes with `git add [files] && git commit -m "message" && git push`

### Pages Built (all complete)
- `index.html` — Homepage ✅
- `about.html` — Dr. Soni + Dr. Reddy bios ✅
- `cataract-surgery.html` — Core service page ✅
- `premium-iols.html` — Dedicated IOL page ✅
- `lasik.html` — LASIK & EVO ICL page ✅
- `contact.html` — Location, hours, appointment form ✅
- `blog/index.html` — Blog listing page ✅
- `blog/premium-iol-options-houston.html` — by Dr. Soni ✅
- `blog/evo-icl-vs-lasik-houston.html` — by Dr. Reddy ✅
- `blog/how-to-choose-cataract-surgeon-cypress-tx.html` — by Dr. Soni ✅
- `blog/multifocal-iol-pros-and-cons.html` — by Dr. Reddy ✅

### Design Decisions Made
- **Header**: White background (not navy), always visible — scroll toggle removed from all pages. Nav text is navy. CTA button hidden on mobile (≤768px). Hamburger menu opens a navy dropdown with white text.
- **Homepage hero photo**: `dr-soni-hero.webp` (Dr. Soni solo). `both-doctors.webp` exists but was reverted.
- **Inner page heroes (.page-hero)**: Reduced from 160px/90px padding to 110px/52px. Text spans full width.
- **Mobile**: Comprehensive responsive fixes applied — hero photo shows below text, stats in 3-column row, surgeon card photos 320px (not 420px), section padding 72px on mobile.

### Screenshot Workflow — Mobile
For mobile screenshots, use Puppeteer inline (not `screenshot.mjs` which requires a URL arg):
```js
node -e "import('puppeteer').then(async ({default: p}) => {
  const b = await p.launch({ headless: true });
  const page = await b.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('file:///Users/mbp/Desktop/Claude/Soni%20Vision%20Website/index.html', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'temporary screenshots/mobile.png', clip: { x:0, y:0, width:390, height:750 } });
  await b.close();
});"
```

---

## SEO Strategy

### Current State (March 2026)
- **76 ranking keywords** (Berkeley: 10,186 | Whitsett: 890)
- **365 visits/month** (Berkeley: 52,889)
- **SEO score: 55.3/100** (top competitors: 84.8)

### Priority 1 — Technical SEO (DONE ✅)
All fixed in the new site build:
- Proper H1s on every page
- Meta titles + descriptions
- Schema markup: MedicalOrganization + Physician + FAQPage
- Canonical URLs
- Dedicated premium-iols.html (no competitor does this well)

### Priority 2 — Google Business Profile (DO THIS FIRST)
Fastest win available. 4.95 rating is already there — needs optimization:
- List every service: Cataract Surgery, LASIK, Premium IOLs, EVO ICL
- Add new website URL when live
- Upload professional photos from Branding folder
- NAP must match site exactly (see below)
- Post weekly Google Posts (2-3 sentences + link to a page)

### Priority 3 — NAP Consistency (Critical)
Every directory listing must match exactly:
**Soni Vision Institute · 27700 Northwest Freeway, Suite 390, Cypress, TX 77433 · (346) 818-6780**

Get listed on:
- Healthgrades
- Zocdoc
- Vitals
- US News Health
- WebMD Physician Directory
- Yelp
- Texas Medical Association directory

### Priority 4 — Blog Content (Biggest Long-Term Lever)
Berkeley's 52,889 visits/month is almost entirely content-driven. Target high-intent, low-competition keywords competitors ignore:

1. "Premium IOL options Houston" — no one owns this
2. "EVO ICL vs LASIK Houston" — high intent, thin competition
3. "Best cataract surgeon Cypress TX" — local, low competition
4. "Light adjustable lens Houston" — emerging, zero competition
5. "Multifocal IOL pros and cons" — high volume, educational
6. "How to choose a cataract surgeon" — top of funnel

Blog structure: `blog/index.html` + individual post pages under `blog/`

### Priority 5 — Backlinks
- Houston medical association sites
- Local Cypress/Katy news or community sites
- Press releases when adding new technology
- Guest posts on optometry blogs (referral network)
- YouTube patient testimonial videos (link back to site)

---

## Additional SEO Levers (Next Phase)

### Google Business Profile Optimization (Biggest Local Win)
- Add all services as individual GBP "Services" entries (Cataract Surgery, LASIK, EVO ICL, Premium IOLs — each separately)
- Upload 15–20 photos: interior, both doctors, equipment
- Post weekly — short updates signal activity to Google (e.g. "Now offering light-adjustable lenses")
- Add your own Q&A proactively and answer them
- Link to specific service pages from GBP posts

### Directory Citations (Do All of These)
Exact NAP: `Soni Vision Institute | 27700 Northwest Freeway, Suite 390, Cypress, TX 77433 | (346) 818-6780`
- Healthgrades, Vitals, WebMD, Zocdoc — mandatory for medical SEO
- Yelp, BBB, Bing Places — general directories
- American Academy of Ophthalmology physician finder
- Texas Medical Association directory

### Review Velocity Strategy
- 4.95 stars is the best in Houston — but Berkeley has 10x the review count (volume matters for ranking)
- Build a follow-up text/email sequence asking patients for a Google review after each visit
- Add a QR code at checkout linking directly to the GBP review page
- Every 10 new reviews is a measurable ranking signal

### Blog — Next Article Targets (publish monthly minimum)
1. "Light adjustable lens Houston" — emerging keyword, near-zero competition
2. "Cataract surgery recovery what to expect"
3. "Is LASIK worth it in 2025"
4. "What to expect at your cataract consultation"
Content compounds over time — Berkeley's traffic dominance is 5+ years of consistent publishing.

### Technical Quick Wins (Easy, High Value)
- Add `sitemap.xml` — tells Google all pages exist
- Add `robots.txt`
- Compress images further (webp is good, run through Squoosh)
- Add breadcrumb JSON-LD schema to blog articles
- Consider adding `rel="author"` linking to About page on blog posts

### Backlink Strategy
- **Local news:** Houston Chronicle / Cypress community — a surgeon with the city's highest ophthalmology rating is a story
- **Referring ODs:** Ask 2–3 local optometrists who refer patients to list Soni Vision on their referral page
- **Cypress Chamber of Commerce** — business listing with a backlink
- **Press releases** — announce new technology (EVO ICL, light-adjustable lens)
- **YouTube** — patient testimonial videos with site link in description

