import TaskStatOverView from './TaskStatOverView'

export default function TasksOverviewContaienr() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
      <TaskStatOverView />
      <TaskStatOverView />
      <TaskStatOverView />

    </div>
  )
}
