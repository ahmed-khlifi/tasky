import { Outlet } from 'react-router'
import Sidebar from '../../components/dashboard/Sidebar'

export default function DashboardMainLayout() {
    return (
        <div className="dashboard-container">
            <div className="sidebar">
                {/* Sidebar content goes here */}
                <Sidebar />
            </div>
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    )
}
