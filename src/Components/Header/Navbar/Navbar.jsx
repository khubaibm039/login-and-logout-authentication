import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/Providers";

const Navbar = () => {
    const navigate = useNavigate();
    const { user, logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                navigate("/login");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const navLinks = (
        <>
            {user ? (
                <>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>

                    <li>
                        <NavLink to={"/order"}>Orders</NavLink>
                    </li>

                    <li>
                        <NavLink to={"/dashboard"}>Dashboard</NavLink>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                </>
            )}
        </>
    );
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu gap-4 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-4 px-1">{navLinks}</ul>
            </div>
            <div className="navbar-end">
                <p>{user?.email}</p>
                {user ? (
                    <button onClick={handleLogout} className="btn">
                        logout
                    </button>
                ) : (
                    <button onClick={handleLogout} className="btn">
                        login
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
