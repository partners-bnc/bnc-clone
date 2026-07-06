import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import Wix Madefor variable fonts (self-hosted via Fontsource — no external network requests)
import '@fontsource-variable/wix-madefor-display'
import '@fontsource-variable/wix-madefor-text'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
