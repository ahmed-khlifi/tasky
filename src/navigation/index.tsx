import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import RootLayout from "./RootLayout";
import AuthenticationScreen from "../AuthenticationScreen";

const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />} >
            <Route path="auth" element={<AuthenticationScreen />} />
        </Route>
    )
)

export default appRouter;