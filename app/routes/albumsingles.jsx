import { useLoaderData } from "@remix-run/react"
import { getAlbumsingles } from "~/models/musica.server"
import Unicosingles from "../components/unicosingles"
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
  const music = await getAlbumsingles()
  return music.singles
}

export default function Albumsingles() {
  const music = useLoaderData()

  return (
    <main className="contenedor">
      <h2 className="heading">Album Unico</h2>
       
      {music?.length && (
        <div className="musica-grid">
          {music.map( unicosingles =>(
            <Unicosingles
             key={unicosingles?.albumId}
             unicosingles={unicosingles}
            />
          ))}
        </div>
      )}
    </main>
  )
}
