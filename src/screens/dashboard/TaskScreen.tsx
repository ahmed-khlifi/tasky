import TasksKanban from "../../components/kanban/TasksKanban";
import AddTask from "../../components/task/AddTask";



export const ItemTypes = {
    TASK: 'task',
};


export default function TaskScreen() {
    return (
        <div>
            <span className="font-bold text-3xl">🔥 Tasks</span>
            <AddTask />
            <TasksKanban />
        </div>
    )
}
