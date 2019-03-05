/** @format */

import {
  getTaskByEditor,
  createTask,
  getTasksByEditor,
  getTasksByProject,
  getTasksByWorkspace,
  deleteTask,
} from '../../index'

import {Task} from '../../../../models/task'
import {rejects} from 'assert'

const testSuccessTask1: Task = {
  workspace: 'testWorkspace',
  editor: 'test-User',
  project: 'Testproject',
  title: 'eine Test Task',
  taskId: 'test-User-123',
}
const testSuccessTask2: Task = {
  workspace: 'testWorkspace',
  editor: 'test-User',
  project: 'Testproject2',
  title: 'eine Test Task',
  taskId: 'test-User-456',
}
const testSuccessTask3: Task = {
  workspace: 'testWorkspace',
  editor: 'test-User',
  project: 'Testproject',
  title: 'eine Test Task',
  taskId: 'test-User-123-456',
}
const testSuccessTask4: Task = {
  workspace: 'testWorkspace',
  editor: 'maria',
  project: 'Testproject',
  title: 'eine Test Task',
  taskId: 'maria-123-456',
}

it('create Task -> Prep', async () => {
  expect(await createTask(testSuccessTask1)).toMatchObject({title: testSuccessTask1.title})
  expect(await createTask(testSuccessTask2)).toMatchObject({title: testSuccessTask2.title})
  expect(await createTask(testSuccessTask3)).toMatchObject({title: testSuccessTask3.title})
  expect(await createTask(testSuccessTask4)).toMatchObject({title: testSuccessTask4.title})
})
it('test getTaskByEditor', async () => {
  expect(await getTaskByEditor(testSuccessTask1)).toMatchObject({title: testSuccessTask1.title})
})

it('test getTasksByEditor', async () => {
  expect(await getTasksByEditor(testSuccessTask1)).toBeDefined()
  expect(await getTasksByEditor(testSuccessTask4)).toBeDefined()
})

it('test getTasksByProject', async () => {
  expect(await getTasksByProject({project: 'Testproject'})).toBeDefined()
//   expect(await getTasksByProject({project: 'xx'})).toThrowError()
})

it('test getTasksByWorkspace', async () => {
    expect(await getTasksByWorkspace({workspace: 'testWorkspace'})).toBeDefined()
})

it('delete Task -> end', async () => {
  expect(await deleteTask(testSuccessTask1)).toMatchObject({title: testSuccessTask1.title})
  expect(await deleteTask(testSuccessTask2)).toMatchObject({title: testSuccessTask2.title})
  expect(await deleteTask(testSuccessTask3)).toMatchObject({title: testSuccessTask3.title})
  expect(await deleteTask(testSuccessTask4)).toMatchObject({title: testSuccessTask4.title})
})
