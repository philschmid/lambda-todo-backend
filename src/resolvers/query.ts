/** @format */
// import {jwtAuth} from '../service/jwtAuth'
// import {AuthenticationError} from 'apollo-server'

export const _Query = {
  hello: async (obj, {name}, {Authentication}, info) => {
    return `Hello ${name}`
  },
  getTaskByEditor: async (obj, args, {Authentication}, info) => {
    return `Hello ${name}`
  },
  getTaskByProject: async (obj, args, {Authentication}, info) => {
    return `Hello ${name}`
  },
}
