# 🌐 Personal Developer Portfolio

> A responsive single-page portfolio website built from scratch with vanilla HTML, CSS, and JavaScript.

**Live site:** [skinshredder.github.io](https://skinshredder.github.io)

## Screenshot

![Portfolio Screenshot](assets/images/portfolio-preview.png)

## Features

- Responsive design (desktop, tablet, mobile)
- Dark tech theme with CSS Custom Properties for easy customization
- Smooth scroll navigation with sticky header
- Mobile hamburger menu
- Project showcase cards with screenshots and GitHub links
- Contact section with email, GitHub, and LinkedIn

## Tech Stack

- **HTML5** — Semantic markup (nav, main, section, article, footer)
- **CSS3** — Custom Properties, Flexbox, Grid, Media Queries
- **JavaScript** — Mobile navigation toggle, scroll effects
- **Hosting** — GitHub Pages

## Project Structure

```
skinshredder.github.io/
├── index.html          ← Main page (all sections)
├── css/style.css       ← Styles with design tokens in :root
├── js/main.js          ← Navigation and scroll behavior
└── assets/images/      ← Project screenshots
```

## Customization

All colors, fonts, and spacing are defined as CSS Custom Properties in `css/style.css` under `:root`. Change the entire look of the site by editing only that section.

## Adding a New Project

1. Open `index.html`
2. Copy an existing `<article class="project-card">` block
3. Update the title, description, tags, and GitHub link
4. Add a screenshot to `assets/images/`

## Author

**Sebastian Larsen** (SkinShredder)
AI Student @ SDU Odense

- [GitHub](https://github.com/SkinShredder)
- [LinkedIn](https://www.linkedin.com/in/sebastian-larsen-4b46213b1/)
