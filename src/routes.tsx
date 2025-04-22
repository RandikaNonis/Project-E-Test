import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "./app/components/PageNotFound";
import WrapperContent from "./app/components/WrapperContent";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Login from "./app/components/Login";
import Dashboard from "./app/components/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        errorElement: <PageNotFound/>
      }
    ],
  },
  {
    path: "/layout",
    element: <WrapperContent />,
  }
]);