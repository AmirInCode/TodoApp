import TodoItem from "./TodoItem";
import EmptyState from "./EmptyState";

const TodoList = ({ todos, onDelete, onUpdate,onToggle }) => {
  if (todos.length === 0) {
    return (
      <EmptyState />
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