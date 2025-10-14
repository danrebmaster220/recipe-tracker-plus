# 🍽️ Recipe Tracker Plus

**Recipe Tracker Plus** is an advanced recipe management web app built with **React + Vite**.  
It allows users to browse, add, edit, and view recipes — featuring **dynamic routing, props, query parameters, and programmatic navigation** for a modern React experience.

---

## 🚀 Built With
- ⚛️ **React + Vite** — fast development setup
- 🧭 **React Router v6** — routing, nested routes, and dynamic params
- 🧩 **Props & State Management** — passing data between routes
- 🎨 **Tailwind CSS** — modern and responsive UI
- 🔍 **Query Params** — for search, filter, and sort features
- 🧭 **useNavigate Hook** — for programmatic navigation
- 🧹 **ESLint** — clean and consistent code

---

## 🍴 Key Features
- 🏠 Home page displaying all recipes  
- 📄 Detailed recipe pages using **dynamic params (:id)**  
- ➕ Add new recipes (with props)  
- ✏️ Edit and delete existing recipes  
- 🔍 Search and filter recipes via **query parameters** (e.g. `?search=chicken`)  
- 📂 Nested routes for recipe sections (e.g. `/recipes/categories/desserts`)  
- ❌ 404 Not Found page for invalid routes  
- 📱 Fully responsive layout (desktop + mobile)

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/danrebmaster220/recipe-tracker-plus.git
   cd recipe-tracker-plus


🗺️ Route Map
Route	Description	Notes
/	Home page listing all recipes. Uses props for displaying recipe data
/recipes	Parent route for all recipes. Contains a nested <Outlet />
/recipes/:id	Dynamic route showing a specific recipe. Uses useParams() to get recipe ID
/recipes/categories	Nested route showing recipe categories. Example: /recipes/categories/desserts
/add	Add a new recipe. Uses props to pass data back to main list
/search?query=chicken	Shows filtered recipes based on query. Demonstrates query params
/404 or *	Catch-all route for 404 Not Found. Displays a user-friendly error page


📁 Folder Structure
src/
├── assets/            # Images, icons, etc.
├── components/        # Reusable UI components
│   ├── RecipeCard.jsx
│   ├── SearchBar.jsx
│   └── Layout.jsx     # Shared layout with <Outlet />
├── pages/             # Page-level components
│   ├── Home.jsx
│   ├── AddRecipe.jsx
│   ├── RecipeDetails.jsx
│   ├── Categories.jsx
│   └── NotFound.jsx
├── App.jsx            # Defines routes
├── main.jsx           # React entry point
└── index.css          # Global styles


