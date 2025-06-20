// js
// react
import { useId } from 'react';
// third
// own
import './filters.css';
import { useFilters } from '../../hooks/useFilters';

export function Filters () {
    const minPriceFilterId = useId();
    const categoryFilterId = useId();
    const {filters, setFilters} = useFilters();

    const handleChangeMinPrice = event => {
        const newMinPrice = event.target.value;
        setFilters(prevState => {
            return {
                ...prevState,
                minPrice: newMinPrice
            }
        });
    }

    const handleChangeCategory = event => {
        const newCategory = event.target.value;
        setFilters(prevState => {
            return {
                ...prevState,
                category: newCategory
            }
        });
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Min Price</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min={0}
                    max={2500}
                    value={filters.minPrice}
                    onChange={handleChangeMinPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div className='label-select'>
                <label htmlFor={categoryFilterId}>Category</label>
                <select className='category' name="category" id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="beauty">Beauty</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="furniture">Furniture</option>
                    <option value="groceries">Groceries</option>
                </select>
            </div>
        </section>
    )
}