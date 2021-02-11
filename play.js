const net = require('net');
const  connect  = require('./client');

/**
 * Establishes connection with the game server
 */


console.log('Connecting ...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const handleUserInput = (s) => {

  s.on('data', (k) => {
    if (k === '\u0003') {
      process.exit();
    }
  });

}
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin);
  return stdin;
}
setupInput();

