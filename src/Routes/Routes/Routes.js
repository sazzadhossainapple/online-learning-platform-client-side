import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Courses from "../../pages/Courses/Courses";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Checkout from "../../pages/Shared/Checkout/Checkout";
import CourseDetails from "../../pages/Shared/CourseDetails/CourseDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/courses",
        element: <Courses />,
        loader: () =>
          fetch(
            "https://programming-learning-reactive-server.vercel.app/courses"
          ),
      },
      {
        path: "/courseDetails/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(
            `https://programming-learning-reactive-server.vercel.app/courses/${params.id}`
          ),
      },
      { path: "/faq", element: <FAQ /> },
      { path: "/blog", element: <Blog /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoutes>
            <Checkout></Checkout>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://programming-learning-reactive-server.vercel.app/courses/${params.id}`
          ),
      },
    ],
  },
]);
