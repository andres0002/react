// js
// react
// third
// own
import { type ITodo } from "../interfaces/todo";
import Todo from "./Todo";

interface IProps {
    todos: ITodo[];
    onRemoveTodo: (id: string) => void;
    onToggleCompleteTodo: (id: string, completed: boolean) => void;
}

function Todos({todos, onRemoveTodo, onToggleCompleteTodo}: IProps) {
    return (
        <ul className="todo-list">
            {
                todos.map(todo => {
                    return (
                        <li
                            key={todo.id}
                            className={`${todo.completed ? 'completed' : ''}`}
                        >
                            <Todo
                                id={todo.id}
                                title={todo.title}
                                completed={todo.completed}
                                onRemoveTodo={onRemoveTodo}
                                onToggleCompleteTodo={onToggleCompleteTodo}
                            />
                        </li>
                    )
                })
            }
        </ul>
    )
}

// exports
export default Todos;