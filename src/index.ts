/** @format */

import {ApolloServer, defaultPlaygroundOptions} from 'apollo-server-lambda'
import {schema} from './schema/schema'
import {resolvers} from './resolvers'
// import {jwtAuth} from './service/jwtAuth'
import {AuthenticationError} from 'apollo-server'

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  playground: defaultPlaygroundOptions,
  context: ({event: {headers}}) => {
    return headers
    // if (authentication) {
    //   return jwtAuth
    //     .verify(authentication)
    //     .then(res => {
    //       console.log(res)
    //     })
    //     .catch(err => {
    //       throw err
    //     })
    // } else {
    //   throw new AuthenticationError('Wrong Token')
    // }
  },
})

exports.graphqlHandler = server.createHandler()
