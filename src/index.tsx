import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cards from "./components/card";
import Layout from "./components/Layout";
import Support from "./components/Support";
import { CardProvider } from "./context/CardContext";
import Pillars from "./components/Pillars";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // {
      //   path: "/",
      //   element: <App />,
      // },
      {
        path: "/",
        element: <Support />,
      },
      {
        path: "/card",
        element: <Cards />,
      },
      {
        path: "/card-details",
        element: <Pillars />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <CardProvider>
      <RouterProvider router={router} />
    </CardProvider>
  );
} else {
  console.error("Root element not found");
}
