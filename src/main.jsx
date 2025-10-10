import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { IntroSection } from './Hero'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IntroSection />
  </StrictMode>,
)
