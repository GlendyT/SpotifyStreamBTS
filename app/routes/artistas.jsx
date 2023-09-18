import { useLoaderData } from "@remix-run/react"
import { getArtistas } from "~/models/artistas.server"
import Artista from "~/components/artista"
import styles from "~/styles/artistas.css"

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
      
      {artistas?.length && (
        <div className="artistas-grid">

          {artistas.map( artista => (
           <Artista
            key={artista?.name}
            artista={artista}
           />
          ))}
          
        </div>
      )}
    </main>
  )
}
