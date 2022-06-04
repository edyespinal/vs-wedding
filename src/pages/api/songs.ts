import { NextApiRequest, NextApiResponse } from 'next'

import { formatSongsResponse, getSongsCollection } from 'database/utils'

export default async function getSongs(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const collection = await getSongsCollection()
  const { method } = req

  switch (method) {
    case 'GET':
      const allSongs = await collection
        .find()
        .map(formatSongsResponse)
        .toArray()

      res.status(200).json(allSongs)

      break

    case 'POST':
      const { artist, title } = req.body

      const newSong = await collection.insertOne({
        artist,
        title,
      })

      res.status(200).json({
        ...newSong,
        id: newSong.insertedId,
      })

      break
  }
}
