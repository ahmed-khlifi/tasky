import { Plus } from 'lucide-react'

export default function KanbanColumnTitle({ title, onClick }: { title: string, onClick: (arg: string) => void }) {
    return (
        <div className='flex items-center justify-between mb-4 bg-white p-4 rounded-lg'>
            <h2 className="text-xl text-[#232360] font-bold">{title}</h2>
            <div onClick={() => onClick(title)} className="bg-[#E8EAFF] p-2 rounded-lg cursor-pointer hover:bg-gray-300 transition-colors duration-200">
                <Plus strokeWidth={2.5} size={22} color='#6772FE' />
            </div>
        </div>
    )
}
