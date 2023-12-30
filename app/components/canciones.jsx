import { Link } from "@remix-run/react"
import { formatearCantidad} from "~/utils/helpers"

export default function Canciones({canciones}) {

  const {album, tracks, albumId, gainInStreams, totalStreams} = canciones
  const tracks1 = []

  tracks.map( (song, idx ) => {

    let tempObj = { songName: "", songPlayCount: 0, songImgUrl: "", songGainInStreams: 0,songArtist:""}
    tempObj.songName = song.name,
    tempObj.songPlayCount = song.playcount,
    tempObj.songGainInStreams = song.gainInStreams,
    tempObj.songArtist = song.artist,
    tempObj.songImgUrl = song?.image_url || ""

    tracks1.push(tempObj)
  })

  return (
   <div className="caja" 
        /*style={{ background:`url(${tracks[0].image_url})`, 
        backgroundRepeat:"no-repeat", backgroundSize:"cover"}}*/ >
    <Link  to={`https://open.spotify.com/album/${albumId}`} target="_blank" > 
    <img className="imagen" src={tracks[0].image_url} alt={`Imagen album ${album}` }/>
    </Link>
    
      <div>
          <div className="titulo" >Album: {album}</div>    
      {
        tracks1.map( (song) => {      
          return(
            
            <> 
              <div className="gird-cols-6"> 
                <p className="listado"> {song.songName}</p>
                <p className="conteo" >
                {formatearCantidad(song.songPlayCount)}
                 <p className="conteoind"> 
                 + {formatearCantidad(song.songGainInStreams)}
                 </p>
                </p>
              </div>
            </>
          )
        })
      }
    
    <p className="stream">Streams diario: +{formatearCantidad(gainInStreams)} </p>    
    <p className="stream">Total Reproducciones: +{formatearCantidad(totalStreams)}  </p> 
    </div>
   </div>

  )
}