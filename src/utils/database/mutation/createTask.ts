/** @format */

import {Task} from '../../../models/task'
import {mapper} from '../../../service/datamapper'

export const createTask = async (args: Task) => {
  return new Promise(async (resolve, reject) => {
    if (args.editor && args.title) {
      const date = new Date().toISOString()
      const toSave = Object.assign(new Task(), {...{taskId: `${args.editor}-${args.title}-${date}`}, ...args})
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
      reject(new Error('keine editor und Title mitgesendet. erstellen des Tasks nicht möglich'))
    }
  })
}
