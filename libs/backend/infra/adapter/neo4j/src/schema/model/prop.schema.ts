import { gql } from '@apollo/client'

export const propSchema = gql`
  type Prop {
    id: ID! @id(autogenerate: false)
    data: String!
  }
`
