import { useLoaderData } from "@remix-run/react"
import { getMusica } from "~/models/musica.server"
import Canciones from "~/components/canciones"
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
       
      {musica?.length && (
        <div className="musica-grid">
          {musica.map( canciones =>(
            <Canciones
             key={canciones?.album}
             canciones={canciones}
            />
          ))}
        </div>
      )}
    </main>
  )
}
