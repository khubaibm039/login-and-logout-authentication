import { createContext } from "react";
import PropTypes from "prop-types";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../Firebase/__firebase__";
export const AuthContext = createContext(null);

const Providers = ({ children }) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const AuthInfo = {
        createUser,
        loginUser,
    };

    return (
        <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
};

export default Providers;
Providers.propTypes = {
    children: PropTypes.node,
};
