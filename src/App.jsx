import React from 'react'
import Home from './Page/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Page/About'
import Service from './Page/Service'
import Insights from './Page/ServiceInsights'
import Contact from './Page/Contact'
import Portfolio from './Page/Portfolio'
import Pricing from './Page/Pricing'
import Applayout from './Page/Applayout'

export default function App() {
  let Allrouter = createBrowserRouter([
     {
        path:'/',
        element:<Applayout/>,
        children:[
                    {
                         path:'/',
                         element:<Home/>,
                    },
                    {
                         path:'/About',
                         element:<About/>,
                    },
                    {
                         path:'/Service',
                         element:<Service/>,
                    },
                    {
                         path:'/Insights',
                         element:<Insights/>,
                    },
                    {
                         path:'/Contact',
                         element:<Contact/>,
                    },
                    {
                         path:'/Portfolio',
                         element:<Portfolio/>,
                    },
                    {
                         path:'/Pricing',
                         element:<Pricing/>,
                    }
        ]  
     }
     
     
  ])
    
     return <RouterProvider router={Allrouter}/>
}



