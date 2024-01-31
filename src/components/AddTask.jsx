import { useContext, useState } from "react";
import { TasksContext } from "../context";

export default function AddTask({ setIsShow, editableTask , setEditableTask}) {
 
  const  initialTask = {
    id: crypto.randomUUID(),
    title: "",
    description: "",
    isFavorite: false,
    priority: "",
    tags: [],
  };
  const [task, setTask] = useState(editableTask ? editableTask : initialTask);
  const { dispatch } = useContext(TasksContext);
//  the following function will control the form 
  function handleOnChange(key, value) {
    if (key == "tags") {
      const tags = value.split(",");
      setTask({
        ...task,
        [key]: tags,
        id: editableTask ? editableTask.id : crypto.randomUUID(),
      });
    } else {
      setTask({
        ...task,
        [key]: value,
        id: editableTask ? editableTask.id : crypto.randomUUID(),
      });
    }
  }
// the following function will work for saving a new task and edit a existing task 
  function handleSave(e){
    e.preventDefault();
    if (editableTask) {
      dispatch({
        type: "edited",
        payload: task,
      });
      setEditableTask(null);
    } else {
      dispatch({
        type: "added",
        payload: task,
      });
    }
    setTask(initialTask);
    setIsShow(false);
  }
  return (
    <div className="absolute left-[30%] top-0  z-50">
      <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          Add New Task
        </h2>

        {/* <!-- inputs --> */}
        <div className="space-y-9 text-white lg:space-y-10">
          {/* <!-- title --> */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              value={task.title}
              required
              onChange={(e) => handleOnChange("title", e.target.value)}
            />
          </div>
          {/* <!-- description --> */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              value={task.description}
              onChange={(e) => handleOnChange("description", e.target.value)}
              required
            ></textarea>
          </div>
          {/* <!-- input group --> */}
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            {/* <!-- tags --> */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                value={task.tags}
                required
                onChange={(e) => handleOnChange("tags", e.target.value)}
              />
            </div>
            {/* <!-- priority --> */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                required
                onChange={(e) => handleOnChange("priority", e.target.value)}
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>
        {/* <!-- inputs ends --> */}
        <div className="mt-4 flex justify-center lg:mt-6 flex justify-between">
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={(e) => handleSave(e)}
          >
            Save
          </button>
          <button
            className="rounded bg-red-500 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={() => {
              setIsShow(false);
              setTask(initialTask);
              setEditableTask(null);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
