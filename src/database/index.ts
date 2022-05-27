import { MongoClient, Db } from 'mongodb'

export let client: MongoClient

export let database: Db

export const connect = async (): Promise<Db> => {
  if (!database) {
    client = await MongoClient.connect(process.env.MONGO_URI as string)
    database = client.db('vs-wedding')
  }

  return database
}
