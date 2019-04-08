/** @format */
import {gql} from 'apollo-server-express'
export const schema = gql`
  type Query {
    hello(name: String): String
    getTaskByEditor(workspace: String!, taskId: String!): Task
    getTasksByEditor(workspace: String!, editor: String!): [Task]
    getTasksByProject(editor: String!, project: String!): [Task]
    getTasksByWorkspace(workspace: String!): [Task]
  }
  type Mutation {
    createTask(
      workspace: String!
      editor: String!
      taskId: String!
      creator: String
      title: String!
      description: String
      priority: Int
      project: String
      parentProject: String
      startTime: String
      endTime: String
      category: String
      doState: String
      complexity: String
      dueDate: String
    ): Task
    editTask(
      workspace: String!
      editor: String
      taskId: String!
      creator: String
      title: String
      description: String
      priority: Int
      project: String
      parentProject: String
      startTime: String
      endTime: String
      category: String
      doState: String
      complexity: String
      dueDate: String
    ): Task
    deleteTask(workspace: String!, taskId: String!): Boolean
  }
  type Task {
    workspace: String
    taskId: String
    editor: String
    creator: String
    title: String
    description: String
    priority: Int
    project: String
    parentProject: String
    startTime: String
    endTime: String
    category: String
    doState: String
    dueDate: String
    complexity: String
  }
`
