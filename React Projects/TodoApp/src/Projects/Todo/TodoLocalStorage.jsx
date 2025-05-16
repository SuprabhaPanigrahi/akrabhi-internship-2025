// const todoKey = "reactTodo";

// export const getLocalStorageTodoData = () => {
//   const rawTodos = localStorage.getItem(todoKey);
//   if (!rawTodos) return [];
//   return JSON.parse(rawTodos);
// };

// export const setLocalStorageTodoData = (task) => {
//   return localStorage.setItem(todoKey, JSON.stringify(task));
// };



export const getLocalStorageTodoData = () => {
  try {
    const storedData = localStorage.getItem("todoData");
    return storedData ? JSON.parse(storedData) : [];
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return [];
  }
};

export const setLocalStorageTodoData = (data) => {
  try {
    localStorage.setItem("todoData", JSON.stringify(data));
  } catch (error) {
    console.error("Error writing to localStorage:", error);
  }
};