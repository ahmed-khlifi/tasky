export type TaskStatus = 'ToDo' | 'pending' | 'completed' | 'cancelled';

export type user = {
    _id: string;
    name: string;
    email: string;
    password: string;
}


export type task = {
    _id: string;
    title: string;
    description: string;
    status: TaskStatus;
    date: string;
    assignedTo?: string | user;
}

export type notification = {
    _id: string;
    title: string;
    date: string;
    notifiedBy: string & user;
    isRead: boolean;
}

export const ItemTypes = {
    TASK: 'task',
} as const;

export enum SettingsMenuTabs {
    General = "general",
    Security = "security",
}

export interface ClientToServerEvents {
    'taskCreated': (task: task) => void;
    'taskUpdated': (task: task) => void;
    'taskDeleted': (task: task) => void;
    'taskStatusChange': (task: task) => void
    'notification': (notification: notification) => void;
}