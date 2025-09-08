import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from  'react-router-dom';

import './index.css'

import HomePage from './pages/HomePage.jsx';
import OrderPage from './pages/OrderPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx';
import ProfilesPage from './pages/ProfilesPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import NavBar from './Navbar.jsx';
import ShirtsPage from './pages/ShirtsPage.jsx';
import ShirtPage from './pages/ShirtPage.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element:<>
    <NavBar />
    <HomePage />
    </> ,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/order/',
    element : <>
    <NavBar />
    <OrderPage />
    </> ,
  },
  {
    path: '/shirts/',
    element:<>
    <NavBar/>
    <ShirtsPage/>
    </>,
  },  
  {
    path:'/shirts/:shirtName',
    element:<>
    <NavBar/>
    <ShirtPage/>
    </>
  },
  {
    path: '/profiles/',
    element: <>
    <NavBar />
    <ProfilesPage />
    </> ,
    children:[
        {
          path:'/profiles/:profileId', 
          element: <ProfilePage/>
        },
    ]
  },

]
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
