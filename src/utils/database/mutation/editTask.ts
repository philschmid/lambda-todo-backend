/** @format */
import {Task} from '../../../models/task'
import {mapper} from '../../../service/datamapper'
import {getTaskByEditor} from '../index'

export const editTask = async (args: Task, taskId?: string) => {
  let editItem
  if (taskId) {
    editItem = await getTaskByEditor({taskId, workspace: args.workspace})
  } else {
    editItem = await getTaskByEditor({taskId: args.taskId, workspace: args.workspace})
  }
  for (const attributes in args) {
    editItem[attributes] = args[attributes]
  }
  console.log(editItem)
  return await mapper.update(editItem)
}
