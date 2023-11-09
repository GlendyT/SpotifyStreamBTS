import { Link } from "@remix-run/react"
import { formatearCantidad} from "~/utils/helpers"

export default function Unicosingles({unicosingles}) {

  const { album, 
          totalStreams, 
          gainInStreams, 
          playcount, 
          tracks, 
          albumId} = unicosingles
  const img = tracks[0].image_url
  const gain = tracks[0].playcount
  const name = tracks[0].name
  const uri = albumId

  return (
   <div className="caja">
    <Link to={`https://open.spotify.com/album/${albumId}`} target="_blank" > 
   <img className="imagen"  src={tracks[0].image_url} alt={`Imagen album ${album}`}/>
   </Link>
    <div>
      <h3 className="titulo" >Album: {album}</h3>
      <p className="titulo">Canción</p>
      <div className="gird-cols-6"> 
        <p className="listado"> {tracks[0].name}</p>
        <p className="conteo">Total: 
        {formatearCantidad(tracks[0].playcount)} 
          <p className="conteoind"> 
            + {formatearCantidad(gainInStreams)}
          </p>
        </p>
     </div>
    <p className="stream">Streams diarios: +{formatearCantidad(gainInStreams)} </p>
  </div>
  </div> 
  )
}