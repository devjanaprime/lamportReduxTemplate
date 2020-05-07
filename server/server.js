const express = require( 'express' );
const app = express();

const port = 5000;

app.listen( port, ()=>{
    console.log( 'server up on:', port );
})

app.get( '/test', ( req, res )=>{
    console.log( '/test GET hit' );
    res.send( 'buzzz' );
}) // end GET