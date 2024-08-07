import { Outlet, RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home/Home";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Shop from "./Pages/Shop/Shop";
import Signup from "./Pages/Signup/Signup";
import Cart from "./Pages/cart/Cart";
import Product from "./Pages/product/Product";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
function App() {
  const isOpen = useSelector((state) => state.cart.toggle);

  //the main layout of the app //
  const Layout = () => {
    return (
      <div className="main">
        <ToastContainer />
        <Header />
        {isOpen && <Cart />}

        <div className="content">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };

  //routing
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
