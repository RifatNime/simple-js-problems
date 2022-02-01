const business = 1650;
const minister = 850;
const army = 900;
// if (business > minister){
//     console.log("Buisnssman");
// }
// else {
//     console.log('Minister')
// }

/* if(business > minister && business > army){
    console.log("Business is bigger.")
}
else if(minister > business && minister > army){
    console.log("minister is bigger.");
}
else if(army > business && army > minister){
    console.log("army is bigger.");
} */
//-------------------------------------------------bigger
function findMax(business, minister, army){

    if(business > minister && business > army){
        console.log("Business is bigger.")
        return business;
    }
    else if(minister > business && minister > army){
        console.log("minister is bigger.");
        return minister;
    }
    else{
        console.log("army is bigger.");
        return army;
    }
}
const max = findMax(1650, 850, 900);
console.log('Largest: ', max);
//-----------------------------------------------------smaller
function findMin(business, minister, army){

    if(business < minister && business < army){
        console.log("Business is Smaller.")
        return business;
    }
    else if(minister < business && minister < army){
        console.log("minister is Smaller.");
        return minister;
    }
    else{
        console.log("army is Smaller.");
        return army;
    }
}

const min = findMin(1650, 850, 900);
console.log('Largest: ', min);