import React from 'react'
import { Link } from 'react-router-dom'
import './RecipeCard.css'


const RecipeCard = ( { recipe, preserveQuery } ) => {
  return (
    <article className='recipe-card'>
      <img 
        src={recipe.image} 
        alt={recipe.title} 
        className='recipe-image' 
      />
        <h3 className='recipe-title'>{recipe.title}</h3>
        <p className='recipe-info'>
            Diet: {recipe.diet} | Time: {recipe.time} mins | Rating: {recipe.rating}
        </p>
        <Link to={`/recipes/${recipe.id}${preserveQuery}`} className='recipe-link'>
            View Details
        </Link>
    </article>
  )
}

export default RecipeCard
