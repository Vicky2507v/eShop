import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppLayout } from './Main/AppLayout'
import { ErrorPage } from './Main/ErrorPage'
import { Home } from './Pages/Home'
import { Login } from './Pages/Login'
import { Registration } from './Pages/Registration'
import { TechProducts } from './Pages/TechProducts'
import { Woman } from './Pages/Woman'
import { HomeAppliances } from './Pages/HomeAppliances'
import { Kids } from './Pages/kids'
import { Mans } from './Pages/Mans'
import { TechProductDetails } from './Pages/TechProductDetails'
import { MansProductDetails } from './Pages/MansProductDetails'
import { KidsProductDetails } from './Pages/KidsProductDetails'
import { HomeAppliancesProductDetails } from './Pages/HomeAppliancesProductDetails'
import { WomanProductDetails } from './Pages/WomanProductDetails'
import { AddToCart } from './Pages/AddToCart'

function App() {
  const browser = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/registration",
          element: <Registration />,
        },
        {
          path: "/registration/login",
          element: <Login />,
        },
        {
          path: "/add-to-cart",
          element: <AddToCart />
        },
        // --
        {
          path: "/categories/tech-products",
          element: <TechProducts />,
        },
        {
          path: "/categories/tech-products/:productId",
          element: <TechProductDetails />,
          // loader: TechProductDetails,
        },
        // --
        {
          path: "/categories/womans",
          element: <Woman />,
        },
        {
          path: "/categories/womans/:productId",
          element: <WomanProductDetails />,
        },
        // --
        {
          path: "/categories/home-appliances",
          element: <HomeAppliances />,
        },
        {
          path: "/categories/home-appliances/:productId",
          element: <HomeAppliancesProductDetails />,
        },
        // --
        {
          path: "/categories/kids",
          element: <Kids />,
        },
        {
          path: "/categories/kids/:productId",
          element: <KidsProductDetails />,
        },
        // --
        {
          path: "/categories/man",
          element: <Mans />,
        },
        {
          path: "/categories/man/:productId",
          element: <MansProductDetails />,
        }
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={browser} />
    </>
  )
}

export default App
