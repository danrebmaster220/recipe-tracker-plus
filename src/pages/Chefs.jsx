import React from 'react'
import { RECIPES } from "../assets/recipeLists"
import { Link } from "react-router-dom"
import './Chefs.css'

const Chefs = () => {
  const chefs = Array.from(new Set(RECIPES.map((r) => r.chef)));

  return (
    <div className='chefs-page'>
      <h2 className="chefs-title">Chefs</h2>
      <ul className="chefs-list">
        {chefs.map(chef => (
          <li key={chef} className="chef-item">
            <span className="chef-name">{chef}</span> -{""}
            <Link to={`/recipes?q=${encodeURIComponent(chef)}`} className='chef-link'>
              View Recipes
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Chefs
