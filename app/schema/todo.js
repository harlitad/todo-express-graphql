const { gql } = require("apollo-server-express");

const todoSchema = gql`
    extend type Query {
        todo(id: Int!): Todo
        todos: [Todo]
    }

    type Todo {
        id: Int
        title: String
        userId: Int
        comments: [Comment]
    }

    type Comment {
        id: Int
        body: String
    }

    extend type Mutation {
        createTodo(
            id: Int
            title: String
            description: String
            userId: Int
        ): Todo

        updateTodo(id: Int, title: String): Todo
    }
`;

module.exports = {
    todoSchema,
};
