import React from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { RECIPES } from '../assets/recipeLists'
import './RecipeSteps.css'

const RecipeSteps = ( { theme } ) => {
  const {id} = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const step = Number(searchParams.get("step")) || 1;
  const recipe = RECIPES.find((r) => r.id === id);
  if (!recipe) return <div className="not-found">Recipe Not Found</div>

  const total = recipe.steps.length;

  const changeStep = (n) => {
    const next = new URLSearchParams(searchParams.toString());
    next.set("step", n);
    setSearchParams(next);
  }

  const backQuery = (() => {
    const clone = new URLSearchParams(searchParams.toString());
    clone.delete("step")
    const s = clone.toString();
    return s ? `?${s}` : "";
  })();

  
  return (
    <div className="recipe-steps">
      <Link to={`/recipes${backQuery}`} className="back-link">
        Back to Recipes
      </Link>

      <h4 className="steps-title">Steps</h4>
      <p className="steps-counter">
        Step <span>{step}</span> of {total}
      </p>

      <div className="steps-content">
        <p>{recipe.steps[step - 1]}</p>
      </div>

      <div className="steps-buttons">
        <button
          className="steps-btn"
          onClick={() => changeStep(Math.max(1, step - 1))}
          disabled={step === 1}
        >
          Prev Step
        </button>
        <button
          className="steps-btn"
          onClick={() => changeStep(Math.min(total, step + 1))}
          disabled={step === total}
        >
          Next Step
        </button>
      </div>

    </div>

    

    
    
  )
}

export default RecipeSteps
