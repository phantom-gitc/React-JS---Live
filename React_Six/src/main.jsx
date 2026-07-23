import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { myShopContextProvider as MyShopContextProvider } from './context/MyWebsite.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyShopContextProvider>
      <App />
    </MyShopContextProvider>
  </StrictMode>
)

