import React, { useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { RECIPES } from '../assets/recipeLists'
import RecipeCard from '../components/RecipeCard'
import './Recipes.css'

const Recipes = ( {bannerTitle} ) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  const diet = searchParams.get("diet") || "all";
  const sort = searchParams.get("sort") || "rating";

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams.toString());
    if (!value || value === "all") next.delete(key);
    else next.set(key, value);
    setSearchParams(next);
  };

  const filtered = useMemo(() => {
    let list = RECIPES.slice();
    if (q) list = list.filter(
      r =>
        r.title.toLowerCase().includes(q.toLowerCase()) ||
        r.chef.toLowerCase().includes(q.toLowerCase())
    );
    if (diet !== "all") list = list.filter(r => r.diet === diet);
    if (sort === "time") list.sort((a, b) => a.time - b.time);
    else list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [q, diet, sort]);

  const preserveQuery = searchParams.toString() ? `?${searchParams.toString()}` : "";

  return (
    <div className="recipes-page">
      <h2 className="recipes-banner">{bannerTitle}</h2>

      <div className="recipes-filters">
        <input
          className="filter-input"
          placeholder="Search recipes..."
          value={q}
          onChange={(e) => updateParam("q", e.target.value)}
        />

        <select
          className="filter-select"
          value={diet}
          onChange={(e) => updateParam("diet", e.target.value)}
        >
          <option value="all">All diets</option>
          <option value="veg">Vegetarian</option>
          <option value="meat">Meat</option>
        </select>

        <select
          className="filter-select"
          value={sort}
          onChange={(e) => updateParam("sort", e.target.value)}
        >
          <option value="rating">Sort: Rating</option>
          <option value="time">Sort: Time</option>
        </select>

        <button
          className="filter-clear-btn"
          onClick={() => setSearchParams({})}
        >
          Clear Filters
        </button>
      </div>

      <div className="recipes-list">
        {filtered.map((r) => (
          <RecipeCard key={r.id} recipe={r} preserveQuery={preserveQuery} />
        ))}
      </div>

      <div className="recipes-share">
        <Link to={`/recipes${preserveQuery}`} className="share-link">
          Share this view
        </Link>
      </div>
    </div>
  )
}

export default Recipes
