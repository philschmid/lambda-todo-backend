/** @format */
// import {jwtAuth} from '../service/jwtAuth'
// import {AuthenticationError} from 'apollo-server'
import {getTaskByEditor, getTasksByProject, getTasksByEditor} from '../utils/database'

export const _Query = {
  hello: async (obj, {name}, {Authentication}, info) => {
    return `Hello ${name}`
  },
  getTaskByEditor: async (obj, args, {Authentication}, info) => {
    return await getTaskByEditor(args)
  },
  getTasksByEditor: async (obj, args, {Authentication}, info) => {
    return await getTasksByEditor(args)
  },
  getTasksByProject: async (obj, args, {Authentication}, info) => {
    return await getTasksByProject(args)
  },
}
