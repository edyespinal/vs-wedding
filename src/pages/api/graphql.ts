import { createServer } from '@graphql-yoga/node'

import 'graphql-import-node'
import { resolvers } from 'graphql/resolvers'
import { typeDefs } from 'graphql/schema'

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
  endpoint: '/api/graphql',
})

export default server
