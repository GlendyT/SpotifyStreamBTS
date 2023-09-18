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
                to="/discografia"
                className={location.pathname === "/discografia" ? "active" : " "}
            >Albums BTS</Link>
             <Link
                to="/solitarios"
                className={location.pathname === "/solitarios" ? "active" : " "}
            >Albums Solitrios </Link>
            <Link
                to="/albumsingles"
                className={location.pathname === "/albumsingles" ? "active" : " "}
            >Singles Albums </Link>
     </nav>

  )
}
