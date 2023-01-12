// Tri à bulle


// Function:
function bubbleSort(array){
    let newArray = array;
    for(j = 0; j < newArray.length; j++){
        for(i = 0; i < newArray.length; i++){
            if(newArray[i] > newArray[i+1]){
                let highVal = newArray[i];
                newArray[i] = newArray[i+1];
                newArray[i+1] = highVal;
            }
        }
    }
    return newArray;
}

function inputArray(input){
    let newArray = [];
    for(i = 2; i < input.length; i++){
        newArray.push(parseInt(input[i]));
    }
    return newArray;
}
// Error:
function error(array){
    if(array.length > 0){
        for(i = 0; i < array.length; i++){
            let value = array[i];
            if(isNaN(value)){
                return false;
            }
        }
        return true;
    }else{
        return false;
    }
}


// Parsing:
const path = process.argv;
let myArray = inputArray(path);
let myNewArray = "";

// Resolve:
if(error(myArray)){
    let array = bubbleSort(myArray);
    for(i = 0; i < myArray.length; i++){
        myNewArray += (array[i] + " ");
    }
}else{
    myNewArray = "Error!";
}
    


// Display:
console.log(myNewArray);

