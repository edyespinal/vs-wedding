export const typeDefs = `
type Query {
  guests: [Guest!]!
  guest(id: ID!): Guest
}

type Mutation {
  newGuest(guest: GuestInfo!): Guest!
  updateGuest(id: ID!, update: GuestInfo!): Guest
  deleteGuest(id: ID!): Guest
}

type Guest {
  id: ID
  name: String!
  slug: String!
  invitados: Int!
  confirmacion: Boolean!
}

input GuestInfo {
  id: ID
  name: String!
  slug: String
  invitados: Int!
  confirmacion: Boolean
}
`
