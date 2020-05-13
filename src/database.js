const mongoose = require( 'mongoose' );

    // Se exporta la funci'on de conexion
module.exports = { connect };

    // Conexion a la BD
async function connect(){
    await mongoose.connect( 'mongodb://localhost/flutter-node-tutorial', {
        useNewUrlParser : true,
        useUnifiedTopology : true
    } );
    console.log( 'Database conected' )
};