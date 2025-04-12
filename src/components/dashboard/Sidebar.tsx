import { ClipboardList, Hexagon, LayoutGrid, LogOut, Settings } from 'lucide-react'
import React from 'react'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router'

export default function Sidebar() {
    const { logoutHandler } = useAuth()
    const navigate = useNavigate();

    return (
        <div className='flex flex-col items-center justify-center gap-6 w-16 h-full'>
            <div className='absolute top-4'>
                <Hexagon color='#5051F9' size={40} />
            </div>
            <SideBarIcon name='Dashboard' onClick={() => navigate('/dashboard')}>
                <LayoutGrid />
            </SideBarIcon>
            <SideBarIcon name='Tasks' onClick={() => navigate('tasks')}>
                <ClipboardList />
            </SideBarIcon>
            <SideBarIcon name='Settings'>
                <Settings />
            </SideBarIcon>
            <SideBarIcon name='Logout' onClick={logoutHandler}>
                <LogOut />
            </SideBarIcon>
        </div>
    )
}


function SideBarIcon({ children, onClick, name }: { children: React.ReactNode, onClick?: () => void, name: string }) {
    return (
        <div
            title={name}
            onClick={onClick} className='flex items-center justify-center bg-[#5051F9] w-12 h-12 rounded-xl hover:rounded-4xl cursor-pointer hover:bg-[#5051F9]/95 shadow-xl shadow-[#5051F9]/20 transition-all duration-200 ease-in-out'>
            {children}
        </div>
    )
}