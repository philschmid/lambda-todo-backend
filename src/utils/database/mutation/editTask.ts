/** @format */
import {Task} from '../../../models/task'
import {mapper} from '../../../service/datamapper'
import {getTaskByEditor} from '../index'

export const editTask = async (args: Task) => {
  return new Promise(async (resolve, reject) => {
    if (args.taskId && args.workspace) {
      const editItem = await getTaskByEditor({taskId: args.taskId, workspace: args.workspace})
      for (const attributes in args) {
        editItem[attributes] = args[attributes]
      }
      await mapper
        .update(editItem)
        .then(res => resolve(res))
        .catch(err => {
          reject(err)
        })
    } else {
      reject(new Error('keine valide TaskId und Workspace angegeben'))
    }
  })
}
