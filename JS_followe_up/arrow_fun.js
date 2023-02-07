// Arrow function
const counterFunc = (counter) => {
  if (counter > 100) {
    counter = 0;
  } else {
    counter++;
  }
  
  return counter;
};
//================>
// let greet = (name) => {
//     console.log(`Hello, ${name}!`);
// }
// greet("John");  
// if condition
//================>
// Call back function
// let numbers = [1, 2, 3, 4];

// function processArray(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = callback(array[i]);
//   }
// }
//================>
let nnm=[1,2,3,4]
function procceArray(array,callback){
for (let i = 0; i < array.length; i++) {
    array[i] = callback(array[i]);
    
}
}
function double(x){
    return x*2;
}
procceArray(nnm,double)
console.log( nnm,"call back");

/////////IF condition
7>=4 ? console.log(true): console.log(False)


let x =5;
x>8 ? console.log("correct"): console.log("not correct");

//================>
// (1 < 2)
//   ? (() => {
//       for (let index = 0; index < 5; index++) {
//         console.log("hi");
//       }
//     })()
//   : console.log("bye");
