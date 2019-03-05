/** @format */

import {Task} from '../../../models/task'
import {mapper} from '../../../service/datamapper'

export const createTask = async (args: Task) => {
  const date = new Date().toISOString()
  console.log(date)
  const newTask: Task = {...{taskId: `${args.editor}-${args.title}-${date}`}, ...args}
  const toSave = Object.assign(new Task(), newTask)
  console.log(toSave)
  return await mapper
    .put(toSave)
    .then(objectSaved => {
      return objectSaved
    })
    .catch(err => {
      return err
    })
}
