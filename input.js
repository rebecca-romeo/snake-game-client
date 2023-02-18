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

  // MOVEMENTS
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

  // MESSAGES


  // hi greeting
  if (key === 'h') {
    console.log("hi")
    conn.write('Say: Hi');
  }

  // lets play
  if (key === 'p') {
    console.log("Let's play!")
    conn.write('Say: Lets play!');
  }

  // cheer
  if (key === 'c') {
    console.log("Yesss, score!")
    conn.write('Say: Yesss, score!');
  }
};




module.exports = {
  setupInput
};