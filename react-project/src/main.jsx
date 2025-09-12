import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider,useLocation } from  'react-router-dom';

import './index.css'

import { AnimatePresence } from "framer-motion"

import HomePage from './pages/HomePage.jsx';
import OrderPage from './pages/OrderPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx';
import ProfilesPage from './pages/ProfilesPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import NavBar from './Navbar.jsx';
import ShirtsPage from './pages/ShirtsPage.jsx';
import ShirtPage from './pages/ShirtPage.jsx';

import { OrderContextProvider,OrderContext } from './contexts/OrderContext.jsx';
import Layout from './pages/Layout.jsx';

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage/>,
    children:[
      {index : true, element: <HomePage/>},
      {path: "order", element: <OrderPage/>},
      {path:"shirts", element: <ShirtsPage/>},
      {path:"shirts/:shirtName", element: <ShirtPage/>}
    ]
  }
]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OrderContextProvider>
        <RouterProvider router={router}>
        </RouterProvider>
    </OrderContextProvider>
  </StrictMode>,
)
