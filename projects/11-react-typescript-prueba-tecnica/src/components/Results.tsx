// js
// react
// third
// own
import { useUsers } from "../hooks/useUsers";

function Results() {
    const { users } = useUsers();
    return (
        <h2>Results: {users.length}</h2>
    )
}

// exports.
export default Results;