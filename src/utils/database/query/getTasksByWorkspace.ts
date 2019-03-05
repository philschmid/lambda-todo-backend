/** @format */

import {Task} from '../../../models/task'
import {mapper} from '../../../service/datamapper'

export const getTasksByWorkspace = async ({workspace}: {workspace?: string}) => {
  return new Promise(async (resolve, reject) => {
    const res: any = []
    for await (const task of mapper.query(Task, {workspace})) {
      res.push(task)
    }
    if (res.length > 0) {
      console.log(res)
      resolve(res)
    } else if (res.length === 0) {
      reject(new Error(`Keine Task bei Workspace ${workspace} gefunden`))
    }
  })
}
