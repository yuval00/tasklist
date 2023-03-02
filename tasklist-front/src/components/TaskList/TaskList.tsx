import TaskInterface from "../../interfaces/Task";
import Task from "../Task/Task";

interface IProps {
    tasks: Array<TaskInterface>,
    error?: string | null
}

const TaskList = (props: IProps) => {
    return(
        <div className="bg-slate-500 rounded-sm w-1/2 text-left">
            <span className="text-black my-2 mx-2">Your Tasks</span>
            {props.tasks.length ? props.tasks.map(task => <Task id={task.id} key={task.id} title={task.title} completed={task.completed}/>) : <p className="text-center mb-2">Add some Tasks!</p>}
            {props.error && <p className="text-center mb-2">Encountered an Error while fetching tasks: {props.error}</p>}
        </div>
    )
}

export default TaskList;