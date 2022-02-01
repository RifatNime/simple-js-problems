const numbers = [44, 23, 34, 32, 45, 56, 17];
let sum = 0;
for (let i = 0; i < numbers.length; i++){

    let element = numbers[i];
    // console.log('Element: ',element);
    
    sum = sum + element;
}
// console.log(sum);

function arraySum(numbers){
    let sum = 0;
    for( let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
        
    }
    return sum;

}
const total = arraySum([24, 45, 67]); 
console.log(total);