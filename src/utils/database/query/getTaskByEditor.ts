/** @format */

import {Task} from '../../../models/task'
import {mapper} from '../../../service/datamapper'

export const getTaskByEditor = async ({workspace, taskId}: {workspace: string; taskId?: string}) => {
  return new Promise(async (resolve, reject) => {
    const toFetch: Task = new Task()
    toFetch.workspace = workspace
    toFetch.taskId = taskId
    await mapper
      .get({item: toFetch})
      .then(res => {
        console.log(res)
        resolve(res)
      })
      .catch(err => reject(err))
  })
}
