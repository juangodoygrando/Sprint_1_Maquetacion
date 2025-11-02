# 🔖 Bookmark Landing Page

Example landing page for a bookmark management application. Educational project developed in multiple versions using different frontend technologies.

![Bookmark Landing Page Preview](https://i.postimg.cc/nrXxjb9C/desktop-preview.jpg)

---

## 📋 Description

This project is a **responsive landing page** showcasing the features of a fictional web bookmark management application. It includes sections such as:

- 🏠 Hero section with call-to-action
- ⚡ Features (product characteristics)
- 📥 Browser extensions download section
- ❓ FAQ (frequently asked questions)
- 📧 Contact form with validation
- 🍔 Responsive hamburger menu

---

## 🌿 Project Versions

This repository contains **3 different implementations** of the same landing page, each in its own release branch:

### 📌 **1. Vanilla (HTML + CSS + JS)**

**Branch:** `release/1.1_vanilla`

Basic version using pure web technologies.

**Technologies:**

- HTML5
- Pure CSS3
- Vanilla JavaScript

**How to use:**
```bash
# Switch to branch
git checkout release/1.1_vanilla

# Open the project
# Just open index.html in your browser or use Live Server
```

**Features:**

- ✅ No dependencies
- ✅ CSS organized in separate files
- ✅ Vanilla JavaScript for interactivity

---

### 🎨 **2. Sass (HTML + Sass + JS)**

**Branch:** `release/1.2_sass`

Improved version using Sass as CSS preprocessor.

**Technologies:**

- HTML5
- Sass/SCSS
- Vanilla JavaScript

**How to use:**
```bash
# Switch to branch
git checkout release/1.2_sass

# Install dependencies (if needed)
npm install

# Compile Sass to CSS
npm run sass
# Or manually:
sass --watch sass:css

# Open index.html in browser
```

**Features:**

- ✅ Sass variables and mixins
- ✅ More organized and maintainable CSS code
- ✅ Selector nesting
- ✅ Modular structure with partials

**Sass Structure:**
```
sass/
├── abstracts/
│   └── _variables.scss
├── base/
│   └── _reset.scss
├── layout/
│   ├── _navbar.scss
│   ├── _hero.scss
│   ├── _features.scss
│   ├── _bookmark.scss
│   ├── _download.scss
│   ├── _faq.scss
│   ├── _contact.scss
│   └── _footer.scss
└── main.scss
```

---

### ⚡ **3. Tailwind CSS (HTML + Tailwind + JS)**

**Branch:** `release/1.3_tailwind`

Modern version using Tailwind CSS v4 (utility-first).

**Technologies:**

- HTML5
- Tailwind CSS v4
- Vanilla JavaScript

**How to use:**
```bash
# Switch to branch
git checkout release/1.3_tailwind

# Install dependencies
npm install

# Compile Tailwind CSS
npm run dev
# Or manually:
npx tailwindcss -i ./src/input.css -o ./css/tailwind.css --watch

# Open index.html in browser
```

**Features:**

- ✅ Utility-first CSS
- ✅ Mobile-first responsive design
- ✅ Custom classes for project colors
- ✅ Configuration with CSS variables

**Custom configuration (`src/input.css`):**
```css
@layer base {
  :root {
    --color-primary: #5265e1;
    --color-secondary: #fa5959;
    --color-menu-dark: #252b46;
  }
}
```

---

## 🚀 General Installation

### **Prerequisites:**

- Node.js (v14 or higher) - Only for Sass and Tailwind versions
- Modern web browser
- Code editor (recommended: VS Code)

### **Steps:**

1. **Clone the repository:**
```bash
git clone https://github.com/juangodoygrando/Sprint_1_Maquetacion.git
cd Sprint_1_Maquetacion
```

2. **Choose a version:**
```bash
# View all branches
git branch -a

# Switch to the version you want
git checkout release/1.1_vanilla
# or
git checkout release/1.2_sass
# or
git checkout release/1.3_tailwind
```

---

## 🧱 Project Structure

### **Main Sections**

1. **Header/Navbar**
   - Logo
   - Desktop menu
   - Hamburger menu (mobile)
   - LOGIN button

2. **Hero Section**
   - Main title
   - Description
   - Call-to-action buttons
   - Illustration with decorative element

3. **Features Section**
   - Feature tabs
   - Interactive descriptions

4. **Download Extensions**
   - Browser cards (Chrome, Firefox, Opera)
   - Download buttons

5. **FAQ**
   - Frequently asked questions
   - Expandable accordion

6. **Contact Section**
   - Subscription form
   - Email validation

7. **Footer**
   - Navigation links
   - Social media icons

---

## 🎨 Color Palette
```css
/* Main colors */
--color-primary: #5265e1    /* Blue */
--color-secondary: #fa5959  /* Red */
--color-menu-dark: #252b46;

```

---

## 🖼️ Screenshots

### Desktop

![Desktop View](https://i.postimg.cc/YCvwdwXq/desktop-view.png)

### Mobile

![Mobile View](https://i.postimg.cc/zGgcLDtz/mobile-view.png)

---

## 🐛 Troubleshooting

### **Problem: Sass doesn't compile**
```bash
# Install Sass globally
npm install -g sass

# Or use local version
npx sass --watch sass:css
```

### **Problem: Tailwind doesn't generate classes**
```bash
# Delete previous CSS and recompile
rm css/tailwind.css
npx tailwindcss -i ./src/input.css -o ./css/tailwind.css --watch
```

---

## 🤝 Contributions

This is an educational project, but suggestions are welcome:

1. Fork the project
2. Create a branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'feat: add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 👤 Author

**Juan Ignacio Godoy Grando**

- GitHub: [@juangodoygrando](https://github.com/juangodoygrando)
- LinkedIn: [Juan Ignacio Godoy Grando](https://linkedin.com/in/juan-ignacio-godoy-grando-87bb43322)

---

## 📞 Contact

If you have questions or suggestions:

- Email: juangodoygrando@gmail.com
- Discord: jigodoygrando

---

**⭐ If this project was useful to you, give it a star on GitHub!**