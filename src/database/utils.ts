import { connect } from 'database'

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
  confirmados: dbObject.confirmados,
})

export const fetcher = (query: string) =>
  fetch(`${process.env.BASE_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data)
