import { useReducer, useState } from "react";
import { TasksContext } from "../context";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import tasksReducer from "../reducer/taskReducer";
import tasksData from "../data/data";
import AddTask from "./AddTask";

export default function Main() {
  const [tasks, dispatch] = useReducer(tasksReducer, tasksData);
  const [isShowForm, setIsShowForm] = useState(false);
  const [editableTask, setEditableTask] = useState(null);

  function handleAddTask(task) {
    setIsShowForm(!isShowForm);
    task && setEditableTask(task);
  }

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <section className="mb-20 mx-20">
        {/* form to add or edit task  */}
        {isShowForm && (
          <AddTask
            setIsShow={setIsShowForm}
            editableTask={editableTask}
            setEditableTask={setEditableTask}
          />
        )}
        <div className="container">
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16 ">
            <TaskActions onAddTask={handleAddTask} />
            {tasks.length === 0 ? (
              <h1 className="text-center text-3xl font-bold">
                Task List is Empty ! Please add new task.
              </h1>
            ) : (
              <TaskList onAddTask={handleAddTask} />
            )}
          </div>
        </div>
      </section>
    </TasksContext.Provider>
  );
}
