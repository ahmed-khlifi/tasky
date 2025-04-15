import { ClipboardList, Hexagon, LayoutGrid, LogOut, LucideProps, Settings } from 'lucide-react'
import React, { ReactElement } from 'react'
import useAuth from '../../hooks/useAuth'
import { useLocation, useNavigate } from 'react-router'

export default function Sidebar() {
    const { logoutHandler } = useAuth()
    const navigate = useNavigate();
    const { pathname } = useLocation();
    console.log(pathname);


    return (
        <div className='flex flex-col items-center justify-center gap-6 w-16 h-full'>
            <div className='absolute top-4'>
                <Hexagon color='#5051F9' size={40} />
            </div>
            <SideBarIcon
                active={pathname === '/dashboard'}
                name='Dashboard'
                onClick={() => navigate('/dashboard')}>
                <LayoutGrid />
            </SideBarIcon>
            <SideBarIcon
                active={pathname.includes("tasks")}
                name='Tasks'
                onClick={() => navigate('tasks')}>
                <ClipboardList />
            </SideBarIcon>
            <SideBarIcon
                active={pathname.includes("Settings")}
                name='Settings'>
                <Settings />
            </SideBarIcon>
            <SideBarIcon name='Logout' onClick={logoutHandler}>
                <LogOut />
            </SideBarIcon>
        </div>
    )
}


function SideBarIcon({ children, onClick, name, active = false }: { children: React.ReactNode, onClick?: () => void, name: string, active?: boolean }) {
    return (
        <div
            title={name}
            onClick={onClick}
            className={`flex items-center justify-center
             ${active ? ' bg-[#5051F9] hover:bg-[#5051F9]/95 ' :
                    'bg-white hover:bg-[#f6f6f6]'}
             }
             w-12 h-12 rounded-xl hover:rounded-4xl 
             cursor-pointer shadow-xl shadow-[#5051F9]/10 
             transition-all duration-200 ease-in-out`}>
            {React.cloneElement(children as ReactElement<LucideProps>, { color: active ? "white" : "black" })}
        </div>
    )
}