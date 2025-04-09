import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function RootLayout() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const { isAuthenticated } = useAuth();

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
