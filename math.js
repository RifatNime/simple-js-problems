// //all type of number will be positive
// // const myNumber = -5;
// // const myNumber = 2.6938;
// // const output = Math.abs(myNumber);
// // const output = Math.ceil(myNumber);
// // const output = Math.floor(myNumber);
// // const output = Math.round(myNumber);
// // const output = Math.random(myNumber) * 6;
// // const rounded = Math.floor(output);
// // console.log(rounded);
// //ludu
// for (let i = 0; i <= 20; i++){
//     const output = Math.random() * 100;
//     const rounded = Math.round(output);
//     // console.log(rounded);
// }



// Math.random();

// // to gerate a randome rounded number between 1 to 10;
// var theRandomNumber = Math.round(Math.random() * 10);

var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if(letter == "I" ){
    count++;
  }
}
console.log(count);