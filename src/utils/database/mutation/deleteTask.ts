/** @format */

import {Task} from '../../../models/task'
import {mapper} from '../../../service/datamapper'

export const deleteTask = async ({workspace, taskId}: {workspace: string; taskId?: string}) => {
  return await mapper.delete(Object.assign(new Task(), {taskId, workspace}))
}
