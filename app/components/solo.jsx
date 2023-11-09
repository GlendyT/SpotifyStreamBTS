import { Link } from "@remix-run/react"
import { lazy } from "react"
import { formatearCantidad} from "~/utils/helpers"

export default function Solos({solo}) {

  const { album, 
        totalStreams, 
        gainInStreams,
        playcount, 
        tracks, 
        albumId } = solo

  const tracks1 = []

  tracks.map((song, idx) => {

    let tempObj = {songName: "", songPlayCount: 0, songImgUrl: "", songGainInStreams: 0}
    tempObj.songName = song.name,
    tempObj.songPlayCount = song.playcount,
    tempObj.songGainInStreams = song.gainInStreams,
    tempObj.songImgUrl = song.image_url 

    tracks1.push(tempObj)
  })

  return (
   <div className="caja">
    <Link to={`https://open.spotify.com/album/${albumId}`} target="_blank" >
    <img className="imagen" src={tracks[0].image_url} alt={`Imagen album ${album}` }/>
    </Link>
      <div>
        <h3 className="titulo" >Album: {album}</h3>
        <p className="titulo">Canción</p>
        <div className="gird-cols-6"> 
          <p className="artista">Artista: {tracks[0].artist} </p>
       </div> 
        {
        tracks1.map( (song) => {
          return(
            <>
              <div className="gird-cols-6"> 
                <p className="listado"> {song.songName}</p>
                <p className="conteo" >{formatearCantidad(song.songPlayCount)}
                 <p className="conteoind"> 
                 + {formatearCantidad(song.songGainInStreams)}
                 </p>
                </p>
              </div>
            </>
          )
        })
      }
    <p className="stream">Streams diario: {formatearCantidad(gainInStreams)} </p>
    <p className="stream">Total Reproducciones:{formatearCantidad(totalStreams)}  </p>
   </div> 
  </div> 
  )
}