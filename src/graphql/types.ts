/* eslint-disable no-unused-vars */
export type Guest = {
  id: string
  name: string
  slug: string
  invitados: number
  confirmacion: boolean
}

export type Resolvers = {
  Query: {
    guests: () => Promise<any>
    guest: (root: any, args: Guest, ctx: any) => Promise<any>
  }

  Mutation: {
    newGuest: (root: any, args: { guest: Guest }, ctx: any) => Promise<any>
    updateGuest: (root: any, args: { guest: Guest }, ctx: any) => Promise<any>
    deleteGuest: (root: any, args: { guest: Guest }, ctx: any) => Promise<any>
  }
}
