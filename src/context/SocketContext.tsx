import React, { createContext, useContext, useEffect, useState } from 'react';
import { connectSocket, disconnectSocket } from '../socket';
import { Socket } from 'socket.io-client';
import { useAuthToken } from './AuthContext';
import { ClientToServerEvents } from '../types/types';


type ISocket = Socket<ClientToServerEvents> | null;

const SocketContext = createContext<ISocket>(null);

type Props = {
    children: React.ReactNode;
};

export const SocketProvider: React.FC<Props> = ({ children }) => {
    const [socket, setSocket] = useState<ISocket>(null);
    const { token } = useAuthToken()

    useEffect(() => {
        console.log('SocketProvider mounted');
        console.log('Token:', token);

        if (token) {
            const sock = connectSocket(token);
            setSocket(sock);

            return () => {
                disconnectSocket();
            };
        }
    }, [token]);

    return (
        <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
    );
};

export const useSocket = () => useContext(SocketContext);
