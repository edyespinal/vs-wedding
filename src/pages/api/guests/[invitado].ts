import { NextApiRequest, NextApiResponse } from 'next'

import { getGuestsCollection } from 'database/utils'

export default async function guest(req: NextApiRequest, res: NextApiResponse) {
  const collection = await getGuestsCollection()
  const { method } = req
  const { invitado } = req.query

  switch (method) {
    case 'GET':
      const foundGuest = await collection.findOne({
        slug: invitado,
      })

      if (!foundGuest) {
        res.status(404).json({ error: 'Guest not found' })
      }

      res.status(200).json(foundGuest)

      break

    case 'PATCH':
      const { body } = req

      const updatedGuest = await collection.findOneAndUpdate(
        {
          slug: invitado,
        },
        { $set: body },
        { returnDocument: 'after' }
      )

      res.status(200).json(updatedGuest)

      break

    case 'DELETE':
      const deletedGuest = await collection.findOneAndDelete({
        slug: invitado,
      })

      res.status(200).json(deletedGuest)
  }
}
