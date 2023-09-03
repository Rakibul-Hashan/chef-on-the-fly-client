import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import SuccessStories from "../../Pages/SuccessStories/SuccessStories/SuccessStories";
import AboutUs from "./../../Pages/AboutUs/AboutUs";
import FAQ from "./../../Pages/FAQ/FAQ";
import Services from "./../../Pages/Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/success-stories",
        element: <SuccessStories />,
      },
    ],
  },
]);

export default router;
