import {getMusica, getAlbumsingles, getSolitarios} from "../models/musica.server"
import { useLoaderData } from "@remix-run/react"
import Canciones from "../components/canciones"
import Unicosingles from "../components/unicosingles"
import Solo from "../components/solo"
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

      {musi?.length && (
        <div className="musica-grid">
          {musi.map( solo =>(
            <Solo
             key={solo?.album}
             solo={solo}
            />
          ))}
        </div>
      )}

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
    </>
  )
}
