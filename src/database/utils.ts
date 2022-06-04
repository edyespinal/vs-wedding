import { connect } from 'database'

export const getGuestsCollection = async () => {
  const db = await connect()

  return db.collection<Guest | Guest[]>('invitados')
}

export const getSongsCollection = async () => {
  const db = await connect()

  return db.collection<Song | Song[]>('songs')
}

export const formatGuestsResponse = (guest: any) => ({
  id: guest._id.toHexString(),
  name: guest.name,
  slug: guest.slug,
  invitados: guest.invitados,
  confirmacion: guest.confirmacion,
  confirmados: guest.confirmados,
})

export const formatSongsResponse = (song: any) => ({
  id: song._id.toHexString(),
  artist: song.artist,
  title: song.title,
})
