import React, { Children, lazy, Suspense, useEffect, useState } from "react";
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
import CounterContext from "./utils/counterContext";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Applayout = () => {

  const [userName, setUserName] = useState("defaultuser");

  return (
    <Provider store={appStore}>
      <>

        {/* <CounterContext.Provider value={{ Counter, setCounter }}> */}
        <userContext.Provider value={{ userName, setUserName }}>
          <Header />
          <Outlet />
          <Footer />
        </userContext.Provider>
        {/* </CounterContext.Provider> */}


      </>
    </Provider >
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
