import { 
  FormControl, 
  InputLabel, 
  Select
 } from "@mui/material"
import { getMusica } from "../models/musica.server";
import { useLoaderData } from "@remix-run/react"


export async function loader() {
    const musica = await getMusica()
    return musica.albums
  }

export const Formulario = ({formulario}) => {
    const musica = useLoaderData()

    const music = []
    musica.map( (song, idx ) => {
        let tempObj = { songName: ""}
        tempObj.songName = song.album,
        music.push(tempObj)
      })

  return (
    <form > 
      <FormControl> 
        <label className="filtro">Filtrar por album</label>
        <Select
         label="Album"
         value=''> 
    {
      music.map( (song) => {
        return(
              <h1 className="lista">{song.songName}</h1>
        )
      })
    }
     </Select> 
    </FormControl>
   </form>
  )
}
