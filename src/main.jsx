import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header';
import Calculator from './Calculator';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-stone-800 to-slate-900">
      <Header />
      <Calculator />
    </div>
  </StrictMode>,
)
