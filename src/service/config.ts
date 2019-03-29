/** @format */

require('dotenv').config({path: `./src/.env.${process.env.NODE_ENV}`})
export default {
  apiGateway: {
    REGION: process.env.REGION,
    URL: process.env.URL,
  },
  cognito: {
    REGION: process.env.REGION,
    USER_POOL_ID: process.env.USER_POOL_ID,
    APP_CLIENT_ID: process.env.APP_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.IDENTITY_POOL_ID,
  },
  // JWK: `https://cognito-idp.${process.env.REGION}.amazonaws.com/${process.env.USER_POOL_ID}/.well-known/jwks.json`,
  JWK: `https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_DWU7RfBAQ/.well-known/jwks.json`,
}
