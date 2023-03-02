import { useContext, useState } from "react"
import { UpdateContext } from "../../App";
import { DispatcherActions } from "../../interfaces/Dispatcher";

const AddTaskForm = () => {
    const [taskTitle, setTaskTitle] = useState("")
    const { dispatch } = useContext(UpdateContext);
    const handleTaskTitleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.target.value);
    }

    const handleTaskSubmit = () => {
        setTaskTitle('');
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: taskTitle })
        };
        fetch('http://localhost:5000/tasks', requestOptions)
            .then(res => {
                if(res.status === 200){
                    dispatch({type: DispatcherActions.UPDATE})
                    return res.json()
                  }
            });
    }

    return(
        <div className="bg-slate-500 rounded-sm w-1/2 text-left my-4">
            <span className="text-black my-2 mx-2">Add Task</span>
            <div className="flex flex-row">
                <input value={taskTitle} onChange={handleTaskTitleUpdate} type="text" id="task_title" className="block w-full mx-4 p-2.5 my-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-teal-500" placeholder="Your Task" required />
                <button onClick={handleTaskSubmit} className="mb-2 text-white bg-teal-500 hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 text-center mx-2">Submit</button>
            </div>
        </div>
    )
}

export default AddTaskForm