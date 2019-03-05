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
const testfailTask: any = {
  workspace: 'aaaa',
  editor: 'cc',
}

it('create Task -> Prep', async () => {
  expect(await createTask(testSuccessTask1)).toMatchObject({title: testSuccessTask1.title})
  expect(await createTask(testSuccessTask2)).toMatchObject({title: testSuccessTask2.title})
  expect(await createTask(testSuccessTask3)).toMatchObject({title: testSuccessTask3.title})
  expect(await createTask(testSuccessTask4)).toMatchObject({title: testSuccessTask4.title})
})
it('test getTaskByEditor', async () => {
  await expect(getTaskByEditor(testSuccessTask1)).resolves.toMatchObject({title: testSuccessTask1.title})
  await expect(getTaskByEditor(testfailTask)).rejects.toThrow()
})

it('test getTasksByEditor', async () => {
  await expect(getTasksByEditor(testSuccessTask1)).resolves.toBeDefined()
  await expect(getTasksByEditor(testSuccessTask4)).resolves.toBeDefined()
  await expect(getTasksByEditor(testfailTask)).rejects.toThrow()
})

it('test getTasksByProject', async () => {
  await expect(getTasksByProject({project: 'Testproject'})).resolves.toBeDefined()
  await expect(getTasksByProject({project: 'xxxx'})).rejects.toThrow()
})

it('test getTasksByWorkspace', async () => {
  await expect(getTasksByWorkspace({workspace: 'testWorkspace'})).resolves.toBeDefined()
  await expect(getTasksByWorkspace({workspace: 'xxxx'})).rejects.toThrow()
})

it('delete Task -> end', async () => {
  expect(await deleteTask(testSuccessTask1)).toMatchObject({title: testSuccessTask1.title})
  expect(await deleteTask(testSuccessTask2)).toMatchObject({title: testSuccessTask2.title})
  expect(await deleteTask(testSuccessTask3)).toMatchObject({title: testSuccessTask3.title})
  expect(await deleteTask(testSuccessTask4)).toMatchObject({title: testSuccessTask4.title})
})
