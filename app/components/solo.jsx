import { Link } from "@remix-run/react"
import { formatearCantidad} from "~/utils/helpers"

 function Solo({solo}) {

const { album, 
        totalStreams, 
        gainInStreams,
        tracks, 
        albumId} = solo

//Traer todas las canciones 
  const tracks1 = []

  tracks.map((song, idx) => {

    let tempObj = {songName: "", songPlayCount: 0, songImgUrl: "", songGainInStreams: 0, songArtist:""}
    tempObj.songName = song.name,
    tempObj.songPlayCount = song.playcount,
    tempObj.songGainInStreams = song.gainInStreams,
    tempObj.songArtist = song.artist,
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
       <div> 
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
      </div>
   <p className="stream">Streams diario: +{formatearCantidad(gainInStreams)} </p>
   <p className="stream">Total Reproducciones:+{formatearCantidad(totalStreams)}  </p>
   </div> 
  </div> 
  )
}
export default Solo;



    