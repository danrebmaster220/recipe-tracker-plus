import React from 'react'
import '../pages/About.css'

const About = () => {
  return (
    <div className="about-page">
      <h2 className="about-title">About FlavorVault</h2>
      <p className="about-text">
        FlavorVault is a curated recipe collection built to inspire your next meal. 
        Our goal is to make cooking simple, fun, and full of flavor — whether you’re a beginner or a seasoned home cook.
      </p>

      <p className="about-text">
        Each recipe comes with step-by-step instructions, ingredient details, and helpful tips from 
        our chefs. From spicy pastas to hearty salads, we believe every dish tells a story worth sharing.
      </p>

      <p className="about-text">
        We’re constantly adding new recipes, so check back often for fresh ideas and creative twists 
        from our growing community of food lovers.
      </p>
    </div>
  )
}

export default About