export async function getArtistas() {
    const respuesta = await fetch(`${process.env.API_URL}/spotify-profiles`)
    return await respuesta.json()
} 

