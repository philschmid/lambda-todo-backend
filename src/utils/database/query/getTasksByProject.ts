/** @format */

import {Task} from '../../../models/task'
import {mapper} from '../../../service/datamapper'

export const getTasksByProject = async ({project, editor}: {editor?: string; project: string}) => {
  return new Promise(async (resolve, reject) => {
    const res: any = []
    for await (const task of mapper.query(Task, {project}, {indexName: 'ProjectGsiIndex'})) {
      res.push(task)
    }
    if (res.length > 0) {
      resolve(res)
    } else if (res.length === 0) {
      reject(new Error(`Keine Task bei Project ${project} von User ${editor} gefunden`))
    }
  })
}
