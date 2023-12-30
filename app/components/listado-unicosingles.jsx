import Unicosingles from "./unicosingles"

export default function ListadoUnicosingles({music}) {
  return (
    <>
    {music?.length && (
        <div className="musica-grid">
          {
           music.map( unicosingles =>(
            <Unicosingles
             key={unicosingles?.albumId}
             unicosingles={unicosingles}
            />
          ))}      
        </div>
      )} 
    </>
  )
}
