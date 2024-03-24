import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Providers/Providers";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (user) {
        return children;
    }

    return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node,
};
