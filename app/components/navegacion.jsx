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
                to="/artistas"
                className={location.pathname === "/artistas" ? "active" : " "}
            > Artistas</Link>
            <Link
                to="/todo"
                className={location.pathname === "/todo" ? "active" : " "}
            >BTS ON SPOTIFY </Link>
     </nav>
  )
}
