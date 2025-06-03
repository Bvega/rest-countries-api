Awesome — let’s now generate a beginner-friendly, educational `TUTORIAL.md` that explains **how this project was built step-by-step**, with code explanations, learning tips, and guidance.

---

### 📄 `TUTORIAL.md` (Copy & Paste)

```md
# 🛠 TUTORIAL.md – REST Countries Explorer

This tutorial explains how the REST Countries Explorer app was built using HTML, CSS, JavaScript, and the REST Countries API. It's structured for beginners and includes educational comments and guidance.

---

## 📌 Overview

Goal: Build a responsive web app that:
- Lists countries from a live API
- Includes search and filter options
- Shows detailed info for each country
- Allows navigation to border countries
- Supports light and dark themes

---
---

## 🧠 How the Files Work Together

This project is modular:

- **index.html** loads `main.js` to fetch and render a list of countries.
- **country.html** loads `country.js`, reads the `code` from the URL, and fetches details for a single country.
- **theme.js** is shared by both pages to manage the dark mode toggle.
- **style.css** applies styles globally across both views.

This structure keeps the logic clean and the UI consistent.

----

## 🚀 Phase 1: Setup Project



### ✅ Folder Structure

```

docs/
├── index.html
├── country.html
├── css/style.css
├── js/main.js
├── js/country.js
├── js/theme.js

````

### ✅ Base HTML Pages

- `index.html` lists all countries
- `country.html` shows detailed info

---

## 🌍 Phase 2: Fetch and Display Countries

### `main.js` (fetch all countries)

```js
const res = await fetch("https://restcountries.com/v3.1/all");
const countries = await res.json();
````

### Render cards dynamically

Each card includes:

* Flag
* Name
* Region
* Population
* Link to `country.html?code=XXX`

---

## 🔍 Phase 3: Search and Filter

* `input#search` filters by country name
* `select#region-filter` filters by region
* Both filters work together using `.filter()`

---

## 🧭 Phase 4: Country Detail Page

### `country.js`

* Reads URL param like `?code=COL`
* Fetches details using `/v3.1/alpha/COL`
* Renders name, capital, region, currencies, languages, etc.

### Border Countries

```js
country.borders.map(code =>
  `<a href="country.html?code=${code}">${code}</a>`
)
```

---

## 🎨 Phase 5: Styling

* Responsive layout with CSS Grid + Flexbox
* Mobile-first styles
* Hover and focus states
* Card animations using `transform: scale(...)`

---

## 🌙 Phase 6: Dark Mode

### `theme.js`

* Toggles `.dark-mode` on `<body>`
* Uses `localStorage` to remember user preference
* Applies background, text, and card overrides

---

## 🧪 Testing

Test using:

* Desktop and mobile views
* Browser DevTools
* API response errors (e.g., wrong code)
* Broken links

---

## 🚀 Deployment

Deployed using GitHub Pages from `/docs` folder.

Steps:

1. Push repo to GitHub
2. Go to **Settings > Pages**
3. Set source to `/docs`
4. Your site is live!

---

## 📚 Learnings & Tips

* Use `fetch()` to connect to any API
* Use `.filter()` for search and dropdowns
* Use URL params (`URLSearchParams`) for page navigation
* Start with simple styles, polish later
* Build mobile-first and scale up

---

This project is a great introduction to:

* Web APIs
* Dynamic DOM manipulation
* Page routing without a framework
* User preferences with `localStorage`

Happy coding! 🎉

```
