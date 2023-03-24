import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Register from "./pages/Register"; 
import Login from "./pages/Login";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Write from "./pages/Write";
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"

const Layout = () =>{
  return(
  <>
    <NavBar/>
    <Outlet/>
    <Footer/>

  </>
)}

function App() {

  const router = createBrowserRouter([ 
    {
      path:"/",
      element: <Layout/>,
      children: [
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/post/id",
          element: <Single/>
        },
        {
          path:"/write",
          element:<Write/>
        },
      ]
    },
    {
      path: "/Register",
      element: <Register/>
    },
    {
      path: "/Login",
      element: <Login/>
    }
  ]);
    

  return (
    <div className="app">
      <div className="container">
      <RouterProvider router = {router}/>
      </div>
    </div>  
  );
}

export default App;
