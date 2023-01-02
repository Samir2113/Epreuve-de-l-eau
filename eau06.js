// Majuscule sur deux:


// Function:

function wordChar(letter){
    let result = letter.search(/[a-z]/i);
    if(result == 0){
        return true;
    }else{
        return false;
    }
    
}
function upper(str){
    if(error(str)){
        let newStr = "";
        let counter = 0;
        for(i = 0; i < str.length; i++){
            let strChar = str.charAt(i);
            let odd = counter % 2;
            if(wordChar(strChar) && odd == 0){  
                newStr += strChar.toUpperCase();
                counter++
            }else if(wordChar(strChar) && odd != 0){
                newStr += strChar;
                counter++
            }else if(!wordChar(strChar)){
                newStr += strChar;
            }
        }
        return newStr;
    }else{
        return "Error!";
    }

}


// Error:
function error(string){
    if(!isNaN(string) || !string){
        return false;
    }else{
        return true;
    }
}



// Parsing:
let str = process.argv[2];

// Resolve:
const upperString = upper(str)


// Display:
console.log(upperString);