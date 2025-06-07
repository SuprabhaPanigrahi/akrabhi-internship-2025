"use client";
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../types/todo';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  // Load todos from localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    const todo: Todo = {
      id: uuidv4(),
      text: newTodo,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([...todos, todo]);
    setNewTodo('');
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Todo List</h1>
      <div className="flex mb-6 gap-2">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new task..."
          className="flex-grow px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          Add
        </button>
      </div>
      <ul className="space-y-3">
        {todos.length === 0 ? (
          <p className="text-gray-600 text-center py-4 text-lg">No tasks yet. Add one above!</p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </ul>
      {todos.length > 0 && (
        <div className="mt-6 text-center">
          <p className="text-gray-700 font-medium">
            Completed: <span className="text-blue-600">{todos.filter(t => t.completed).length}</span> / 
            <span className="text-gray-800"> {todos.length}</span>
          </p>
        </div>
      )}
    </div>
  );
}