import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import auth from "../Firebase/__firebase__";
export const AuthContext = createContext(null);

const Providers = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logoutUser = () => {
        return signOut(auth);
    };

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("user is online", currentUser);
        });
    }, []);

    const AuthInfo = {
        user,
        createUser,
        loginUser,
        logoutUser,
    };

    return (
        <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
};

export default Providers;
Providers.propTypes = {
    children: PropTypes.node,
};
