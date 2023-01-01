///// String dans string:


// Function:
function searchStr(str1, str2){
    if(error(str1) && error(str2)){
        result = str1.indexOf(str2);
        if(result == -1){
            return false;
        }else{
            return true;
        }
    }else{
        return "Error!"
    }
}



// Error:
function error(str){
    if(isNaN(str) && str){
        return true;
    }else{
        return false;
    }
}



// Parsing
const path = process.argv;
const string1 = path[2];
const string2 = path[3];


// Resolve:
const string3 = searchStr(string1,string2);


// Display:
console.log(string3);