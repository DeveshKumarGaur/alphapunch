# 🔥 ALPHAPUNCH — Website

> *Baby Punch grows up. The zoo will never be the same.*

A wild, revengeful memecoin website for **$ALPHAPUNCH** built on Solana.

---

## 📁 Project Structure

```
alphapunch/
├── index.html        ← Main HTML page
├── css/
│   └── style.css     ← All styles, animations, layout
├── js/
│   └── main.js       ← Fire particles, scroll reveal, copy CA
├── package.json      ← Dev server & deploy scripts
└── README.md         ← This file
```

---

## 🚀 Quick Start (Local Preview)

**Option 1 — No install needed (Python):**
```bash
python3 -m http.server 3000
```
Then open: http://localhost:3000

**Option 2 — Node.js:**
```bash
npm install
npm run dev
```
Then open: http://localhost:3000

---

## ✏️ Customisation Checklist

Before going live, update the following in `index.html`:

| What | Where | Replace with |
|------|-------|-------------|
| Contract Address | Line with `id="ca"` | Your real Solana CA |
| Twitter/X link | `href="#"` on X card | Your Twitter URL |
| Telegram link | `href="#"` on Telegram card | Your Telegram URL |
| Dexscreener link | `href="#"` on Dexscreener card | Your Dexscreener URL |
| Raydium link | `href="#"` on Raydium card | Your Raydium pool URL |

---

## 🌐 Deploy — Free Options

### Netlify (Recommended — easiest)
1. Go to [netlify.com](https://netlify.com) → Sign up free
2. Drag and drop the **alphapunch** folder onto the deploy area
3. Done — live in 30 seconds ⚡

### Vercel
1. Go to [vercel.com](https://vercel.com) → Sign up free
2. Click "Add New Project" → Upload folder
3. Deploy!

### GitHub Pages
1. Create a new GitHub repo
2. Push all files to the `main` branch
3. Go to Settings → Pages → Source: `main` branch
4. Your site will be live at `https://yourusername.github.io/alphapunch`

---

## 🎨 Customisation Tips

- **Change colors** → Edit CSS variables at the top of `css/style.css`
- **Change token supply or tax** → Edit `.toko-card` content in `index.html`
- **Add your logo image** → Replace the `.monkey-bg` emoji with an `<img>` tag
- **Change fonts** → Swap the Google Fonts link in `<head>` and update `font-family` in CSS

---

## 📜 Disclaimer

$ALPHAPUNCH is a meme token for entertainment purposes only.
Not financial advice. Do your own research. 🦍🔥
