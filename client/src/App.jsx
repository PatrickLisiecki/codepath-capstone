import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Login from "./pages/Login";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await fetch("/api/auth/login/success", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Credentials": true,
                    },
                });

                if (response.ok) {
                    const resObject = await response.json();
                    setUser(resObject.user);
                } else {
                    throw new Error("Authentication has failed!");
                }
            } catch (error) {
                console.error(error);
            }
        };

        getUser();
    }, []);

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <div className="h-screen w-full">
                    <Header user={user} />
                </div>
            ),
        },
        {
            path: "/login",
            element: <Login />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
