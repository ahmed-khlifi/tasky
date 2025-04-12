import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { Login, Register } from "../api/auth";
import { loginResponse, signupResponse } from "../types/api.types";

type authResponse = signupResponse & loginResponse

export default function useAuth() {
    const navigate = useNavigate();


    function handleSuccessAuth(r: authResponse) {
        localStorage.setItem("token", r.token);
        localStorage.setItem("user", JSON.stringify(r.userCreated || r.userFound));
        navigate("/dashboard");
    }

    const { mutate: loginHandler, isPending: isLoging, error: loginError } = useMutation({
        mutationFn: Login,
        onSuccess: (r: authResponse) => handleSuccessAuth(r),
    });

    const { mutate: registerHandler, isPending: isRegitering, error: registerError } = useMutation({
        mutationFn: Register,
        onSuccess: r => console.log(r)
    });


    function logoutHandler() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/auth");
    }


    return {
        loginHandler, isLoging, loginError,
        registerHandler, isRegitering, registerError,
        logoutHandler,
    }
}
