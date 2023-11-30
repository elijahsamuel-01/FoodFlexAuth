import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import { Layout } from "../components/Layout";
import HomeScreen from "../pages/Homescreen";
import Register from "../pages/auth/Register";
import SignIn from "../pages/auth/Sign-in";
import Verify from "../pages/auth/Verify";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Layout />
      </PrivateRouter>
    ),
    children: [{ index: true, element: <HomeScreen /> }],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/verify",
    element: <Verify />,
  },
]);
