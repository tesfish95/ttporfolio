# Portfolio Site

A simple, dependency-free personal portfolio built with plain HTML and CSS.

## Files
- `index.html` — page content
- `style.css` — all styling
- `script.js` — the terminal typing effect on the hero section

## 1. Customize it
Open `index.html` and replace the placeholder content:
- Your name (in the `<title>`, the hero, and the footer)
- The `mailto:you@example.com` links and social links in the Contact section
- The About section facts (location, degree, focus area)
- Skills tags
- Project entries — swap in your real repos, descriptions, and `href` links

Colors and fonts live at the top of `style.css` under `:root` if you want to adjust the palette.

## 2. Run it locally
No build step or dependencies needed. Pick either option:

**Option A — just open the file**
Double-click `index.html`, or open it from your browser with `File > Open`.

**Option B — local server (recommended, avoids some path quirks)**
From inside the project folder:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

## 3. Deploy to Netlify

**Fastest way — drag and drop:**
1. Go to [app.netlify.com](https://app.netlify.com) and log in (or sign up).
2. On your dashboard, look for the "Deploys" drag-and-drop area (usually under **Sites**).
3. Drag your whole `portfolio` folder onto it.
4. Netlify uploads the files and gives you a live URL like `random-name-123.netlify.app` within seconds.
5. Optionally rename the site: **Site settings → Change site name**.

**Better way — connect a Git repo (auto-deploys on every push):**
1. Push this folder to a new GitHub repository.
2. In Netlify, click **Add new site → Import an existing project**.
3. Connect your GitHub account and pick the repo.
4. Build settings: leave the build command blank and set the publish directory to `.` (this is a static site, nothing to build).
5. Click **Deploy site**. From now on, every push to your repo redeploys automatically.

## Notes
- The site is fully static — no framework, no npm install, no build step.
- Fonts (Space Grotesk, Inter, JetBrains Mono) load from Google Fonts via the `<link>` tags in `index.html`; keep an internet connection when viewing, or self-host them if you want it to work fully offline.
- The typing animation respects `prefers-reduced-motion` and shows the final text immediately for users who have that setting enabled.
