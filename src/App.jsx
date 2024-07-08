import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './pages/layout';
import Home from './pages/home';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // {
        //   path: "/about",
        //   element: <About />,
        // },
        // {
        //   path: "/contact",
        //   element: <Contact />,
        // },
      ],
    },
  ]);
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
