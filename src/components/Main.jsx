import { useReducer, useState } from "react";
import { TasksContext } from "../context";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import tasksReducer from "../reducer/taskReducer";
import tasksData from "../data/data";
import AddTask from "./AddTask";


export default function Main() {
    const [tasks, dispatch] = useReducer(tasksReducer, tasksData);
    const [isShow, setIsShow] = useState(false);
    const [editableTask, setEditableTask] = useState(null);
    function handleAddTask(task){
        setIsShow(!isShow);
        task && setEditableTask(task);

    }
   
  return (
   <TasksContext.Provider value={{tasks, dispatch}}>

     <section className="mb-20" id="tasks">
       {isShow && <AddTask setIsShow={setIsShow} editableTask={editableTask}/>}
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onAddTask={handleAddTask}/>
          <TaskList onAddTask={handleAddTask}/>
        </div>
      </div>
    </section>
   </TasksContext.Provider>
  );
}
