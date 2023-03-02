import React, { createContext, useEffect, useReducer, useState } from 'react';
import './App.css';
import TaskList from './components/TaskList/TaskList';
import TopBar from './components/TopBar/TopBar';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import { Action, DispatcherActions, UpdateState } from './interfaces/Dispatcher';


const initialState = {
  shouldUpdate: true
}

export const UpdateContext = createContext<{
  state: UpdateState;
  dispatch: React.Dispatch<any>;
}>({state: initialState, dispatch: () => null});

const reducer = (state: UpdateState, action: Action) => {
  switch (action.type)
  {
    case (DispatcherActions.UPDATE):
      return {
        ...state,
        shouldUpdate: true
      }
    case (DispatcherActions.DONE):
      return {
        ...state,
        shouldUpdate: false
      }
    default:
      return state
  }
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState); 

  useEffect(() => {
    if (state.shouldUpdate) {
      fetch("http://localhost:5000/tasks").then(res => {
      if(res.status === 200){
        return res.json()
      }
    }).then(data => {
      setTasks(data)
      setError(null)
      dispatch({type: DispatcherActions.DONE})
    })
    .catch(error => setError(error.message))
    }
  }, [state])
  

  return (
    <UpdateContext.Provider value={{state, dispatch}}>
      <TopBar />
      <div className="flex flex-col items-center justify-center bg-slate-400 h-screen">
        <TaskList tasks={tasks} error={error}/>
        <AddTaskForm />
      </div>
    </UpdateContext.Provider>
  );
}

export default App;
