export type TaskStatus = 'ToDo' | 'InProgress' | 'Cancelled' | 'Done';

export interface Task {
    id: number;
    title: string;
    status: TaskStatus;
}

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
