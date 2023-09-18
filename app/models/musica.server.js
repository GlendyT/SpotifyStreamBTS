export async function getMusica() {
    const respuesta = await fetch(`${process.env.API_URL}/spotify-streams`)
    return await respuesta.json()
}

