// Chiffres only


// Functions:
function isNbr(char){
    if(char.search(/[0-9]/i) == 0){
        return true;
    }else{
        return false;
    }
}

function onlyNbr(input){
    for(i = 0; i < input.length; i++){
        let char = input.charAt(i);
        if(!isNbr(char)){
            return false;
        }
    }
    return true;
}


// Error:
function error(str){
    if(path.length != 3){
        return false;
    }else{
        return true;
    }
}


// Parsing:
const path = process.argv;
const string = path[2];
let outputString = false;


// Resolve:
if(error(string)){
    outputString = onlyNbr(string);
}else{
    outputString = "Error!"
}


// Display:
console.log(outputString);