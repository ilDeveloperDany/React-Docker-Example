import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import store from './redux/store.js'
import {Provider} from 'react-redux'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/about.jsx'
import Contacts from './pages/Contacts.jsx'
import PersonCards from './pages/PersonCards.jsx'
import CityCards from './pages/CityCards.jsx'
import CardPage from './pages/CardPage.jsx'
import PersonCardPage from './pages/PersonCardPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/about',
    element: <About></About>
  },
  {
    path: '/contacts',
    element: <Contacts></Contacts>
  },
  {
    path: '/person-cards',
    element: <PersonCards></PersonCards>
  },
  {
    path: '/city-cards',
    element: <CityCards></CityCards>
  },
  {
    path: '/city-cards/:cityID',
    element: <CardPage></CardPage>,
  },
  {
    path: '/person-cards',
    element: <PersonCards></PersonCards>,
    children: [
      {
        path: ':personID',
        element: <PersonCardPage></PersonCardPage>
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
