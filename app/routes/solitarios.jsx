import { useLoaderData } from "@remix-run/react"
import { getSolitarios } from "~/models/musica.server"
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
  const musi = await getSolitarios()
  return musi.solos
}

export default function Solitarios() {
  const musi = useLoaderData()

  return (
    <main className="contenedor">
      <h2 className="heading">Albumes Solitarios</h2>
       
      {musica?.length && (
        <div className="musica-grid">
          {musi.map( solo =>(
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
