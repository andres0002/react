// js
// react
import { useContext } from "react";
// third
// own
import { FiltersContext } from "../context/filters";

export function useFilters () {
    const context = useContext(FiltersContext);

    if ([undefined, null].includes(context)) {
        throw new Error("useFilters must used within a FiltersProvider.");
    }

    const {filters, setFilters} = context;

    const filterProducts = (products) => {
        return products.filter(product => {
            return (
                product.price >= filters.minPrice &&
                (
                    filters.category === 'all' ||
                    product.category === filters.category
                )
            )
        });
    }

    return {filters, setFilters, filterProducts}
}