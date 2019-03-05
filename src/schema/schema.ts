/** @format */
import {gql} from 'apollo-server-express'
export const schema = gql`
  type Query {
    hello(name: String): String
    getTaskByEditor(editor: String): Task
    getTaskByProject(editor: String, project: String): Task
  }
  type Mutation {
    createTask(
      editor: String!
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
    ): Task
    editTask(
      editor: String!
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
    ): Task
    deleteTask(editor: String!, taskId: String!): Boolean
  }
  type Task {
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
    complexity: String
  }
`
