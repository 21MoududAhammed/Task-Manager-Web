export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [...tasks, action.payload];
    }
    case "edited": {
      return tasks.map((task) => {
        if (task.id !== action.payload.id) {
          return task;
        } else {
          return action.payload;
        }
      });
    }
    case "deleted": {
      return tasks.filter((item) => item.id !== action.payload);
    }
    case "delete_all": {
      return [];
    }
    case "search": {
      const nextTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return nextTasks.length !== 0 ? nextTasks : [...tasks];
    }
    case "makeFav": {
      const nextTasks = tasks.map((task) => {
        if (task.id === action.payload) {
          return { ...task, isFavorite: !task.isFavorite };
        } else {
          return task;
        }
      });
      return nextTasks;
    }
    default: {
      console.log("unknown type");
    }
  }
}
