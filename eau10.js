// Index wanted:


// Functions:
function itemList(array){
    let newArray = [];
    for(i = 2; i < array.length; i++){
        newArray.push(array[i]); 
    }
    return newArray;
}

function search(array){
    let index = -1;
    for(i = 0; i < array.length -1; i++){
        if(array[i] == lastItem){
            index = i;
            break;
        }
    }
    return index;
}


// Error:
function error(array){
    if(array.length >= 2){
        return true;
    }else{
        return false;
    }
}


// Parsing:
const path = process.argv;
let myArray = itemList(path);
let lastItem = myArray[myArray.length-1];
let firstIndex = 0;


// Resolve:

if(error(myArray)){
    firstIndex = search(myArray);
}else{
    firstIndex = "Error!"
}

// Display:
console.log(firstIndex);
