import { connect } from 'database'

import { Guest } from './types'

export const getGuestsCollection = async () => {
  const db = await connect()

  return db.collection<Guest | Guest[]>('invitados')
}

export const formatDbResponse = (dbObject: any) => ({
  id: dbObject._id.toHexString(),
  name: dbObject.name,
  slug: dbObject.slug,
  invitados: dbObject.invitados,
  confirmacion: dbObject.confirmacion,
})
