import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Components/paytrack'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
