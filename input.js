const { connect } = require('./client');
const conn = connect();

// setup interface to handle user input from stdin

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {
  // console.log("checking keys", key)

  // to exit
  if (key === '\u0003') {
    process.exit();
  }

  // Move up
  if (key === 'w') {
    console.log("up")
    conn.write('Move: up');
  }

  // Move down
  if (key === 's') {
    console.log("down")
    conn.write('Move: down');
  }

  // Move left
  if (key === 'a') {
    console.log("left")
    conn.write('Move: left');
  }

  // Move right
  if (key === 'd') {
    console.log("right")
    conn.write('Move: right');
  }
};




module.exports = {
  setupInput
};