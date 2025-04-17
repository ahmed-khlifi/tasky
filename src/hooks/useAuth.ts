import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { Login, Register } from "../api/auth";
import { loginResponse, signupResponse } from "../types/api.types";
import { disconnectSocket } from "../socket";
import { useAuthToken } from "../context/AuthContext";

type authResponse = signupResponse & loginResponse

export default function useAuth() {
    const navigate = useNavigate();
    const { setToken } = useAuthToken();

    function handleSuccessAuth(r: authResponse) {
        localStorage.setItem("token", r.token);
        localStorage.setItem("user", JSON.stringify(r.userCreated || r.userFound));
        setToken(r.token);
        navigate("/dashboard");
    }

    const { mutate: loginHandler, isPending: isLoging, error: loginError } = useMutation({
        mutationFn: Login,
        onSuccess: (r) => handleSuccessAuth(r as authResponse),
    });

    const { mutate: registerHandler, isPending: isRegitering, error: registerError } = useMutation({
        mutationFn: Register,
        onSuccess: r => handleSuccessAuth(r as authResponse),
    });


    function logoutHandler() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        disconnectSocket();
        setToken(null);
        navigate("/auth");
    }


    return {
        loginHandler, isLoging, loginError,
        registerHandler, isRegitering, registerError,
        logoutHandler,
    }
}
