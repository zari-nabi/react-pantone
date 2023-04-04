import { useContext } from "react";
import { Navigate } from "react-router";
import { BaseContext } from "../context";

/**
 * protected routes
 * @param {ReactNode} props.children - The content to be displayed inside the route if is logined.
 * @returns {JSX.Element}
 */
 const ProtectedRoute=({children})=>{
    const { token } = useContext(BaseContext);

    if(!token) return <Navigate to="/login"/>
    else return children;
};

export default ProtectedRoute;