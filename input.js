let connection;
const net = require('net');

const handleUserInput = (s) => {

  s.on('data', (k) => {
    if (k === '\u0003') {
      process.exit(); 
    } 

    if (k === 'w') {
      connection.write('Move: up');
    }

    if (k === 's') {
      connection.write('Move: down');
    }

    if (k === 'a') {
      connection.write('Move: left');
    }

    if (k === 'd') {
      connection.write('Move: right');
    } 
  });
}

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin);
  return stdin;
}

module.exports = setupInput;