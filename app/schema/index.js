const { gql } = require("apollo-server-express");
const { authSchema } = require("./auth");
const { todoSchema } = require("./todo");

const root = gql`
    type Query {
        root: String
    }

    type Mutation {
        root: String
    }
`;

module.exports = {
    typeDefs: [root, todoSchema, authSchema],
};
