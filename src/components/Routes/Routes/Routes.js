import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import About from "../../About/About";
import Home from "../../Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
