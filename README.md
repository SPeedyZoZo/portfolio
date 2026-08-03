# Personal Portfolio
*Node 18+ recommended. `npm run dev`/`npm run build` work out of the box — the `--openssl-legacy-provider` flag needed for Next.js 10/webpack 4-era hashing on Node 17+'s OpenSSL 3 is baked into the npm scripts via `cross-env`. Only needed manually if you invoke `next` directly instead of through npm.*

## Planned Features:
*[High Priority]*
~~- Need to add more projects (everything from 3rd year uni and more)~~
~~- Update everything to display that I am no longer a university student~~
~~- Include current work projects~~

*[Low Priority]*
~~- Add a check box to enable the mouse trail~~ (delivered as a full Settings panel — see v1.4.0)
  - Make the mouse trail default to invisible when you open the website
- Add blog for suggestions to be made directly on the website


## Deployment (SiteGround — zaid.netreviews.ai)

This is a static export (no Node server required on the host):

1. `npm ci`
2. `npm run build` — runs `next build && next export`, producing a static site in `out/`
3. Upload the **contents** of `out/` (not the folder itself) to the `zaid.netreviews.ai` document root via SiteGround's File Manager or SFTP
4. `out/.htaccess` is included automatically (copied from `public/.htaccess` during export) — it forces HTTPS, serves the custom 404 page, and sets caching/compression headers
5. Google Analytics (`G-EDYZW9VV7Y`) and Plerdy tracking are now baked into the build via `src/pages/_document.js`, so they survive every rebuild — no more manually editing the exported `index.html` after the fact

## Changelog:

### v1.2.2 - *August 3, 2026*
- Implemented Light Mode (previously a locked "coming soon" toggle in Settings). Built a CSS custom-property theme system (`--bg-primary`, `--text-primary/secondary/tertiary`, `--border-color`, etc., defined for dark and overridden under `:root[data-theme="light"]`) and converted every component's hardcoded colors to it — Header, Footer, Hero, Contact, Settings panel, Projects, Experience, Technologies, Timeline, and Accomplishments all now adapt.
- The mouse-trail "Classic" color now resolves to `var(--text-primary)` instead of a fixed white, so it stays visible instead of disappearing against a light background.
- The landing intro animation and the decorative background diamond lines also adapt their colors to the active theme instead of staying hardcoded for dark.
- Added a small blocking inline script in `_document.js` that applies the saved theme before first paint, so returning light-mode visitors don't see a flash of the dark theme while the page hydrates.
- Theme choice persists via the existing Settings `localStorage`, same as the other preferences.

### v1.4.0 - *August 2, 2026*
- **Fixed a major SEO bug**: every page section (Hero, Experience, Projects, Technologies, Timeline, Accomplishments) was excluded from the static export via `ssr: false` dynamic imports, so search engines and social-media link previews were seeing an almost-empty page. Switched to static imports so the full page now renders in the exported HTML.
- Added proper metadata: page title/description, Open Graph and Twitter card tags, and a canonical URL. Wired up the favicon/manifest files that existed in `public/` but were never linked anywhere. Added `robots.txt` and `sitemap.xml`.
- Accessibility: restored a visible keyboard focus indicator site-wide (previously `outline: none` was set everywhere with nothing to replace it, so keyboard navigation had no visual feedback).
- Fixed two React console warnings (a raw `stroke-width` SVG attribute, and a boolean `title` prop that was colliding with the native HTML `title` tooltip attribute).
- Added a Settings panel (gear icon, bottom-right): toggle the mouse trail on/off, pick from 6 trail colors, adjust trail size/length/density, and toggle the landing animation and background motion — all persisted via `localStorage`. Light Mode is shown but intentionally locked ("coming soon").
- Fixed a crash where toggling the landing animation off after it had already auto-hidden itself would take down the whole app — it was removing its own DOM node directly instead of through React state.
- Redesigned the Hero section: added a role/specialisation badge, tightened the bio, and replaced a single ambiguous button with clear "View My Work" / "Get In Touch" actions.
- Added a dedicated Contact section — contact info was previously just small text at the very bottom of the footer.
- Fixed the header nav: it only had responsive spacing defined for one breakpoint, so links had zero gap and ran together on tablet/small-laptop widths. Rebuilt with a flexbox layout that scales cleanly from mobile to large desktop.
- Tightened project card sizing (removed an oversized fixed `min-height` that left large empty gaps under shorter descriptions).
- Refreshed the Hero bio and Contact section copy: softened freelance-availability language and reframed the Contact section around new opportunities rather than freelance project pitches, since I'm not taking on freelance work while job-hunting. General tone/emphasis pass to read well for financial-services/fintech consulting roles.
- Fixed `npm run dev`/`npm run build` failing with an OpenSSL error out of the box on Node 17+ — baked the `--openssl-legacy-provider` flag into the npm scripts via `cross-env` instead of requiring it to be set manually every time.

### v1.3.0 - *August 1, 2026*
- Marked the Caltech AI/ML postgraduate program as completed (was showing "Ongoing"); updated bio and added a 2026 timeline entry
- Fixed a real performance bug in the mouse "spark" trail: sparks were only ever cleaned up on a 10-second timer with no throttling, so moving the mouse quickly could pile up thousands of DOM nodes and visibly lag the page. Rewrote it to throttle via `requestAnimationFrame`, cap the number of live sparks, and clean each one up individually shortly after it's created
- Fixed the header nav links (Experience / Projects / Technologies / About) — they were rendering with no `href` at all (Next's legacy `Link` only auto-forwards `href` to a plain `<a>` child, not a styled-component), so clicking them did nothing. Added `passHref`
- Removed two project "Visit" buttons that pointed at now-deleted GitHub repos (FDM Expense Management App, Trip Planning Weather App) instead of linking to 404s; the Visit button now only renders when a project has a link
- Moved the Google Analytics snippet out of manual post-build edits to the exported `index.html` and into `_document.js`, so analytics tracking is no longer wiped by every fresh build
- Compressed all project/logo PNGs (~2.3MB → ~820KB, ~64% smaller) and added lazy loading to project card images
- Removed unused boilerplate: the default Next.js `api/hello.js` route (unsupported by static export anyway), the unused `vercel.svg`, and an orphaned, never-imported `NavDropDown` component
- Added `next.config.js` (`reactStrictMode`, `trailingSlash`) and a `public/.htaccess` for SiteGround (HTTPS redirect, gzip, long-term caching on hashed assets, custom 404)

### v1.2.0 - *August 1, 2026*
- Added a new "Experience" section with current and past work history:
  - Robiquity (Associate Technical Consultant)
  - Freelance (Automation and AI Engineer)
  - ProspHER (Team Leader, US Market Expansion)
  - KAPSARC (Mobile Application Tester)
- Added a Certifications list (PL-900, Copilot Studio, Caltech AI/ML, Google UX, Purdue Gen AI, UiPath)
- Rewrote homepage bio to reflect current role instead of "recent graduate" framing
- Updated Technologies section to include Power Platform, RPA, UiPath, Copilot Studio, Python, LangChain and Azure OpenAI
- Updated timeline entries for 2024 and 2025 to reflect graduation, freelance work, and joining Robiquity
- Added "Experience" link to site navigation
- Fixed footer LinkedIn/Instagram links to point to correct profiles

### v1.1.0 - *June 30, 2024*
- Added Google Analytics integration (for testing) *September 19, 2024*
- Added Plerdy tracking integration (for testing)

### v1.0.5 - *May 30, 2024*
- Added some more projects with photos, mostly from my 3rd year of University:
  - VisualPromptBuilder
  - ImmunoFortress
  - Spotify Web API Playlist/Song Analyser
  - LearnerLens
- Removed sunsetted projects
- Updated any time frames which were out of date
- Renamed all mentions of 'Unity3d' to be simply called 'Unity'
- Added two more years to the timeline, 2024 and 2025, and updated 2023

### v1.0.4 - *May 21, 2024*
- Updated and added favicons
- Added hover and click effects to the project cards
- Added minimum height and fit images for project cards. Added a break line between project stack and project description
- Updated phone number
- Hidden cursor
- Changed website logo slightly


### v1.0.3 - *Aug 15, 2023*
- Added visit buttons to projects which send to websites accordingly
    - Successfully linked the Paw Troopers website to the project visit page at: https://pawtroopers.com

### v1.0.2 hotfix - *Aug 10, 2023*
- Fixed all animation effects on mobile and PC devices

### v1.0.2 - *Aug 10, 2023*
- Added 'white hot' cursor trail which follows mouse
- Added 'blue glow' effect on mouse click
- Added a brief start up animation on site load

### v1.0.1 - *Aug 9, 2023*
- Added new projects with corresponding tags and descriptions for each project:
    - Added 'ShapeTime Continuum' Project
    - Added 'Trip Planning Weather App' Project
    - Added 'FDM Expense Management App' Project

- Added personal accomplishments:
    - Added '6 Projects Worked On (and counting)'
    - Added '8 Years Since I Started Learning Unity'
    - Added '5 Years Since I Started Learning UI/UX'
    - Added '12 Years Since I Started Learning To Code'
    - Added '0 signs of slowing down :)'

### v1.0.0 - *Aug 2, 2023*
- Created website.
- Published all content on subdomain https://zaid.netreviews.ai/