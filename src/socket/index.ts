// socket/index.ts
import io, { Socket } from 'socket.io-client';
import { ClientToServerEvents } from '../types/types';



type AppSocket = Socket<ClientToServerEvents>;

let socket: AppSocket | null = null;

// Call this after login, pass the JWT
export const connectSocket = (token: string): AppSocket => {
    if (!socket) {
        socket = io(import.meta.env.VITE_SOCKET_URL || 'http://localhost:3000', {
            auth: { token },
            transports: ['websocket',],
        });

        socket.on('connect', () => {
            console.log('✅ Socket connected:', socket?.id);
        });

        socket.on('disconnect', () => {
            console.log('❌ Socket disconnected');
        });
    }

    return socket;
};

// Use this wherever you need the existing socket instance
export const getSocket = (): AppSocket | null => socket;

// Call this on logout
export const disconnectSocket = (): void => {
    if (socket) {
        socket.disconnect();
        socket = null;
    }
};
