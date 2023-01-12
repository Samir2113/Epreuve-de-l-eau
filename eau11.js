// Différence minimum absolue:



// Functions:
function min(array){
    let valMin = array[0];
    for(i = 1; i < array.length; i++){
        if(array[i] < valMin){
            valMin = array[i];
        }
    }
    return valMin;    
}

function calDiff(array){
    let diffArray = [];
    for(i = 0; i < array.length -1; i++){
        for(j = i+1; j < array.length; j++){
            let A = parseInt(array[i]);
            let B = parseInt(array[j]);
            let diff; 
            if(A < B){
                diff = B - A;    
                diffArray.push(diff);
            }else if(A >= B){
                diff = A - B;
                diffArray.push(diff);
            }
        }
    }
    return diffArray;
}

function newArray(array){
    let newA = [];
    for(i = 2; i < array.length; i++){
        newA.push(parseInt(array[i]));
    }
    return newA;
}

// Error:
function error(array){
    if(array.length > 1){
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
let inputArray = newArray(path);
let diffMin;

// Resolve:
if(error(inputArray)){
    diffMin = min(calDiff(inputArray));
}else{
    diffMin = "Error!";
}



// Display:

console.log(diffMin);
