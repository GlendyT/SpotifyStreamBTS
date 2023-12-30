import {getMusica, getAlbumsingles, getSolitarios} from "../models/musica.server"
import {getArtistas} from "../models/artistas.server"
import { useLoaderData } from "@remix-run/react"
import ListadoCanciones from "../components/listado-canciones"
import ListadoUnicosingles from "../components/listado-unicosingles"
import ListadoSolo from "../components/listado-solo"
import ListadoArtistas from "../components/listado-artistas"
import styles from "../styles/canciones.css"



export function meta() {
  return [ 
  (
      {
          title:"BTS - Música",
          description: "Música BTS"
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
 
  const [musica, music, musi, artistas] = await Promise.all([
    getMusica(),
    getAlbumsingles(),
    getSolitarios(),
    getArtistas()
  ])

  return {
    musica: musica.albums,
    music: music.singles,
    musi:musi.solos,
    artistas: artistas.results
    
  }
}
export default function Apobangpo() {

  const {musica, music, musi, artistas} = useLoaderData()


  return (
    <>
     <main className="contenedor">

     <ListadoArtistas
      artistas={artistas}
     /> 

     <div className="heading">Albumes de BTS</div>

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
