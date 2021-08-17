import {Link} from "react-router-dom"

function Button({path, name}) {
    return (
        <Link className="btn" to={path}>{name}</Link>
    )
}

export default Button
