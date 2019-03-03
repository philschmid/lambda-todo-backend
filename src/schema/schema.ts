/** @format */
import {gql} from 'apollo-server-express'
export const schema = gql`
  type Query {
    hello(s: String): String
    getUserByUserId(userid: String): User
    getUserByName(name: String): User
    testToken(id: Int): String
  }
  type Mutation {
    createToken(userid: String): String
    createUser(name: String!, password: String, email: String): User
  }
  type User {
    userid: String
    name: String
    password: String
    email: String
  }
`
