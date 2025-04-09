import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import AuthenticationScreen from "../AuthenticationScreen";
import HomeScreen from "../screens/dashboard/HomeScreen";
import RootLayout from "./layouts/RootLayout";
import DashboardMainLayout from "./layouts/DashboardMainLayout";

const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />} >
            <Route path="auth" element={<AuthenticationScreen />} />
            <Route path="dashboard" element={<DashboardMainLayout />}>
                <Route index element={<HomeScreen />} />
                <Route path="profile" element={<div>Profile</div>} />
                <Route path="settings" element={<div>Settings</div>} />
                <Route path="*" element={<div>Not Found</div>} />
            </Route>
        </Route>
    )
)

export default appRouter;