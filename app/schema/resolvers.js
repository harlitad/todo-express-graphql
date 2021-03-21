

const resolvers = {
    Query: {
        todo: () => {
            const data = {
                id: 1,
                title: "test",
                description: "description",
                userId : 1
            };
            return data;
        },

        todos: async (parent, _, { db }) => {
            console.log(db)
            return await db.todos.findAll();
        },

        user: async (parent, data, {db}) => {
            const data = await db.users.findOne({where : {
                id : data.id
            },
            include : {
                model : db.todos
            }
        })
        return data
        }
    },

     Mutation : {
         createTodo : (parent, data, { db }) => {
            const create = db.todos.create(data)
            return create
         },

         updateTodo : async (parent, data, { db }) => {
             const update = await db.todos.update({title : data.title}, {
                 where : {
                     id : data.id
                 }
             })
             console.log(update)
             if(update[0]){
                const todo = db.todos.findOne({
                    where : {
                        id : data.id
                    }
                })
                return todo
             } else {
                 throw new Error("tidak berhasil update !")
             }
         }
     }
};

module.exports = {
    resolvers,
};
