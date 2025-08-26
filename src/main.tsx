import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ProvederContext } from './reducer/context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProvederContext>
         <App />
    </ProvederContext>
  
  </StrictMode>,
)
