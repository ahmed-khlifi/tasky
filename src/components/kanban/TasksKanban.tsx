import { useState, useCallback, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { task } from '../../types/types';
import { KanbanColumn } from './KanbanColumn';
import { useSocket } from '../../context/SocketContext';
import { useQuery } from '@tanstack/react-query';
import { changeTaskStatus, getAllTasks } from '../../api/task';


function TasksKanban() {
    const [tasks, setTasks] = useState<task[]>([]);
    const socket = useSocket();

    const { data, } = useQuery({
        queryKey: ['tasks'],
        queryFn: getAllTasks
    })

    useEffect(() => {
        if (data) {
            setTasks(data);
        }
    }, [data]);

    useEffect(() => {
        if (!socket) return;

        socket.on('taskCreated', (task) => {
            if (task) {
                setTasks((prevTasks) => [...prevTasks, task]);
            }
        });

        socket.on('taskStatusChange', ({ _id, status }) => {
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task._id === _id ? { ...task, status } : task
                )
            );

        })

        return () => {
            socket.off('taskCreated');
        };
    }, [socket]);


    const moveTask = useCallback((dragIndex: number, hoverIndex: number, status: task['status']) => {
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

    const handleDropTask = useCallback((_id: string, newStatus: task['status']) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task._id === _id ? { ...task, status: newStatus } : task
            )
        );
        changeTaskStatus({ status: newStatus, taskId: _id })

    }, []);

    const getTasksByStatus = (status: task['status']) => {
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
                        title="Pending"
                        status="pending"
                        tasks={getTasksByStatus('pending')}
                        moveTask={moveTask}
                        onDropTask={handleDropTask}
                    />
                    <KanbanColumn
                        title="Completed"
                        status="completed"
                        tasks={getTasksByStatus('completed')}
                        moveTask={moveTask}
                        onDropTask={handleDropTask}
                    />
                    <KanbanColumn
                        title="Cancelled"
                        status="cancelled"
                        tasks={getTasksByStatus('cancelled')}
                        moveTask={moveTask}
                        onDropTask={handleDropTask}
                    />
                </div>
            </div>
        </DndProvider>
    );
}

export default TasksKanban;