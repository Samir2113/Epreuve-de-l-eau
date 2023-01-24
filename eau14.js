// Par ordre Ascii


// Functions:
function lower_word(word1, word2){
    let first = word1.length;
    let second = word2.length;
    if(first <= second){
        return word1;
    }else if(first > second){
        return word2;
    }
}

function compare_letter(word1, word2){
    let lowWord = lower_word(word1, word2);
    let equal = 0;
    for(k = 0; k < lowWord.length; k++){
        let letterWord1 = word1.charAt(k).toUpperCase();
        let letterWord2 = word2.charAt(k).toUpperCase();
        if(letterWord1 < letterWord2){
            return word1;
        }else if(letterWord1 > letterWord2){
            return word2;
        }else if(letterWord1 == letterWord2){
            equal++;
        }
    }
    if(equal == lowWord.length){
        return lowWord;
    }
}


function ascii_sort(array){
    let newArray = array;
    for(i = 0; i < newArray.length; i++){
        for(j = 0; j < newArray.length -1; j++){
            let low = compare_letter(newArray[j], newArray[j+1]);
            if(newArray[j+1] == low){
                newArray[j+1] = newArray[j];
                newArray[j] = low;
            }
        }
    }
    return newArray;
}

function myNewArray(array){
    newA = [];
    for(i = 2; i < array.length; i++){
        newA.push(array[i]);
    }
    return newA;
}

// Error:
function error(array){
    if(array.length > 1){
        return true;
    }else{
        return false;
    }
}

// Parsing:
const path = process.argv;
const myArray = myNewArray(path);
let asciiArray = "";



// Resolve:
if(error(myArray)){
    let temp = ascii_sort(myArray);
    for(i = 0; i < myArray.length; i++){
        
        asciiArray += temp[i] + " ";
    }
}else{
    asciiArray = "Error!"
}

// Display:
console.log(asciiArray);

