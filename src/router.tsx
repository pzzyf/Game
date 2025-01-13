import { createBrowserRouter } from 'react-router'
import { Home } from './pages/Home'
import Game from './pages/Game'

export const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/',
    element: <Game />,
  },
])
