import { useLoaderData } from "@remix-run/react"
import { getArtistas } from "~/models/artistas.server"
import ListadoArtistas from "~/components/listado-artistas"
import styles from "~/styles/canciones.css"

export function meta() {
    return [ 
    (
        {
            title:"BTS - Artistas",
            description: "Miembros de BTS"
        }
    )
 ]
}

export function links() {
  return [
    {
      rel:"stylesheet",
      href: styles
    }
  ]
}

export async function loader() {
  const artistas = await getArtistas()
  return artistas.results
} 

export default function Artistas() {
  const artistas = useLoaderData()

  return (
    <main className="contenedor">
      <h2 className="heading"> MIEMBROS DE BTS </h2>
      

        <div className="artistas-grid">
           <ListadoArtistas
            artistas={artistas}
           />
        </div>

    </main>
  )
}
