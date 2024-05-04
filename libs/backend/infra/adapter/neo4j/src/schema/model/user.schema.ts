import { gql } from '@apollo/client'

export const userSchema = gql`
  enum Role {
    User
    Admin
  }

  interface WithOwner {
    owner: User! @relationship(type: "OWNED_BY", direction: OUT)
  }

  type User @exclude(operations: [UPDATE]) {
    id: ID! @id(autogenerate: false)
    auth0Id: String! @unique
    email: String!
    username: String! @unique
    types: [BaseType!]! @relationship(type: "OWNED_BY", direction: IN)
    apps: [App!]! @relationship(type: "OWNED_BY", direction: IN)
    elements: [Element!]! @relationship(type: "OWNED_BY", direction: IN)
    components: [Component!]! @relationship(type: "OWNED_BY", direction: IN)
    atoms: [Atom!]! @relationship(type: "OWNED_BY", direction: IN)
    # Some issue using required array of enum, can't add using []! signature
    # roles: [Role!] @default(value: User)
    roles: [Role!]
    tags: [Tag!]! @relationship(type: "OWNED_BY", direction: IN)
  }

  #  extend type User
  #    @auth(
  #      rules: [
  #        {
  #          operations: [CREATE, UPDATE]
  #          roles: ["User"]
  #          where: { auth0Id: "$jwt.sub" }
  #          bind: { auth0Id: "$jwt.sub" }
  #        }
  #        {
  #          operations: [UPDATE, CREATE, DELETE]
  #          roles: ["Admin"]
  #          #          where: { auth0Id: "$jwt.sub" }
  #          #          bind: { auth0Id: "$jwt.sub" }
  #        }
  #      ]
  #    )
`
