const { gql } = require("apollo-server-express");

authSchema = gql`
    type AuthPayload {
        id: ID!
        username: String
        email: String
        token: String
    }

    extend type Mutation {
        login(email: String, password: String ): AuthPayload
    }
`;

module.exports = {
    authSchema,
};
