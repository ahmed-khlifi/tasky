import { notification } from "../../types/types";
import { format } from "date-fns";

export default function NotificationCard({
    title,
    date,
    notifiedBy,
    isRead
}: notification) {

    return (
        <div className={` p-4 rounded-lg ` + ` ${isRead ? 'bg-white' : 'bg-blue-100'}  shadow-md shadow-[#0e0e0e]/10`}>
            <div className=" flex items-center gap-3">
                <div
                    className='w-10 h-10 object-cover rounded-full ring-2 ring-white flex items-center justify-center bg-blue-300'>
                    <p>{notifiedBy?.name?.[0]?.toUpperCase()}</p>
                </div>
                <p className="font-800 text-black text-sm">{title}</p>
            </div>
            <div className="w-full">
                {!date && <p className="text-gray-400 text-xs text-right ">{format(new Date(), "dd/MM/yyyy")}</p>}
            </div>
        </div>
    )
}
