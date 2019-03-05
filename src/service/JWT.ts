/** @format */

import config from './config'
var jwt = require('jsonwebtoken')
var jwkToPem = require('jwk-to-pem')
import fetch from 'node-fetch'

export const verify = async (token: string) => {
  return new Promise(async (resolve, reject) => {
    const JWK = await fetch(config.JWK).then(function(response) {
      return response.json()
    })
    const pem = await jwkToPem(JWK.keys[1])
    return await jwt.verify(token, pem, {algorithms: ['RS256']}, function(err, decodedToken) {
      if (err) {
        reject(err)
      } else {
        decodedToken.exp <= Math.floor(Number(new Date()) / 1000)
          ? reject(new Error('Token expired'))
          : resolve(decodedToken)
      }
    })
  })
}

// jwt.verify(token, PublicKey, verifyTokenOptions, (err, decoded: any) => {
//   if (err) {
//     reject(err)
//   } else {
//     decoded.exp <= Math.floor(Number(new Date()) / 1000) ? reject(new Error('Token expired')) : resolve(decoded)
//   }
// })
