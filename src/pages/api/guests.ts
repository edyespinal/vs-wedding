import { NextApiRequest, NextApiResponse } from 'next'
import slugify from 'slugify'

import { formatGuestsResponse, getGuestsCollection } from 'database/utils'

export default async function guests(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const collection = await getGuestsCollection()
  const { method } = req

  switch (method) {
    case 'GET':
      const allGuests = await collection
        .find()
        .map(formatGuestsResponse)
        .toArray()
      res.status(200).json(allGuests)

      break

    case 'POST':
      const { name, invitados } = req.body

      const newGuest = await collection.insertOne({
        name,
        slug: slugify(name).toLowerCase(),
        invitados: Number(invitados),
        confirmacion: false,
        confirmados: 0,
      })

      res.status(200).json({
        ...newGuest,
        id: newGuest.insertedId,
      })

      break
  }
}
