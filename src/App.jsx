import InputForm from './InputForm';
import { DndContext } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import TodoList from './components/todo/TodoList';
import useTodos from "./hooks/useTodos";
import Header from './components/layout/Header';
import { useState } from 'react';

function App() {

  const [filter, setFilter] = useState("all");
  const {
    todos,
    addTodo,
    deleteTodo,
    updateTodo,
    reorderTodos,
    toggleTodo
  } = useTodos();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    reorderTodos(active.id, over.id);
  };

  return (
    <div className='flex w-full h-screen justify-center items-start pt-20 bg-background dark:bg-gray-950'>
      <div className='flex flex-col  p-2 w-150'>
        {/*------ heder -------*/}
        <Header />

        <InputForm onAddTodo={addTodo} />

        <div className="bg-white flex gap-4 mt-4 border border-gray-200/60 px-3 py-1 rounded-lg shadow-md w-fit dark:bg-gray-900 dark:text-white dark:border-gray-800">
          <button onClick={() => setFilter("all")}
            className={`rounded px-2 ${
              filter == 'all' && 'bg-primary text-white'
            }`} >
            All
          </button>

          <button onClick={() => setFilter("active")}
            className={`rounded px-2 ${
              filter == 'active' && 'bg-primary text-white'
            }`} >
            Active
          </button>

          <button onClick={() => setFilter("completed")}
            className={`rounded px-2 ${
              filter == 'completed' && 'bg-primary text-white'
            }`} >
            Completed
          </button>
        </div>

        <DndContext onDragEnd={handleDragEnd}>
          <SortableContext
            items={todos}
            strategy={verticalListSortingStrategy} >
            <TodoList
              todos={filteredTodos}
              onDelete={deleteTodo}
              onUpdate={updateTodo}
              onToggle={toggleTodo}
            />
          </SortableContext>
        </DndContext>

      </div>
    </div>

  )
}

export default App
