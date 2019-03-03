/** @format */

import {jwtAuth} from '../service/jwtAuth'

export const _Mutation = {
  createToken: () => {
    return jwtAuth.createAuthToken({userid: 'max', role: ['user', 'admin']}).then(res => {
      return res
    })
  },
}
