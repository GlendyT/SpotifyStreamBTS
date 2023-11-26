import {Link, useLocation} from "@remix-run/react"


export default function Navegacion() {

    const location = useLocation()
  return (
     <nav className="navegacion">
            <Link
                to="/"
                className={location.pathname === "/" ? "active" : " "}
            > BTS </Link>
            <Link
                to="/apobangpo"
                className={location.pathname === "/apobangpo" ? "active" : " "}
            >BTS ON SPOTIFY </Link>
     </nav>
  )
}
