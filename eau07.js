// Majuscule:


// Function:
function upperFirstLetter(str){
    let newString = "";
    for(i = 0; i < str.length; i++){
        let firstChar = str.charAt(0);
        let wordChar = str.charAt(i);
        let previousWordChar = str.charAt(i-1);
        if(letter(wordChar) && space(previousWordChar)){
            newString += wordChar.toUpperCase();
        }else if(letter(wordChar) && letter(previousWordChar)){
            newString += wordChar.toLowerCase();
        }else if(i == 0 && letter(firstChar)){
            newString += firstChar.toUpperCase();
        }else{
            newString += wordChar;
        }    
    }
    return newString;
}

function letter(wordChar){
    let letter = wordChar.search(/[a-z]/i);
    if(letter == 0){
        return true;
    }else{
        return false;
    }
}

function space(wordChar){
    let space = wordChar.search(/[\s\t\n]/g);
    if(space == 0){
        return true;
    }else{
        return false;
    }
}

// Error:
function error(str){
    if(str === undefined || !isNaN(str)){
        return false;
    }else{
        return true;
    }
}


// Parsing:
let string = process.argv[2];
let newStr = "";


// Resolve:

if(error(string)){
    newStr = upperFirstLetter(string);
}else{
    newStr = "Error!"
}



// Display:

console.log(newStr);
