const net = require('net');


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

module.exports = setupInput;