# Suhaima Ishfaq — React Portfolio

A personal portfolio website built with **React** and **Vite** as a final class project for
BS Computer Science (5th Semester) at the University of Management and Technology (UMT), Lahore.

The website has four pages connected with React Router:

1. **Home / Portfolio** – introduction, about me, education and current interests
2. **Skills** – skill cards generated from an array using one reusable component
3. **Weather App** – live weather for any city using the OpenWeatherMap API
4. **To-Do App** – add, complete and delete tasks (saved in the browser with localStorage)

---

## Technologies Used

| Technology | Purpose |
| --- | --- |
| React | Building the user interface with components |
| Vite | Fast development server and production build |
| React Router (`react-router-dom`) | Navigation between pages without reloading |
| React Icons | Lightweight icon library |
| JavaScript (ES6+) | Logic, state and API calls |
| HTML & CSS | Page structure and styling (plain CSS with variables, Flexbox and Grid) |
| OpenWeatherMap API | Real weather data |

---

## Features

- Responsive design for desktop, tablet and mobile
- Sticky navbar with active-page highlight and a mobile hamburger menu
- Pink theme with soft gradients, rounded cards, shadows and subtle hover animations
- Reusable components (`SkillCard`, `SocialLinks`, `SectionTitle`, `TodoItem`, etc.)
- Skills page with category filter and honest skill levels (Learning / Familiar / Intermediate)
- Weather app with loading, error, empty and "API key missing" states
- To-Do app with task counter, progress bar, complete/uncomplete, delete and "clear completed"
- Tasks and last searched city are remembered with `localStorage`
- API key stored safely in a `.env` file (not uploaded to GitHub)

---

## Folder Structure

```
suhaima-portfolio/
├── public/
│   ├── favicon.svg          # Browser tab icon
│   └── _redirects           # Netlify routing fix
├── src/
│   ├── assets/
│   │   └── profile.jpg      # Profile picture
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SocialLinks.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── SkillCard.jsx
│   │   ├── WeatherCard.jsx
│   │   ├── TodoInput.jsx
│   │   ├── TodoItem.jsx
│   │   └── TodoList.jsx
│   ├── data/
│   │   ├── profile.js       # Name, university and social links
│   │   └── skills.js        # Array of skill objects
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Skills.jsx
│   │   ├── Weather.jsx
│   │   └── Todo.jsx
│   ├── App.jsx              # Navbar + Routes + Footer
│   ├── main.jsx             # Entry point (BrowserRouter)
│   └── index.css            # All styles
├── .env.example             # Shows which environment variable is needed
├── .gitignore
├── index.html
├── package.json
├── vercel.json              # Vercel routing fix
├── vite.config.js
└── README.md
```

---

## Installation

You need **Node.js** (version 18 or newer). Download it from https://nodejs.org if needed.
Check it is installed:

```bash
node -v
npm -v
```

Then open a terminal in the project folder and install the packages:

```bash
npm install
```

---

## Run Locally

```bash
npm run dev
```

Open the link shown in the terminal (usually http://localhost:5173).

---

## Configure the Weather API Key

The Weather page needs a free API key from OpenWeatherMap.

1. Create a free account at https://openweathermap.org and open **API keys** from your profile menu.
2. Copy your key. (A new key can take up to an hour or two to become active.)
3. In the project root (the same folder as `package.json`), make a copy of `.env.example`
   and name it **`.env`**.
4. Open `.env` and replace the placeholder:

   ```
   VITE_WEATHER_API_KEY=paste_your_real_key_here
   ```

5. Stop the dev server (`Ctrl + C`) and run `npm run dev` again. Vite only reads `.env` when it starts.

Until a key is added, the Weather page shows a friendly "API key not configured" message
instead of crashing.

> `.env` is listed in `.gitignore`, so your key is **not** uploaded to GitHub.
> Note: in a frontend-only app the key is still visible in the browser's network requests,
> so only use a free key here, never a paid or private one.

---

## Personalise Before Submitting

- **Profile picture:** to change it, replace `src/assets/profile.jpg` with a new square photo
  of the same name.
- **Social links:** GitHub and LinkedIn are set in `src/data/profile.js`. Update the email link there too.
- **Skill levels:** adjust levels and descriptions in `src/data/skills.js` to match you.

---

## Build for Production

```bash
npm run build
```

This creates an optimised `dist/` folder. To preview the build locally:

```bash
npm run preview
```

---

## Deploy

### Option 1: Vercel (recommended)

1. Push the project to GitHub (see below).
2. Go to https://vercel.com and sign in with GitHub.
3. Click **Add New → Project** and import your repository.
4. Vercel detects Vite automatically (Build command: `npm run build`, Output: `dist`).
5. Open **Environment Variables** and add `VITE_WEATHER_API_KEY` with your key.
6. Click **Deploy**. You will get a live link like `your-project.vercel.app`.

### Option 2: Netlify

1. Go to https://netlify.com and sign in with GitHub.
2. Click **Add new site → Import an existing project** and choose your repository.
3. Build command: `npm run build` · Publish directory: `dist`
4. Under **Site configuration → Environment variables**, add `VITE_WEATHER_API_KEY`.
5. Click **Deploy**.

`vercel.json` and `public/_redirects` are already included so refreshing a page like
`/skills` works after deployment instead of showing a 404.

If you add or change the environment variable after deploying, redeploy the site so the new
value is used.

---

## Upload to GitHub

This project's repository: https://github.com/suhaimaishfaq/my-portfolio

1. Make sure the repository exists on GitHub (it can be empty).
2. In the project folder, run:

```bash
git init
git add .
git commit -m "Initial commit: React portfolio project"
git branch -M main
git remote add origin https://github.com/suhaimaishfaq/my-portfolio.git
git push -u origin main
```

3. Before pushing, run `git status` and make sure `.env` and `node_modules` are **not** listed.

---

## Author

**Suhaima Ishfaq** — BS Computer Science Student, University of Management and Technology, Lahore

- GitHub: https://github.com/suhaimaishfaq
- LinkedIn: https://www.linkedin.com/in/suhaima-ishfaq-735959428
