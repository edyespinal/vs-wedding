import { ObjectId } from 'mongodb'

import { Resolvers } from './types'
import { formatDbResponse, getGuestsCollection } from './utils'

export const resolvers: Resolvers = {
  Query: {
    guests: async () => {
      const collection = await getGuestsCollection()

      const guests = collection.find().map(formatDbResponse).toArray()

      return guests
    },
    guest: async (_root, { id }) => {
      const collection = await getGuestsCollection()
      const foundGuest = await collection.findOne({
        _id: ObjectId.createFromHexString(id),
      })

      if (!foundGuest) {
        return null
      }

      return formatDbResponse(foundGuest)
    },
  },

  Mutation: {
    newGuest: async (_root, { guest }) => {
      const collection = await getGuestsCollection()
      const newGuest = await collection.insertOne({
        ...guest,
        confirmacion: false,
      })

      return newGuest
    },
    updateGuest: async (_root, { guest }) => {
      const collection = await getGuestsCollection()
      const updatedGuest = await collection.findOneAndUpdate(
        {
          _id: ObjectId.createFromHexString(guest.id),
        },
        { $set: guest },
        { returnDocument: 'after' }
      )

      return updatedGuest
    },
    deleteGuest: async (_root, { guest: { id } }) => {
      const collection = await getGuestsCollection()
      const deletedGuest = await collection.findOneAndDelete({
        _id: ObjectId.createFromHexString(id),
      })

      return deletedGuest
    },
  },
}
