/**
 * Entry point of the React application.
 * 
 * This file imports necessary modules and renders the root component of the application.
 * 
 * Imports:
 * - StrictMode: A tool for highlighting potential problems in an application.
 * - createRoot: A method to create a root to render the React component tree.
 * - index.css: The main stylesheet for the application.
 * - App: The root component of the application.
 * 
 * The application is rendered inside the HTML element with the id 'root'.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
