import React from 'react'
import { useParams, useSearchParams, useNavigate, Link, Outlet } from 'react-router-dom'
import { RECIPES } from "../assets/recipeLists"
import './RecipeDetails.css'

const RecipeDetails = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const recipe = RECIPES.find(r => r.id === id);
  const navigate = useNavigate();

  if (!recipe) return <div className="not-found">Recipe not found</div>;

  const preserve = searchParams.toString() ? `?${searchParams.toString()}` : "";
  const index = RECIPES.findIndex(r => r.id === id);
  const prev = RECIPES[index - 1];
  const next = RECIPES[index + 1];

  const goTo = (target) => {
    if (!target) return;
    const qs = searchParams.toString() ? `?${searchParams.toString()}` : "";
    navigate(`/recipes/${target}${qs}`);
  };

  return (
    <div className="recipe-details">
      <h2 className="details-title">{recipe.title}</h2>
       <img 
    src={recipe.image} 
    alt={recipe.title} 
    className="details-image" 
  />
      <p className="details-meta">
        Chef: {recipe.chef} | Diet: {recipe.diet} | Time: {recipe.time} mins | Rating: {recipe.rating}
      </p>

      <div className="details-nav">
        <button className="details-btn" onClick={() => goTo(prev?.id)} disabled={!prev}>
          Prev
        </button>
        <button className="details-btn" onClick={() => goTo(next?.id)} disabled={!next}>
          Next
        </button>
      </div>

      <div className="details-links">
        <Link to={`/recipes/${id}/steps${preserve}`} className="details-link">View Steps</Link>
        <Link to={`/recipes${preserve}`} className="details-link">Back to List</Link>
      </div>

      <section className="details-section">
        <h3>Recipe Description</h3>
        <p>{recipe.descripton}</p>
      </section>

      <section className="details-section">
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients && recipe.ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="steps-wrapper">
        <Outlet />
      </div>
    </div>
  )
}

export default RecipeDetails
