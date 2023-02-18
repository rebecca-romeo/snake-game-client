const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: "50541",
  });


  conn.on("connect", () => {
    console.log("success, connected");
    conn.write("Name: REB");
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