import TasksKanban from "../../components/kanban/TasksKanban";



export const ItemTypes = {
    TASK: 'task',
};


export default function TaskScreen() {
    return (
        <div>
            <span className="font-bold text-3xl">🔥 Tasks</span>
            <TasksKanban />
        </div>
    )
}
