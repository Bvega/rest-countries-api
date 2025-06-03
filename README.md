

---

### 📄 `REST Countries Explorer` 

````md
# 🌍 REST Countries Explorer

A responsive frontend application that displays data from the [REST Countries API](https://restcountries.com/) and allows users to search, filter, and explore detailed information about each country — with support for light and dark themes.

![screenshot](./screenshots/demo.png)

---

## 🔧 Tech Stack

- **HTML**, **CSS**, and **JavaScript (ES6 Modules)**
- Responsive Design (Flexbox + Grid)
- REST API Integration
- Dark Mode with localStorage
- Git & GitHub for version control

---

## 🚀 Features

✅ View all countries with flag, name, population, region, and capital  
✅ Search countries by name  
✅ Filter countries by region  
✅ View detailed page for each country  
✅ Navigate to border countries  
✅ Toggle between light and dark mode  
✅ Responsive design (mobile-first)  
✅ Accessibility and keyboard navigation support  

---
---

## 🧠 Project Structure & Logic

This project is built using modular HTML, CSS, and JavaScript. Files are linked and executed dynamically:

### 🔄 Flow Overview

- `index.html`:
  - Lists all countries using data from the REST Countries API
  - Uses `main.js` to fetch and display cards
  - Includes `theme.js` to manage dark mode

- `country.html`:
  - Displays details for a single country based on `?code=XXX`
  - Uses `country.js` to fetch and render country info
  - Reuses styles and theme logic

- `style.css`:
  - Shared responsive layout, grid, cards, and theme support

- `theme.js`:
  - Enables light/dark mode toggle with persistent localStorage

All files are organized in the `/docs` folder for GitHub Pages deployment.


## 🔗 Live Demo

👉 [Visit the site on GitHub Pages]( https://bvega.github.io/rest-countries-api/)

*(Replace with actual URL after deployment)*

---

## 🛠 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Bvega/rest-countries-api.git
cd your-repo-name
````

### 2. Open Locally

Use Live Server (VS Code extension) or open `docs/index.html` directly in a browser.

---

## 📁 Folder Structure

```
docs/
├── index.html
├── country.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── country.js
│   └── theme.js
```

---

## 📷 Screenshots

*Add screenshots of the home page, detail view, and dark mode here for full visual context.*

---

## 📚 Credits

* API: [REST Countries](https://restcountries.com/)
* Design from Frontend Mentor challenge

---

## 💬 Author

**Bolivar Vega**
[GitHub](https://github.com/Bvega)
Email: [bolivar.vega@gmail.com](mailto:bolivar.vega@gmail.com)

---

## 📝 License

MIT License


```
