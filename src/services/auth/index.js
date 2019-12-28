const JwtServices = require('./jwt');
const { auth } = require('./../../constants/auth');

const exampleUser = (source, email, password, fbToken) => {
    return {
        userId: 11,
        loginSource: source ? source : auth.method.jwt,
        userProfile: {
            email: email ? email : "test@jwt-o-facebook.com",
            profileImage: "https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg",
            name: "Pilo",
            surname: "Basualdo",
            cellphone: "+5491133071114",
            dni: "40399433"
        },
        participatingDraws: [10000, 1200]
    };
};

const signin = (source, email, password, fbToken) => {
    const user = exampleUser(source, email, password, fbToken);
    const jwt = JwtServices.sign({ id:user.userId });
    return { user, jwt }
};

const signup = ( source, email, password, fbToken ) => {
    const { auth } = require('./../../constants/auth');
    const user = exampleUser(source, email, password, fbToken);
    const jwt = JwtServices.sign({ id:user.userId });
    return { user, jwt }
};

const jwtToUser = (jwt) => {
    return exampleUser();
};

const isValidJwt = (decodedJwt) => {
    return true;
};

module.exports = {
    signup,
    signin,
    jwtToUser,
    isValidJwt
};