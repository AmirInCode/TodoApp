import { useState } from "react";

import { GripVertical, Edit, Trash } from "lucide-react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const TodoItem = ({ todo, onDelete, onUpdate, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);



  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: todo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleSave = () => {
    const trimmedText = editedText.trim();

    if (!trimmedText) return;

    onUpdate(todo.id, trimmedText);
    setIsEditing(false);
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className="bg-white dark:bg-gray-900 dark:text-white border border-gray-200/60 dark:border-gray-600/50 shadow-md p-4 rounded-xl flex justify-between items-center"
    >
      <div
        className="flex items-center gap-2"

      >
        <GripVertical
          {...attributes}
          {...listeners}
          className="cursor-grab" />

        {isEditing ? (
          <input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="border px-2 py-1 rounded border-primary"
          />
        ) : (
          <div>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className="mr-2  accent-primary"
            />
                

            <span
              className={`text-md ${todo.completed ? 'line-through text-gray-400' : ''}`}>
              {todo.text}
            </span>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="border border-primary px-2 rounded cursor-pointer"
          >
            Save
          </button>
        ) : (
          <>
            <Edit
              className='cursor-pointer text-gray-600 dark:text-white/80'
              size={20}
              onClick={() => setIsEditing(true)}
            />

            <Trash
              className='cursor-pointer text-gray-600 dark:text-white/80'
              size={20}

              onClick={() => onDelete(todo.id)}
            />
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;