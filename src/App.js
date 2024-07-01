import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Shop from './Pages/Shop/Shop';
import Signup from './Pages/Signup/Signup';
import Cart from './Pages/cart/Cart';
import Product from './Pages/product/Product';

function App() {
  const Layout = ()=>{
    return(
      <div className='main'>
      <Header/>
      <div className='content'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: < Layout />,
      children:[
        {
          path:'/',
          element: < Home />
        },
        {
          path: '/about',
          element: < About /> 
        },
        {
          path: '/blog',
          element: < Blog /> 
        },
        {
          path: '/contact',
          element: < Contact /> 
        },
        {
          path: '/login',
          element: < Login /> 
        },
        {
          path: '/shop',
          element: < Shop /> 
        },
        {
          path: '/signup',
          element: < Signup /> 
        },
        {
          path: '/cart',
          element: < Cart />
        },
        {
          path: '/products/:id',
          element: < Product />
        }
      ]
    }
  ])
  return < RouterProvider router={router}/>;
}

export default App;
