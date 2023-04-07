import { createBrowserRouter } from "react-router-dom";
import DashboardMain from "../../../Layout/DashboardMain";
import Main from "../../../Layout/Main";
import About from "../../About/About";
import AllUser from "../../Dashboard/AllUser/AllUser";
import UserReview from "../../Dashboard/UserReview/UserReview";
import AddVendor from "../../Dashboard/Vendor/AddVendor/AddVendor";
import Homepage from "../../Home/Homepage/Homepage";
import Inventory from "../../Inventory/Inventory";
import Login from "../../Login/Login";
import Orders from "../../Orders/Orders";
import Payment from "../../Payment/Payment";
import ShowError from "../../Shared/ShowError/ShowError";
import Shipment from "../../Shipment/Shipment";
import SignUp from "../../SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ShowError />,
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
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
      {
        path: "/shipping",
        element: (
          <PrivateRoute>
            <Shipment />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardMain />
      </PrivateRoute>
    ),
    errorElement: <ShowError />,
    children: [
      {
        path: "/dashboard",
        element: <UserReview />,
      },

      {
        path: "/dashboard/user",
        element: (
          <AdminRoute>
            <AllUser />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addvendor",
        element: (
          <AdminRoute>
            <AddVendor />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
