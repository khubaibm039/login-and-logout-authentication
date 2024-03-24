import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import Providers from "./Providers/Providers";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Providers>
            <RouterProvider router={router}></RouterProvider>
        </Providers>
    </React.StrictMode>
);
