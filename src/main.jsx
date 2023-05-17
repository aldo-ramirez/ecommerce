import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Shop } from "./page/shop/Shop";
import { ShopContextProvider } from "./context/Context";
import { Cart } from "./page/cart/Cart";
import Checkoutt from "./page/checkout/Checkoutt";
import Form from "./page/form/Form";

/*Routes */
const routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/checkout",
    element: <Checkoutt />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <RouterProvider router={routing} />
    </ShopContextProvider>
  </React.StrictMode>
);
