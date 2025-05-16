import { useState, useEffect } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";

export const Todo = () => {
  const [tasks, setTasks] = useState(() => getLocalStorageTodoData());

  // Save to localStorage whenever tasks change
  useEffect(() => {
    setLocalStorageTodoData(tasks);
  }, [tasks]);

  const handleFormSubmit = (inputValue) => {
    const { content } = inputValue;

    // Check if the input field is empty
    if (!content.trim()) return;

    // Check if the task already exists
    const isTodoContentMatched = tasks.find(
      (task) => task.content.toLowerCase() === content.toLowerCase()
    );
    if (isTodoContentMatched) return;

    const newTask = {
      id: Date.now().toString(),
      content,
      checked: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTodo = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleClearTodoData = () => {
    setTasks([]);
  };

  const handleCheckedTodo = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {tasks.map((task) => (
            <TodoList
              key={task.id}
              id={task.id}
              data={task.content}
              checked={task.checked}
              onHandleDeleteTodo={handleDeleteTodo}
              onHandleCheckedTodo={handleCheckedTodo}
            />
          ))}
        </ul>
      </section>

      {tasks.length > 0 && (
        <section>
          <button className="clear-btn" onClick={handleClearTodoData}>
            Clear all
          </button>
        </section>
      )}
    </section>
  );
};