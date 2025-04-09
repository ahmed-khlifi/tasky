import CompletionChart from '../../components/home/CompletionChart'
import TasksOverviewContaienr from '../../components/home/tasksOverview/TasksOverviewContaienr'

export default function HomeScreen() {
    return (
        <div>
            <TasksOverviewContaienr />
            <CompletionChart />
        </div>
    )
}


