import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import About from "../../About/About";
import Homepage from "../../Home/Homepage/Homepage";

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
    ],
  },
]);

export default router;
