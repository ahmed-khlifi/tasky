import { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Task } from '../../types/types';
import { KanbanColumn } from './KanbanColumn';

const initialTasks: Task[] = [
    { id: 1, title: 'Research project requirements', status: 'ToDo' },
    { id: 2, title: 'Create project timeline', status: 'ToDo' },
    { id: 3, title: 'Design system architecture', status: 'InProgress' },
    { id: 4, title: 'Implement core features', status: 'InProgress' },
    { id: 5, title: 'Write documentation', status: 'Done' },
];

function TasksKanban() {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    const moveTask = useCallback((dragIndex: number, hoverIndex: number, status: Task['status']) => {
        setTasks((prevTasks) => {
            const filteredTasks = prevTasks.filter(t => t.status === status);
            const dragTask = filteredTasks[dragIndex];

            // Create new array without the dragged task
            const newFilteredTasks = [...filteredTasks];
            newFilteredTasks.splice(dragIndex, 1);
            newFilteredTasks.splice(hoverIndex, 0, dragTask);

            // Merge with tasks from other columns
            return [
                ...prevTasks.filter(t => t.status !== status),
                ...newFilteredTasks,
            ];
        });
    }, []);

    const handleDropTask = useCallback((id: number, newStatus: Task['status']) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, status: newStatus } : task
            )
        );
    }, []);

    const getTasksByStatus = (status: Task['status']) => {
        return tasks.filter((task) => task.status === status);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className=" bg-gray-100 p-8">
                <div className="flex gap-6 max-w-7xl mx-auto">
                    <KanbanColumn
                        title="To Do"
                        status="ToDo"
                        tasks={getTasksByStatus('ToDo')}
                        moveTask={moveTask}
                        onDropTask={handleDropTask}
                    />
                    <KanbanColumn
                        title="In Progress"
                        status="InProgress"
                        tasks={getTasksByStatus('InProgress')}
                        moveTask={moveTask}
                        onDropTask={handleDropTask}
                    />
                    <KanbanColumn
                        title="Done"
                        status="Done"
                        tasks={getTasksByStatus('Done')}
                        moveTask={moveTask}
                        onDropTask={handleDropTask}
                    />
                    <KanbanColumn
                        title="Cancelled"
                        status="Cancelled"
                        tasks={getTasksByStatus('Cancelled')}
                        moveTask={moveTask}
                        onDropTask={handleDropTask}
                    />
                </div>
            </div>
        </DndProvider>
    );
}

export default TasksKanban;