/** @format */

import {Task} from '../../../models/task'
import {mapper} from '../../../service/datamapper'

export const getTaskByEditor = async ({workspace, taskId}: {workspace: string; taskId?: string}) => {
  const toFetch: Task = new Task()
  toFetch.workspace = workspace
  toFetch.taskId = taskId
  return await mapper.get({item: toFetch})
}
