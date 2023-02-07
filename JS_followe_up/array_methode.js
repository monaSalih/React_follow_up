
//////////////////// MAP
// let numbers = [1, 2, 3, 4, 5];
// let squaredNumbers = numbers.map(function(number) {
//   return number * number;
// });
// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
//================>
// let number32 =[1,2,3,4];
// let squareNum=number32.map(function(num){
//     return num*num;
// })
// console.log(squareNum,"squarNum");
//================>

let list=[1,2,3,4,5,6,7,8];

const result = list.map(num => num * 10);

console.log(result,);
// //////////////////////////////////////////////////////////////////////////
////////////////REDUCE
let list2=[1,2,3,4,5,6,7,8];

const result3 = list2.reduce((cum,curr) =>{
    console.log(curr,"testtttttttt")
    return curr*curr
},0
   );

// console.log(result3);
//================>


// const arr = [1, 2, 3, 4, 5];

// const avg = arr.reduce((acc, curr) => acc + curr**2, 0) / arr.length;

// console.log(avg);

// //////////////////////////////////////////////////////////////////////////
///////////////////////////// FILTTER
// let numbers3 = [1, 2, 3, 4, 5, 6];
// let evens = numbers3.filter(function(number) {
//     return number % 2 === 0;
// });
// console.log(evens);
// let arr3=[1,2,3];
// let reduce_methode3=arr.reduce(function (acc, curr){
//     let square= curr * curr +acc;
//     return square;
// },0)
// console.log(reduce_methode3,"reduce_methode33333333333");
// let arr3=[1,2,3];
// let squar_num= arr3.reduce((acc,cur)=>acc+ cur*cur ,0)
// console.log(squar_num,"squar_num");


// let new_nu=[1,3,4,2,6];
// let events=new_nu.filter(function (num) {
//     if (num %2 === 0){
//         return num
//     }
    
// })

// console.log(events,"events");