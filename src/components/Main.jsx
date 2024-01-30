import { useReducer } from "react";
import { TasksContext } from "../context";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import tasksReducer from "../reducer/taskReducer";
import tasksData from "../data/data";

export default function Main() {
    const [tasks, dispatch] = useReducer(tasksReducer, tasksData)
   
  return (
   <TasksContext.Provider value={{tasks, dispatch}}>
     <section className="mb-20" id="tasks">
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions />
          <TaskList />
        </div>
      </div>
    </section>
   </TasksContext.Provider>
  );
}
