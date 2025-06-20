// js
// react
import { createContext, useState } from "react";
// thrid
// own

// 1. Create the context, el que tenemos que consumir.
// eslint-disable-next-line react-refresh/only-export-components
export const FiltersContext = createContext();

// 2. Create the provider, for proveer the context, el que nos provee de
//    acceso al context.
export function FiltersProvider({children}) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    });

    return (
        <FiltersContext.Provider value={{
                filters,
                setFilters
            }}
        >
            {children}
        </FiltersContext.Provider>
    )
}