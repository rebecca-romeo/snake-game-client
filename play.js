// const { stdout } = require('process');
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
    conn.write('Move: up');
  }

  // Move down
  if (key === 's') {
    conn.write('Move: down');
  }

  // Move left
  if (key === 'a') {
    conn.write('Move: left');
  }

  // Move right
  if (key === 'd') {
    conn.write('Move: right');
  }
};


setupInput();




