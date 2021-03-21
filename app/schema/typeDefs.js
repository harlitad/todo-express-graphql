const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Query {
        todo: Todo
        todos: [Todo]
    }

    type Todo {
        id: Int
        title: String
        userId: Int
        comments : [Comment]
    }

    type Comment {
        id : Int
        body : String
    }

    type Mutation {
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
    typeDefs,
};
