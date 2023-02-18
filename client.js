const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: "50541",
  });


  conn.on("connect", () => {
    console.log("success, connected");
    // Displays snake name after connecting
    conn.write("Name: REB");
  });

  // ------ Automatic snake movement on connection

  // Commented out the following because we don't want the snake to automatically move each time it's connected:

  // conn.on("connect", () => {

  //   // Snake goes off screen:
  //   // setInterval(() => {
  //   //   conn.write("Move: up");
  //   // }, 50);

  //   // Snake moves up incrementally:
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 50);

  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 100);

  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 150);

  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 200);

  // });

  // ----- End comment for automatic snake movement



  // interpret incoming data as text
  conn.setEncoding("utf8");

  // receive data/messge from the server after idling
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

// console.log("Connecting ...");
// connect();

module.exports = {
  connect
};