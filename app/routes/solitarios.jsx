import { useLoaderData } from "@remix-run/react"
import { getSolitarios } from "~/models/musica.server"
import styles from "../styles/canciones.css"
import ListadoSolo from "../components/listado-solo"

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
       <ListadoSolo
        musi={musi}
       />
    </main>
  )
}
