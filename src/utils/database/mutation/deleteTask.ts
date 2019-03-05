/** @format */

import {Task} from '../../../models/task'
import {mapper} from '../../../service/datamapper'

export const deleteTask = async ({workspace, taskId}: {workspace: string; taskId?: string}) => {
  return new Promise(async (resolve, reject) => {
    await mapper
      .delete(Object.assign(new Task(), {taskId, workspace}))
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}
