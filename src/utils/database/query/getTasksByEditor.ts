/** @format */

import {Task} from '../../../models/task'
import {mapper} from '../../../service/datamapper'
import {FunctionExpression, AttributePath, beginsWith, equals} from '@aws/dynamodb-expressions'

export const getTasksByEditor = async ({workspace, editor}: {editor: string; workspace: string}) => {
  return new Promise(async (resolve, reject) => {
    const res: any = []
    for await (const foo of mapper.query(Task, {
      type: 'And',
      conditions: [
        {type: 'Equals', subject: 'workspace', object: workspace},
        new FunctionExpression('begins_with', new AttributePath('taskId'), editor),
      ],
    })) {
      res.push(foo)
    }
    if (res.length > 0) {
      console.log(res)
      resolve(res)
    } else if (res.length === 0) {
      reject(new Error(`Keine Task bei workspace ${workspace} von user ${editor} gefunden`))
    }
  })
}
