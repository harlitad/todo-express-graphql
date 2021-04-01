const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./app/schema");
const { resolvers } = require("./app/resolvers");
const db = require("./app/db/models");

app.use(express.json());

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        return {
            req,
            db,
            auth:
                req && req.headers.authorization
                    ? req.headers.authorization
                    : null,
        };
    },
});

app.post('/graphql', (req, res, next) => {
    // console.log(req.headers.authorization)
    console.log(req.query)
    console.log("test")
    next()
})

server.applyMiddleware({ app });


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
