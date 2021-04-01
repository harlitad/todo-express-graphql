const { isLoggedIn } = require("../helpers/isLoggedIn");

exports.getTodo = async (parent, args, { db, req, auth }, info) => {
    const { loggedIn, user } = isLoggedIn(auth);
    if (loggedIn) {
        const todos = await db.todos.findAll({
            where: {
                userId: user.id,
            },
        });
        return todos;
    }
};

exports.getTodoById = async (parent, args, { db, req }) => {
    const todo = await db.todos.findOne({
        where: {
            id: args.id,
        },
    });
    return todo;
};

exports.createTodo = async (parent, args, { db, req }) => {
    const todo = await db.todos.create({
        title: args.title,
        description: args.description,
    });
    return todo;
};

exports.updateTodo = async (parent, args, { db, req }) => {
    const result = await db.todos.update(
        {
            title: args.title,
            description: args.description,
        },
        {
            where: {
                id: args.id,
            },
        }
    );
    if (result[0]) {
        return await db.todos.findByPk(args.id);
    } else {
        throw new Error(`gagal update todo ${args.id}`);
    }
};
