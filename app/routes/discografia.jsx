import { useLoaderData } from "@remix-run/react"
import { getMusica } from "~/models/musica.server"
import ListadoCanciones from "../components/listado-canciones"
import styles from "../styles/canciones.css"


export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

export async function loader() {
  const musica = await getMusica()
  return musica.albums
}

export default function Discografia() {
  const musica = useLoaderData()

  return (
    <main className="contenedor">
      <h2 className="heading">Albumes de BTS</h2>
      <ListadoCanciones
       musica={musica}
      />
    </main>
  )
}
