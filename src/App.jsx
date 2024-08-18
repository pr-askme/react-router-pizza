import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import { action as updateOrderAction } from "./features/order/UpdateOrder";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/react-router-pizza/",
        element: <Home />,
      },
      {
        path: "/react-router-pizza/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "/react-router-pizza/cart",
        element: <Cart />,
      },
      {
        path: "/react-router-pizza/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/react-router-pizza/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
