process.argv.slice(2); // the [0] means it is grabbing the first item typed after slicing 
//console.log(process.argv.slice(2));
let arr = process.argv.slice(2) // will spit out an array with all the numbers we typed

let time = 1000;
console.log(arr);

for(let num of arr) { // loop through the array we input
  if (num < 0 || num === NaN) {
    return;
  } else {
    setTimeout(() => {
      console.log('\x07');
      console.log(num * time);
    }, num * time);
  }
};



