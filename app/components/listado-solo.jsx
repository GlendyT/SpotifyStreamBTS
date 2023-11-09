import Solo from "./solo"

export default function ListadoSolo({musi}) {
  return (
    <>
     
     {musi?.length && (
        <div className="musica-grid">
          {musi.map( solo =>(
            <Solo
             key={solo?.album}
             solo={solo}
            />
          ))}
        </div>
      )}
      </>
  )
}
