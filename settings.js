module.exports = {
    server: {
        host: "localhost",
        port: 3000,
    },
    mongo: {
        url: "mongodb://localhost/sorteando"
    },
    jwt: {
        // https://mkjwk.org/
        audience: "localhost:3000/signin",
        issuer: "localhost:3000",
        key: "lwxGE6vQ7b16CGg4aUOpY5+krlgI3dc3gwZs/xr9UkLAd2aeuA/VjNRCw8RGzRxAMUSsI5zKDSbCJy8MWsnCc9QqvANL68flCUaBP6q/CBOA/1QgSpS0BIWNU2Oxx9tCLeZ5MogBmnCbjTi+sYAlQgjAjxi3TSzFQm57DihpsA+XGjfXEXeWjiGpF3zTOVqCalEOM2gCDj/RTIWql6MxnNEVO6hAzCWZHw0K2o/cV02TgFHR+/BRfCM5YbivPkGT5usAJ0zNykwTWfNl/gtCAsdxiUf6Wkwj/MIZvP9yWvEB1GRH+HOh0bSAOpxW1D1lWdvPmETWV55YT8Bh4IXFxQ=="
    },
    infobip: {
        publicKey: '8e0abf26b323b88336f7e11f2ab626b3-8edf9af5-3ee2-4295-807b-4e585b42811f',
    }
};