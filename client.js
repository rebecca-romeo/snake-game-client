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


  conn.on("connect", () => {

    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);

    setTimeout(() => {
      conn.write("Move: up");
    }, 50);

    setTimeout(() => {
      conn.write("Move: up");
    }, 100);

    setTimeout(() => {
      conn.write("Move: up");
    }, 150);

    setTimeout(() => {
      conn.write("Move: up");
    }, 200);

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // receive data/messge from the server after idling
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
  connect
};