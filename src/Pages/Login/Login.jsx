import { useContext, useRef } from "react";
import { AuthContext } from "../../Providers/Providers";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const { loginUser, forgetPassword } = useContext(AuthContext);
    const emailRef = useRef(null);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then((result) => {
                navigate("/dashboard");
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            console.log("please provide an email");
            return;
        } else if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
        ) {
            console.log("please write an valid email");
            return;
        }
        forgetPassword(email)
            .then(() => {
                console.log("please check your email");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    return (
        <div className="hero min-h-[92.9vh] bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                ref={emailRef}
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <Link
                                    onClick={handleResetPassword}
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </Link>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="flex">
                            <p>Have no account </p>
                            <Link className=" btn-link" to={"/register"}>
                                Register
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
