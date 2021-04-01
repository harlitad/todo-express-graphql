const { generateJwt } = require("../helpers/authJwt");

const auth = {
    Mutation: {
        login: (parent, { email, password }) => {
            // 1. something checking to db
            console.log({ email, password });
            // 2. if user found, generate a jwt
            const data = generateJwt();
            return {
                token : data.token,
                id: data.id,
                username: data.username,
                email: data.email,
            };
        },
    },
};

module.exports = { auth };
