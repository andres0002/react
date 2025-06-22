// js
// react
// third
// own
import { Link } from "../components/Link"

function Page404() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
        }}>
            <h1>404 no found</h1>
            <img
                src='https://midu.dev/images/this-is-fine-404.gif'
                alt='Gif del perro de This is Fine quemándose vivo'
            />
            <Link to='/'>Ir a Home</Link>
        </div>
    )
}

// exports.
export default Page404;