/** @format */

import {createTask, editTask, deleteTask} from '../utils/database'
export const _Mutation = {
  createTask: async (obj, args, {Authentication}, info) => {
    return await createTask(args)
  },
  editTask: async (obj, args, {Authentication}, info) => {
    return await editTask(args)
  },
  deleteTask: async (obj, args, {Authentication}, info) => {
    return await deleteTask(args)
  },
}
