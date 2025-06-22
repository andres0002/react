// js
// react
// third
// own
import { Link } from "../components/Link"

export function SearchPage({routeParams}) {
    return (
        <>
            <h1>Search with query === {routeParams.query}</h1>
            <Link to='/'>Ir a Home</Link>
        </>
    )
}