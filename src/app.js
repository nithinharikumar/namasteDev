import React, { Children, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Body from "./components/Body";
// import About from "./components/About";
import Contactus from "./components/ContactUs";
import Error from "./components/ErrorComponent";
import Restomenu from "./components/Restomenu";
import Shimmer from "./components/Shimmer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const Grocery = lazy(() => import('./components/Grocery'))
const About = lazy(() => (import('./components/About')));
const Body = lazy(() => import('./components/Body'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<Shimmer />}><Body /></Suspense>,
      },

      {
        path: "/about",
        element: <Suspense fallback={<Shimmer />}> <About /></Suspense>,
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
      {
        path: "/grocery",
        element:
          <Suspense fallback={<h1>Loading..</h1>}>
            <Grocery />
          </Suspense>
      },
      {
        path: "/menu/:resId",
        element: <Restomenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
