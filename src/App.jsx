import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Recipes from './pages/Recipes'
import RecipeDetails from './pages/RecipeDetails'
import RecipeSteps from './pages/RecipeSteps'
import Chefs from './pages/Chefs'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import './App.css'

const App = () => {
  return (
    <Routes>
        <Route element={<Layout siteTitle="SavorStack" footerText="© 2025 Recipe Team" />}>
            <Route index element={<Home />} /> 
            <Route path="recipes">
                <Route index element={<Recipes bannerTitle="Recipe Finder" />} />
                <Route path=":id" element={<RecipeDetails />}>
                    <Route path="steps" element={<RecipeSteps theme="light"/>} />
                </Route>
            </Route>

            <Route path="chefs" element={<Chefs />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
  )
}

export default App
