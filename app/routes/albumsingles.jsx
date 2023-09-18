import { useLoaderData } from "@remix-run/react"
import { getMusica } from "~/models/musica.server"
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
  const musica = await getMusica()
  return musica.singles
}

export default function Albumsingles() {
  const musica = useLoaderData()

  return (
    <main className="contenedor">
      <h2 className="heading">Album Unico</h2>
       
      {musica?.length && (
        <div className="musica-grid">
          {musica.map( unicosingles =>(
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
