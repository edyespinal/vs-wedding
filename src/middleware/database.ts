import { MongoClient } from 'mongodb'
import nextConnect from 'next-connect'

const client = new MongoClient(process.env.MONGO_URI as string, {})

async function database(req: any, res: any, next: () => Promise<any>) {
  await client.connect()

  req.dbClient = client
  req.db = client.db('invitados')

  return next()
}

const middleware = nextConnect()

middleware.use(database)

export default middleware
