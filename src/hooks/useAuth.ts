import { useState } from "react";
import { useNavigate } from "react-router";

export default function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    function handleSuccessAuth() {
        navigate("/dashboard");

    }

    function loginHandler() {
        setIsAuthenticated(true);
        handleSuccessAuth();
    }

    function registerHandler() {
        setIsAuthenticated(true);
        handleSuccessAuth();
    }

    function logoutHandler() {
        setIsAuthenticated(false);
    }


    return {
        isAuthenticated,
        loginHandler,
        registerHandler,
        logoutHandler,
    }
}
