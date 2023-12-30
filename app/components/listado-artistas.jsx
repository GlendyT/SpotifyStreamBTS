import Artist from "./artist";

function ListadoArtistas({artistas}) {
  return (
    <> 
    {artistas?.length && (
        <div className="artista">
          {
           artistas.map( artist =>(
            <Artist
             key={artist?.results}
             artist={artist}
            />
          ))}
        </div>
      )}
      </>
  )
}

export default ListadoArtistas;