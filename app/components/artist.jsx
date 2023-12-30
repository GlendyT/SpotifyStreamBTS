import { Link } from "@remix-run/react"

function Artist({artist}) {
  const {image, name, uri} = artist




  return (
    <div className="artista">
      <div >
      <Link to={uri} target="_blank"> 
      <img className="imagen" src={image} alt={`Imagen del Artista $(name)`}/>
      </Link>
      <div>
        <h3 className="titulo" >{name}</h3>
      </div>
      </div>
    </div>
  )
}

export default Artist;