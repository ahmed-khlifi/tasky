import { useEffect, useState } from 'react';
import NotificationCard from './NotificationCard'
import { useSocket } from '../../context/SocketContext';
import { toast } from 'react-toastify';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getNotification, markNotificationAsRead } from '../../api/notification';
import { Eye } from 'lucide-react';
import { notification } from '../../types/types';

export default function NotificationSideBar() {
    const [receivedNotification, setReceivedNotification] = useState<notification[]>();
    const socket = useSocket();

    useEffect(() => {
        if (socket) {
            socket.on("notification", (notification) => {
                console.log("New notification", notification);
                setReceivedNotification((prev) => {
                    if (prev) {
                        return [...prev, notification];
                    } else {
                        return [notification];
                    }
                })
                toast.success("New notification", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            return () => {
                socket.off("notification");
            };
        }
    }, [socket]);


    // get notifications
    const { data, isLoading, refetch, isRefetching } = useQuery({
        queryKey: ['notifications'],
        queryFn: getNotification
    })

    // mark notifications as read
    const { mutate, isPending } = useMutation({
        mutationFn: markNotificationAsRead,
        onSuccess: () => {
            refetch().then(() => {
                setReceivedNotification([]);
            })

        },
    })

    return (
        <div className='NotificationSideBar'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-lg font-bold'>Notifications</h1>
                <div onClick={() => mutate()} className='flex items-center gap-2 text-gray-400 cursor-pointer ml-auto'>
                    <Eye color='#232360' size={16} />
                    <p className='text-xs'>{isPending ? "...Wait" : "Mark as read"}</p>
                </div>
            </div>
            {isRefetching && (
                <div className="relative">
                    <div className='bg-blue-500 w-fit px-6 py-2 rounded-full 
                    absolute top-4 left-16 text-white cursor-pointer
                    shadow-lg shadow-blue-500/50
                     hover:bg-blue-600 transition-all duration-200 ease-in-out'>
                        <p className='text-sm'>Refetching notification</p>
                    </div>
                </div>
            )}
            <div className='flex flex-col gap-4 mt-5'>

                {isLoading && <p className='text-gray-400'>Loading...</p>}
                {data?.length === 0 && <p className='text-gray-400'>No notifications</p>}

                {receivedNotification?.map((n) => (
                    <NotificationCard {...n} key={n?._id} />
                ))}

                {data?.map((n) => (
                    <NotificationCard {...n} key={n?._id} />
                ))}
            </div>
        </div>
    )
}
