import { useDrop } from 'react-dnd';
import { ItemTypes, Task } from '../../types/types';
import { KanbanTaskCard } from './KanbanTaskCard';
import KanbanColumnTitle from './KanbanColumnTitle';
import AddTask from '../task/AddTask';
import { useState } from 'react';

interface ColumnProps {
    title: string;
    status: Task['status'];
    tasks: Task[];
    moveTask: (dragIndex: number, hoverIndex: number, status: Task['status']) => void;
    onDropTask: (id: number, status: Task['status']) => void;
}

export function KanbanColumn({ title, status, tasks, moveTask, onDropTask }: ColumnProps) {
    const [currentModal, setCurrentModal] = useState<string | undefined>();

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.TASK,
        drop: (item: { id: number }) => {
            onDropTask(item.id, status);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    const openModal = () => {
        setCurrentModal(title);
    }

    const closeModal = () => {
        setCurrentModal(undefined);
    }

    return (
        <div>
            <KanbanColumnTitle title={title} onClick={openModal} />
            <div
                ref={drop as any}
                className={`
                flex-1 min-w-[300px] min-h-[200px] 
                p-4 rounded-lg
                ${isOver ? 'bg-gray-100' : 'bg-gray-50'}
                transition-colors duration-200
            `} >
                <div className="space-y-2">
                    {tasks.map((task, index) => (
                        <KanbanTaskCard
                            key={task.id}
                            task={task}
                            index={index}
                            moveTask={moveTask}
                        />
                    ))}
                </div>
            </div>
            <AddTask
                isModalOpen={currentModal === title}
                closeModal={closeModal}
                defaultStatus={"Add Task"}
                targetTask={title}
            />
        </div>
    );
}