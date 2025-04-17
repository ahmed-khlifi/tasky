export type TaskStatus = 'ToDo' | 'pending' | 'completed' | 'cancelled';


export const ItemTypes = {
    TASK: 'task',
} as const;

export type user = {
    _id: string;
    name: string;
    email: string;
    password: string;
}

export enum SettingsMenuTabs {
    General = "general",
    Security = "security",
}

export type task = {
    _id: string;
    title: string;
    description: string;
    status: TaskStatus;
    date: string;
    assignedTo?: string | user;
}

export interface ClientToServerEvents {
    'taskCreated': (taskId: task) => void;
    'taskUpdated': (taskId: task) => void;
    'taskDeleted': (taskId: task) => void;
}