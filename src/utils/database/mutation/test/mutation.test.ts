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
const testFailTask: any = {
  ss: 'testWorkspace',
}

it('Test create Task', async () => {
  await expect(createTask(testSuccessTask)).resolves.toMatchObject({title: testSuccessTask.title})
  await expect(createTask(testFailTask)).rejects.toThrow()
})

it('edit Task', async () => {
  await expect(editTask(testupdateTask)).resolves.toMatchObject({title: testupdateTask.title})
})
it('edit Task Project', async () => {
  await expect(editTask(testupdateProject)).resolves.toMatchObject({project: testupdateProject.project})
  await expect(editTask(testFailTask)).rejects.toThrow()
})

it('delete Task', async () => {
  await expect(deleteTask(testSuccessTask)).resolves.toMatchObject({workspace: testSuccessTask.workspace})
  await expect(deleteTask(testFailTask)).rejects.toThrow()
})
