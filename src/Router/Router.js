import { useRoutes } from "react-router";
import Colors from "../pages/Colors/Colors";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/Login/Login";
import Users from "../pages/Users/Users";
import  ProtectedRoute  from "./ProtectedRoute";

/**
* A custom router component that uses useRoutes hook from react-router to define and render routes.
* @returns {JSX.Element} The component that renders the appropriate page based on the current URL path.
*/

function Router() {
  let route = useRoutes([
    { path: '', element: <Home /> },
    { path: 'home', element: <Home /> },
    { path: 'login', element: <LoginPage /> },
    { path: 'users', element: <ProtectedRoute><Users /></ProtectedRoute> },
    { path: 'colors', element: <ProtectedRoute><Colors /></ProtectedRoute> },
  ]);
  return route;
};
export default Router;