const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./app/schema/typeDefs");
const { resolvers } = require("./app/schema/resolvers");
const db = require("./app/db/models")

app.use(express.json());

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context : ({req}) => {
        if(req.headers.authorization) {
            return {db}
        } else {
            throw new Error("Butuh token nih !")
        }
    },
});

server.applyMiddleware({ app })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
