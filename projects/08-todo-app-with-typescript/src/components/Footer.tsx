// js
// react
// third
// own
import { TODO_FILTERS } from "../consts/consts";
import Filters from "./Filters";

interface Props {
    activeCount: number;
    completedCount: number;
    filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS];
    handleFilterChange: (filter: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]) => void;
    onClearCompleted: () => void;
}

function Footer({
    activeCount = 0,
    completedCount = 0,
    filterSelected,
    handleFilterChange,
    onClearCompleted
}: Props) {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> tareas pendientes
            </span>

            <Filters
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />

            {
                completedCount > 0 && (
                    <button
                        className="clear-completed"
                        onClick={onClearCompleted}
                    >
                        Borrar completadas
                    </button>
                )
            }
        </footer>
    )
}

// exports
export default Footer;