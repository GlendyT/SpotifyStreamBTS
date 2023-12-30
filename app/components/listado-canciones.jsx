import Canciones from "./canciones"

export default function ListadoCanciones({musica}) {
  return (
    <> 
    {musica?.length && (
        <div className="musica-grid">
          {
           musica.map( canciones =>(
            <Canciones 
             key={canciones?.album}
             canciones={canciones}
            />
          ))}
        </div>
      )}
      </>
  )
}
