import { useLoaderData } from "@remix-run/react"
import { getAlbumsingles } from "~/models/musica.server"
import styles from "../styles/canciones.css"
import ListadoUnicosingles from "../components/listado-unicosingles"

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

export async function loader() {
  const music = await getAlbumsingles()
  return music.singles
}

export default function Albumsingles() {
  const music = useLoaderData()

  return (
    <main className="contenedor">
      <h2 className="heading">Album Unico</h2>
      <ListadoUnicosingles
       music={music}
      />
    </main>
  )
}
