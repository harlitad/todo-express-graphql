const lodash = require("lodash");
const { getTodo, updateTodo, createTodo, getTodoById } = require("./todo");
const { auth } = require("./auth");

const todo = {
    Query: {
        todos: getTodo,
        todo: getTodoById,
    },

    Mutation: {
        updateTodo: updateTodo,
        createTodo: createTodo,
    },
};

const resolvers = lodash.merge(todo, auth);

module.exports = {
    resolvers,
};
