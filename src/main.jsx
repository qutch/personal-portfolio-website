import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HeroSection } from './Hero'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroSection />
    <div className="h-100"/>
  </StrictMode>,
)
