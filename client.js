
const net = require('net');
const co = require('./constants');
const connect = function() {
  const conn = net.createConnection({ 
    host: co.IP,
    port: co.PORT
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