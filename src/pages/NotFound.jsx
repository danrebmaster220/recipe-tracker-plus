import React from 'react'
import { Link } from "react-router-dom"
import './NotFound.css'

const NotFound = () => {
  return (
    <div className='not-found-page'>
      <h2 className='not-found-title'>404 - Page Not Found</h2>
      <p className='not-found-text'>Sorry, this page does not exist.</p>
      <Link to="/" className='not-found-link'>Go Home</Link>      
    </div>
  )
}

export default NotFound
