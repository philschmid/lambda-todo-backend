/** @format */
import {createTask, editTask, deleteTask} from '../../index'

import {Task} from '../../../../models/task'

const testSuccessTask: Task = {
  workspace: 'testWorkspace',
  editor: 'test-User',
  project: 'Testproject',
  title: 'eine Test Task',
  taskId: '123-456',
}

const testupdateTask: any = {
  workspace: 'testWorkspace',
  editor: 'test-User',
  title: 'ein upgedateter Task',
  taskId: '123-456',
}
const testupdateProject: any = {
  workspace: 'testWorkspace',
  project: 'neues Project',
  taskId: '123-456',
}

it('Test Task', async () => {
  expect(await createTask(testSuccessTask)).toMatchObject({title: testSuccessTask.title})
})

it('edit Task', async () => {
  expect(await editTask(testupdateTask)).toMatchObject({title: testupdateTask.title})
})
it('edit Task Project', async () => {
  expect(await editTask(testupdateProject)).toMatchObject({project: testupdateProject.project})
})

it('delete Task', async () => {
  expect(await deleteTask(testupdateTask)).toMatchObject({title: testupdateTask.title})
  // expect(await getTaskByEditor(testSuccessTask)).toThrow()
})
