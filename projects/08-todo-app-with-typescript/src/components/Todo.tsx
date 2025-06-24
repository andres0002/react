// js
// react
// third
// own
import { type ITodo } from "../interfaces/todo";

interface Props extends ITodo {
    onRemoveTodo: (id: string) => void;
    onToggleCompleteTodo: (id: string, completed: boolean) => void;
};

const Todo: React.FC<Props> = ({id, title, completed, onRemoveTodo, onToggleCompleteTodo}) => {
    return (
        <div className="view">
            <input
                type="checkbox"
                className="toggle"
                checked={completed}
                onChange={(event) => onToggleCompleteTodo(id, event.target.checked)}
                id={id}
            />
            <label htmlFor={id}>{title}</label>
            <button
                className="destroy"
                onClick={() => onRemoveTodo(id)}
            />
        </div>
    )
}

// exports
export default Todo;