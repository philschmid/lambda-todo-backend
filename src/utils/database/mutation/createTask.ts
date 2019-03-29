/** @format */

import {Task} from '../../../models/task'
import {mapper} from '../../../service/datamapper'

export const createTask = async (args: Task) => {
  return new Promise(async (resolve, reject) => {
    if (args.editor && args.title && args.taskId) {
      const toSave = Object.assign(new Task(), args)
      console.log(toSave)
      return await mapper
        .put(toSave)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    } else {
      reject(new Error('keine Editor und Title mitgesendet. Erstellen des Tasks nicht möglich'))
    }
  })
}
