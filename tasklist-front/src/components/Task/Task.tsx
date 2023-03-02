import TaskInterface from "../../interfaces/Task";
import Checkbox from "../Checkbox/Checkbox";
import DeleteButton from "../DeleteButton/DeleteButton";
import { UpdateContext } from "../../App";
import { useContext } from "react";
import { DispatcherActions } from "../../interfaces/Dispatcher";


const Task = (taskInfo: TaskInterface) => {
    const { dispatch } = useContext(UpdateContext);
    const handleUpdateStatus = (status: boolean) => {
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed: status })
        };
        fetch(`http://localhost:5000/tasks/${taskInfo.id}`, requestOptions)
            .then(res => {
                if(res.status === 200){
                    dispatch({type: DispatcherActions.UPDATE})
                    return res.json()
                  }
            })
    }

    const handleDeleteTask = () => {
        const requestOptions = {
            method: 'DELETE'
        };
        fetch(`http://localhost:5000/tasks/${taskInfo.id}`, requestOptions)
            .then(res => {
                if(res.status === 200){
                    dispatch({type: DispatcherActions.UPDATE})
                    return res.json()
                  }
            })
    }

    
    return(
        <div className="flow-root bg-teal-200 rounded-lg px-2 my-2 mx-1">
            <p className="float-left">{taskInfo.title}</p>
            <div className="flex float-right flex-row">
                <Checkbox handleCheck={handleUpdateStatus} completed={taskInfo.completed} />
                <DeleteButton handleDelete={handleDeleteTask} />
            </div>
        </div>
    )
}

export default Task;