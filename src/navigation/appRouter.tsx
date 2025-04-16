import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import AuthenticationScreen from "../AuthenticationScreen";
import HomeScreen from "../screens/dashboard/HomeScreen";
import RootLayout from "./layouts/RootLayout";
import DashboardMainLayout from "./layouts/DashboardMainLayout";
import TaskScreen from "../screens/dashboard/TaskScreen";
import SettingsScreen from "../screens/dashboard/SettingsScreen";

const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />} >
            <Route path="auth" element={<AuthenticationScreen />} />
            <Route path="dashboard" element={<DashboardMainLayout />}>
                <Route index element={<HomeScreen />} />
                <Route path="tasks" element={<TaskScreen />} />
                <Route path="settings" element={<SettingsScreen />} />
                <Route path="*" element={<div>Not Found</div>} />
            </Route>
        </Route>
    )
)

export default appRouter;