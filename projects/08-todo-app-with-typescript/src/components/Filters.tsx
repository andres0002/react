// js
// react
// third
// own
import { TODO_FILTERS, FILTERS_BUTTONS } from "../consts/consts";

interface Props {
    filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS];
    onFilterChange: (filter: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]) => void;
}

function Filters({
    filterSelected,
    onFilterChange
}: Props) {
    // const hamdleClick = (key: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]) => {

    // }

    return (
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTTONS).map(([key, {href, literal}]) => {
                    const isSelected = key === filterSelected;
                    const className = isSelected ? 'selected' : '';
                    return (
                        <li key={key}>
                            <a
                                className={className}
                                href={href}
                                onClick={(event) => {
                                    event.preventDefault();
                                    onFilterChange(key as typeof TODO_FILTERS[keyof typeof TODO_FILTERS])
                                }}
                            >
                                {literal}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

// exports
export default Filters;