// Tri à bulle


// Function:
function selectSort(array){
    let newArray = array;
    for(j = 0; j < newArray.length -1; j++){
        let lowVal = newArray[j];
        let index = j;
        let match = false;
        for(i = j+1; i < newArray.length; i++){
            if(newArray[i] < lowVal){
                lowVal = newArray[i];
                index = i;
                match = true;
            }
        }
        if(match){
            newArray[index] = newArray[j];
            newArray[j] = lowVal;
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
    let array = selectSort(myArray);
    for(i = 0; i < myArray.length; i++){
        myNewArray += (array[i] + " ");
    }
}else{
    myNewArray = "Error!";
}
    


// Display:
console.log(myNewArray);