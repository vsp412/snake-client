const net = require('net');
const  connect  = require('./client');
const setupInput = require('./input');

/**
 * Establishes connection with the game server
 */


console.log('Connecting ...');
let c = connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */


setupInput(c);

