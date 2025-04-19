import { Outlet } from 'react-router'
import Sidebar from '../../components/dashboard/Sidebar'
import NotificationSideBar from '../../components/notification/NotificationSideBar'

export default function DashboardMainLayout() {
    return (
        <div className="dashboard-container">
            <div className="sidebar">
                {/* Sidebar content goes here */}
                <Sidebar />
            </div>
            <div className="main-content">
                <NotificationSideBar />
                <Outlet />
            </div>
        </div>
    )
}
