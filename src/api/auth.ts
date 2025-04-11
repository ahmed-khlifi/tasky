import { loginBody, loginResponse, registerBody, signupResponse, validationErrorResponse } from "../types/api.types";
import { myFetch } from "./myFetch";

export async function Login(body: loginBody): Promise<loginResponse> {
    try {
        return await myFetch("auth/login", "POST", body);
    }
    catch (error) {
        throw error as validationErrorResponse;
    }
}

export async function Register(body: registerBody): Promise<signupResponse> {
    try {
        return await myFetch("auth/signup", "POST", body);
    } catch (error) {
        throw error as validationErrorResponse;
    }
}