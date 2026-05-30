import { ListTodo } from "lucide-react";

import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onUpdate,onToggle }) => {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 mt-20">
        <ListTodo className="size-12 text-gray-500/50" />

        <p className="text-center text-gray-500">
          No tasks yet. Add one above!
        </p>
      </div>
    );
  }

  return (
    <ul className="flex flex-col mt-14 gap-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

export default TodoList;