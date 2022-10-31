
import { Route, Routes, Link, Navigate} from "react-router-dom";

const PrivateRoute = ({isAuth, children}) => {
    if (!isAuth) {
        return <Navigate to="/landing" rplace />;
    }
    return children;
 };

 export default PrivateRoute
