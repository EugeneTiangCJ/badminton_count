import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './components/Card.jsx'
import CreateToDo from './components/CreateToDo.jsx'
import CountBadPrice from './count_bad_price.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountBadPrice />
  </StrictMode>,
)
