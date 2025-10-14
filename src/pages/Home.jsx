import React from 'react'
import { Link } from 'react-router-dom'
import { RECIPES } from '../assets/recipeLists'
import './Home.css'

const Home = () => {
  const featured = [...RECIPES]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)

  return (
    <div className="home-page">

      <section className="home-hero">
        <h1 className="home-title">Welcome to SavorStack</h1>
        <p className="home-subtitle">
          Explore delicious recipes crafted by our talented chefs.
        </p>
        <Link to="/recipes" className="home-btn">Browse Recipes</Link>
      </section>

      <section className="home-intro">
        <h2>Discover Flavor in Every Bite</h2>
        <p>
          SavorStack is your go-to source for quick, flavorful, and easy-to-follow recipes.
          Whether you're cooking for one or hosting friends, our collection has something
          for everyone — from light salads to rich curries and hearty pastas.
        </p>
      </section>

      <section className="home-featured">
        <h2 className="featured-title">Featured Recipes</h2>
        <div className="featured-list">
          {featured.map((recipe) => (
            <div key={recipe.id} className="featured-card">
              <img src={recipe.image} alt={recipe.title} className="featured-img" />
              <h3 className="featured-name">{recipe.title}</h3>
              <p className="featured-meta">
                Chef: {recipe.chef} | ⭐ {recipe.rating}
              </p>
              <Link to={`/recipes/${recipe.id}`} className="featured-link">
                View Recipe
              </Link>
            </div>
          ))}
        </div>
        <Link to="/recipes" className="view-all-btn">View All Recipes</Link>
      </section>
    </div>
  )
}

export default Home
