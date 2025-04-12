import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

export default function RootLayout() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    //const { isAuthenticated } = useAuth();
    let isAuthenticated = localStorage.getItem("token") !== null;
    useEffect(() => {
        if (isAuthenticated !== undefined) {
            if (!isAuthenticated) {
                navigate("/auth");
            }
            if (pathname === "/" && isAuthenticated) {
                navigate("/dashboard");
            }
            return;
        }
    }, [isAuthenticated, navigate],);

    return <Outlet />;
}
