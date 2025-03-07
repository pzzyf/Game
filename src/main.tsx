import React from 'react'
import ReactDOM from 'react-dom/client'

import { Providers } from './providers'
import { MainLayout } from '@/layouts/MainLayout'
import './styles/global.css'
import './styles/tailwind.css'
import './styles/game.css'

function App() {
  return (
    <MainLayout />
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
)
