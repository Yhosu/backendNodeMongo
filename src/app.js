// Configuracion del servidor en NODE

    // El servidor de node
const express = require( 'express'); 
const app     = express();

    // Obtener m'as informaci'on acerca de las peticiones
const morgan  = require( 'morgan' );

    // Para que nuestro servidor se pueda conectar con otros servidores
const cors    = require( 'cors' );

    // Aqui se indica que se use morgan en el modo desarrollador y se activa cors
app.use( morgan( 'dev' ) );
app.use( cors() );

app.use( require( './routes/users' ) );
    // Se exporta la variablbe app ( El servidor de node js )
module.exports = app;