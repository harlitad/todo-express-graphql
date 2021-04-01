const { verifyJwt } = require("./authJwt");

const isLoggedIn = (auth) => {
    const payload = verifyJwt(auth);
    return {
        loggedIn: true,
        user: payload.data,
    };
};

module.exports = {
    isLoggedIn,
};
