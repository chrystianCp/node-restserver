const mongoose = require('mongoose');


const dbConnection = async() => {

    try {

        mongoose.connect( process.env.MONGODB_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,                        
        });

        console.log('Data base online');
        
    } catch (error) {
        console.log(error);
        throw new Error('error de conexion con la base de datos');
    }

}


module.exports = {
    dbConnection
}