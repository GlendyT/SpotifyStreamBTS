import { Link } from "@remix-run/react"
import { formatearCantidad} from "~/utils/helpers"

export default function Artista({artista}) {
  const {followers, monthlyListeners, image, name, uri} = artista


  return (
    <div className="artista">
      <Link to={uri} target="_blank"> 
      <img className="imagen" src={image} alt={`Imagen del Artista $(name)`}/>
      </Link>
      <div>
        <h3 className="titulo" >{name}</h3>
        <div className="grid-cols-6"> 
         <p className="descripcion">Oyentes Mensuales: {formatearCantidad(monthlyListeners)}  </p>
         <p className="seguidores">Seguidores: {formatearCantidad(followers)} </p>
       </div>
      </div>
    </div>
  )
}
 