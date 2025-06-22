// js
// react
// thrid
// owm
import { Link } from "../components/Link"

function HomePage() {
    return (
    <>
        <h1>Home</h1>
        <p>
        Esta page es una pagé de ejemplo para crear un React Router desde cero.
        </p>
        <Link to='/about'>Ir a About</Link>
    </>
    )
}

// exports.
export default HomePage;