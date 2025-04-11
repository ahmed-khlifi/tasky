export type TaskStatus = 'ToDo' | 'InProgress' | 'Cancelled' | 'Done';

export interface Task {
    id: number;
    title: string;
    status: TaskStatus;
}

export const ItemTypes = {
    TASK: 'task',
} as const;