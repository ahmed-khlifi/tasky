import { ClipboardList, Hexagon, LayoutGrid, LogOut, Settings, User } from 'lucide-react'
import React from 'react'

export default function Sidebar() {
    return (
        <div className='flex flex-col items-center justify-center gap-6 w-16 h-full'>
            <div className='absolute top-4'>
                <Hexagon color='#5051F9' size={40} />
            </div>
            <SideBarIcon name='Dashboard'>
                <LayoutGrid />
            </SideBarIcon>
            <SideBarIcon name='Tasks'>
                <ClipboardList />
            </SideBarIcon>
            <SideBarIcon name='Settings'>
                <Settings />
            </SideBarIcon>
            <SideBarIcon name='Logout'>
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