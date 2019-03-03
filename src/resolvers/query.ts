/** @format */
import {jwtAuth} from '../service/jwtAuth'
import {AuthenticationError} from 'apollo-server'

export const _Query = {
  hello: async (obj, args, {Authentication}, info) => {
    if (Authentication) {
      return jwtAuth
        .verify(Authentication)
        .then(res => {
          return res
        })
        .catch(err => {
          throw err
        })
    } else {
      throw new AuthenticationError('Wrong Token')
    }
  },
}
// {
//     Query: {
//       hello: () => 'Hello World',
//       // getUserByUserId: async (obj, args, context, info) => {
//       //   return await getUserByUserId(args)
//       // },
//       // getUserByName: async (obj, args, context, info) => {
//       //   console.log(await checkName(args))
//       //   return await checkName(args)
//       //   // return getUserByName(args)
//       // },
//       testToken: () => {
//         return jwtAuth
//           .createAuthToken(jwtBodyforTest)
//           .then(res => {
//             console.log(res)
//             return res
//           })
//           .catch(err => {
//             console.log(err)
//             return err
//           })
//       },

//       // // getAllUserByAge: async (obj, args, context, info) => {
//       // //   return getAllUserByAge(args, 'age')
//       // // },
//       // getAllUserByIdWithUsernameBW: async (obj, args, context, info) => {
//       //   return getAllUserByIdWithUsernameBW(args, 'age')
//       // },

//       // getUserByFilterName: async (obj, args, context, info) => {
//       //   return getUserByFilterName(args)
//       // },
//       // getUserByFilterLSI: async (obj, args, context, info) => {
//       //   return getUserByFilterLSI(args)
//       // },
//       // getUserByFilterLSICON: async (obj, args, context, info) => {
//       //   return getUserByFilterLSICON(args)
//       // },
//     },
//     // Mutation: {
//     //   createUser: async (obj, args, context, info) => {
//     //     return createUser(args)
//     //   },
//     // },
//   }
