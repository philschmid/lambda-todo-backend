/** @format */

import {ApolloServer, defaultPlaygroundOptions} from 'apollo-server-lambda'
import {schema} from './schema/schema'
import {resolvers} from './resolvers'
import {verify} from './service/JWT'
import {AuthenticationError} from 'apollo-server'

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  playground: defaultPlaygroundOptions,
  context: ({event: {headers}}) => {
    if (headers.Authorization) {
      return verify(headers.Authorization)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          throw err
        })
    } else {
      throw new AuthenticationError(`Wrong Token ${headers.Authorization}`)
    }
  },
})

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
})
