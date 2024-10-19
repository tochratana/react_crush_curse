import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/mainComponent/Navbar";
import Hero from "./page/Home/Hero";
import LayoutRoot from "./layout/LayoutRoot";
import Error from "./page/About/Error";
import Data from "./page/About/Data";
import Tab from "./components/compo/Tab";
import Profile from "./page/About/tab/Profile";
import ServicePage from "./service/ServicePage";
import Login from "./components/auth/Login";
import HomeExport from "./page/Home/homeExport";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
      {
        path: "/",
        element: <HomeExport />,
      },
      {
        path: "/about",
        element: <Tab />,
        children: [
          {
            path: "/about",
            element: <Profile />,
          },
          {
            path: "message",
            element: <Error />,
          },
        ],
      },
      {
        path: "/service",
        element: <ServicePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
