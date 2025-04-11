import { user } from "./types";

export type loginBody = {
    email: string;
    password: string;
}

export type registerBody = {
    email: string;
    password: string;
    name: string;
}

export type loginResponse = {
    userFound: user;
    token: string;
}
export type signupResponse = {
    userCreated: user;
    token: string;
}

export type validationErrorResponse = Array<{
    message: string;
    field: string;
}>

