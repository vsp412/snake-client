
const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  conn.on('connect', () => {
    console.log("Successfully connected to game server")
    // conn.write('Move: up');

    // setInterval(() => {conn.write('Move: up');
    // }, 1000);
    conn.write('Name: VSP');
    

  })
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}

module.exports = connect;