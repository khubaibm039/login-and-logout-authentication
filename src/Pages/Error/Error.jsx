import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <svg
                    className="w-1/2 md:1/3 lg:w-1/4 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 860.13137 571.14799"
                ></svg>

                <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">
                        Page Not Found
                    </p>
                    <p className="md:text-lg lg:text-xl text-gray-600 mt-8">
                        Sorry, the page you are looking for could not be found.
                    </p>
                    <a
                        href="#"
                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-12 rounded transition duration-150"
                        title="Return Home"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        ></svg>
                        <Link to={"/"}>
                            {" "}
                            <button>Return Home</button>
                        </Link>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Error;
