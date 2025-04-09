
import { Hexagon } from 'lucide-react';

import LoginForm from './components/authentication/LoginForm';
import { useState } from 'react';
import RegisterForm from './components/authentication/RegisterForm';

export default function AuthenticationScreen() {
    const [view, setView] = useState<"LOGIN" | "SIGNUP">("LOGIN")

    const setLoginView = () => setView("LOGIN");
    const setRegisterView = () => setView("SIGNUP");

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
                <div className="flex items-center gap-2 mb-8">
                    <Hexagon className="w-8 h-8 text-blue-600" />
                    <span className="text-2xl font-bold text-gray-800">Tasky.</span>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-2">{view === "LOGIN" ? "Welcome back" : "Create an account"}</h2>
                <p className="text-gray-600 mb-8">Please enter your information.</p>

                {view === "LOGIN" && <>
                    <LoginForm />
                    <p className="mt-8 text-center text-sm text-gray-600 cursor-pointer">
                        Don't have an account?{' '}
                        <span onClick={setRegisterView} className="text-blue-600 hover:text-blue-800 font-medium">
                            Sign up
                        </span>
                    </p>
                </>}

                {view === "SIGNUP" &&
                    <>
                        <RegisterForm />
                        <p className="mt-8 text-center text-sm text-gray-600 cursor-pointer">
                            Already have an account?{' '}
                            <span onClick={setLoginView} className="text-blue-600 hover:text-blue-800 font-medium">
                                Sign in
                            </span>
                        </p>
                    </>

                }


            </div>
        </div>
    );
}
