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



// Parsing:
let string = process.argv[2];



// Resolve:
let newStr = upperFirstLetter(string);


// Display:

console.log(newStr);
