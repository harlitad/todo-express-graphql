const jwt = require("jsonwebtoken");
const SECRET_KEY = `trialgraphql`;

const generateJwt = () => {
    const user = {
        id: 1,
        username: "admin",
        email: "admin@mail.com",
        password: "admin"
    };
    const token = jwt.sign({ data: user }, SECRET_KEY);
    console.log(token);
    return {token, ...user};
};

const verifyJwt = (token) => {
    const result = token.split(" ")[1]
    const decoded = jwt.verify(result, SECRET_KEY);
    console.log(decoded);
    return decoded;
};

module.exports = {
    generateJwt,
    verifyJwt,
};
