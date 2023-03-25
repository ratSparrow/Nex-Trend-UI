import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import About from "../../About/About";
import Homepage from "../../Home/Homepage/Homepage";
import Inventory from "../../Inventory/Inventory";
import Login from "../../Login/Login";
import SignUp from "../../SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/inventory",
        element: (
          <PrivateRoute>
            <Inventory />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
