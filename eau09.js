// Entre min et max


// Functions:

function min(nbr1, nbr2){
    if(parseFloat(nbr1) < parseFloat(nbr2)){
        return nbr1;
    }else if(parseFloat(nbr1) > parseFloat(nbr2)){
        return nbr2;
        
    }
}

function max(nbr1, nbr2){
    if(parseFloat(nbr1) < parseFloat(nbr2)){
        return nbr2;
    }else if(parseFloat(nbr1) > parseFloat(nbr2)){
        return nbr1;
    }
}

function listNbr(nbr1, nbr2){
    let minNbr = min(nbr1, nbr2);
    let maxNbr = max(nbr1, nbr2);
    let list = "";
    for(i = minNbr; i < maxNbr; i++){
        list += i + " ";
    }
    return list;
}



// Error:
function error(nbr){
    if(isNaN(nbr) || path.length != 4){
        return false;
    }else{
        return true;
    }
}



// Parsing:
const path = process.argv;
const nbr1 = parseInt(path[2]);
const nbr2 = parseInt(path[3]);
let newList;


// Resolve:
if(error(nbr1) && error(nbr2)){
    newList = listNbr(nbr1, nbr2);
}else{
    newList = "Error!";
}


// Display:
console.log(newList);
