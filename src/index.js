    // Importamos la configuracion del servidor para poder iniciarlo
const app = require( './app' );

    // Importamos la funci'on connect de database ( conexion a la bd )
const { connect } = require( './database');
main();


async function main(){
        // Database conection
    await connect();
        // Express APP ( Se lanza la app )
    await app.listen( 4000 );
    console.log( 'Serever on port 4000 : Connected ' );
}