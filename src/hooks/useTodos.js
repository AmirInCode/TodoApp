import { useEffect, useState } from "react";

import { arrayMove } from "@dnd-kit/sortable";


const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos
      ? JSON.parse(storedTodos)
      : [];
  });

  // Persist todos
  useEffect(() => {
    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );
  }, [todos]);

  // Add
  const addTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  // completed
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // Delete
  const deleteTodo = (id) => {
    setTodos((prev) =>
      prev.filter((todo) => todo.id !== id)
    );
  };

  // Update
  const updateTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, text: newText }
          : todo
      )
    );
  };

  // Reorder
  const reorderTodos = (activeId, overId) => {
    if (activeId === overId) return;

    setTodos((prev) => {
      const oldIndex = prev.findIndex(
        (todo) => todo.id === activeId
      );

      const newIndex = prev.findIndex(
        (todo) => todo.id === overId
      );

      return arrayMove(prev, oldIndex, newIndex);
    });
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    updateTodo,
    reorderTodos,
    toggleTodo
  };
};

export default useTodos;