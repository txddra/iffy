// Your code here!

//path to file
const colorCombinator = require('./color-combinator.js')
const colorDeconstructor = require('./color-deconstructor.js')


//grab user input

let input = getInput(0);
let input2 = getInput(1);

//  prints message stating if not given any values 
if(input === undefined && input2 === undefined){
  console.log("You need at least one value")

}//prints colorDeconstructor message if only given one color (secondary)
if(input !== undefined && input2 === undefined){
  let decon = colorDeconstructor(input)
  console.log(decon)
}
//prints colorCombinator message of both being two colors
if(input !== undefined && input2 !== undefined){
  console.log(colorCombinator(input,input2))
}
// if first input is undefined

// noFirst = colorCombinator(input,input2)





//print out the message
// console.log(noFirst)

// Our helper function here! Don't  touch!
function getInput(i) {
  return process.argv[i + 2];
}
