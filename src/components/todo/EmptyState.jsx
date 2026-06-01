import { ListTodo } from "lucide-react";

const EmptyState = () => {
    return (
        <div className="flex flex-col items-center gap-3 mt-20">
            <ListTodo className="size-12 text-gray-500/50" />

            <p className="text-center text-gray-500">
                No tasks yet. Add one above!
            </p>
        </div>
    );
}

export default EmptyState;