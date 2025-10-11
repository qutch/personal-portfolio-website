import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HeroSection } from './Hero'
import { ProjectSection } from './ProjectSection'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroSection />
    <div className="h-50"/>
    <ProjectSection />
    <div className="h-300"/>
  </StrictMode>,
)
