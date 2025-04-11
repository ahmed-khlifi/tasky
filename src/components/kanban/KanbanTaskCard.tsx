import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes, Task } from '../../types/types';

interface TaskCardProps {
    task: Task;
    index: number;
    moveTask: (dragIndex: number, hoverIndex: number, status: Task['status']) => void;
}

interface DragItem {
    id: number;
    index: number;
    status: Task['status'];
    type: string;
}

export function KanbanTaskCard({ task, index, moveTask }: TaskCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.TASK,
        item: { id: task.id, index, status: task.status, type: ItemTypes.TASK },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop<DragItem>({
        accept: ItemTypes.TASK,
        hover: (item, monitor) => {
            if (!ref.current) return;

            const dragIndex = item.index;
            const hoverIndex = index;

            // Don't replace items with themselves
            if (dragIndex === hoverIndex && item.status === task.status) return;

            // Get the middle Y position of the hover target
            const hoverBoundingRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            // Get the mouse position
            const clientOffset = monitor.getClientOffset();
            if (!clientOffset) return;

            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            // Only perform the move when the mouse has crossed half of the items height
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

            // If the item is from the same column, perform the move
            if (item.status === task.status) {
                moveTask(dragIndex, hoverIndex, item.status);
                item.index = hoverIndex;
            }
        },
    });

    drag(drop(ref));

    const getBackgroundColor = () => {
        switch (task.status) {
            case 'ToDo':
                return 'bg-gray-100';
            case 'InProgress':
                return 'bg-blue-100';
            case 'Done':
                return 'bg-green-100';
            case 'Cancelled':
                return 'bg-red-100';
            default:
                return 'bg-white';
        }
    };

    return (
        <div
            ref={ref}
            className={`
        ${getBackgroundColor()}
        p-4 mb-2 rounded-lg shadow-sm cursor-move
        ${isDragging ? 'opacity-50' : 'opacity-100'}
        transition-all duration-200
      `}
        >
            <p className="font-semibold mb-2 text-[#232360]">{task.title}</p>
            <p className="text-sm font-medium text-[#768396]">Create content for peceland App</p>
            <div className="border-[#E2E2E2] border mt-2 rounded-md py-[2px] px-4 w-fit">
                <p className='text-sm text-[#232360] font-semibold'>10 April 2025</p>
            </div>
            <img
                src={"https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/2494/live/cc0a6500-0c00-11ed-93ba-314ede9cd985.jpg"} alt="task"
                className='w-6 h-6 object-cover rounded-full mt-5 ' />
        </div>
    );
}