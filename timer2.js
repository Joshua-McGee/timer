const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////
let time = 1000;
// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  //process.stdout.write('.'); prints a period when pressed
  if (key === '\u0003') { // this is the control + C key
    console.log('Thanks for using me, ciao!');
    process.exit();
  } else if (key === 'b') {
    console.log('\x07');
  } else if (key === '1' || '2' || '3' || '4' || '5' || '6'|| '7' || '8' || '9') {
    console.log(`setting timer for ${key} seconds`);
        setTimeout(() => {
          console.log('\x07');
          //console.log(key * time);
        }, key * time);
    };
});

console.log('after callback');
