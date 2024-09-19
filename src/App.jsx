import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/mainComponent/Navbar";
import Hero from "./page/Home/Hero";
import LayoutRoot from "./layout/LayoutRoot";
import Error from "./page/About/Error";
import Data from "./page/About/Data";
import Tab from "./components/compo/Tab";
import Profile from "./page/About/tab/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
      {
        path: "/",
        element: <Hero />,
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
    ],
  },
]);
