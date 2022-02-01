//Largest Value
function largestElement(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;

}
const ages = [12, 23, 54, 51, 29, 35];
const oldest = largestElement(ages);
const oldest2 = largestElement([-22, -6, -17]);
console.log('Oldest: ', oldest2);
//Smallest value
function largestElement(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < largest){
            largest = element;
        }
    }
    return largest;

}
const ages = [12, 23, 54, 51, 29, 35];
const oldest = largestElement(ages);
const oldest2 = largestElement([-22, -6, -17]);
console.log('Oldest: ', oldest2);