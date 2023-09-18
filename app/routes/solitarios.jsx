import { useLoaderData } from "@remix-run/react"
import { getMusica } from "~/models/musica.server"
import Solo from "~/components/solo"
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
  return musica.solos
}

export default function Solitarios() {
  const musica = useLoaderData()

  return (
    <main className="contenedor">
      <h2 className="heading">Albumes Solitarios</h2>
       
      {musica?.length && (
        <div className="musica-grid">
          {musica.map( solo =>(
            <Solo
             key={solo?.album}
             solo={solo}
            />
          ))}
        </div>
      )}
    </main>
  )
}
