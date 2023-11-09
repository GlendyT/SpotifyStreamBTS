import {getMusica, getAlbumsingles, getSolitarios} from "../models/musica.server"
import { useLoaderData } from "@remix-run/react"
import ListadoCanciones from "../components/listado-canciones"
import ListadoUnicosingles from "../components/listado-unicosingles"
import ListadoSolo from "../components/listado-solo"
import styles from "../styles/canciones.css"


export function meta() {
  return [ 
  (
      {
          title:"BTS - Musica",
          description: "Musica BTS"
      }
  )
]
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

export async function loader () {
 
  const [musica, music, musi] = await Promise.all([
    getMusica(),
    getAlbumsingles(),
    getSolitarios()
  ])

  return {
    musica: musica.albums,
    music: music.singles,
    musi:musi.solos
  }
}
export default function todo() {

  const {musica, music, musi} = useLoaderData()


  return (
    <>
     <main className="contenedor">
     <h2 className="heading">Albumes de BTS</h2>

     <ListadoCanciones
      musica={musica}
     />

     <ListadoSolo 
      musi={musi}
     />

     <ListadoUnicosingles
      music={music}
     />

     </main>
    </>
  )
}
