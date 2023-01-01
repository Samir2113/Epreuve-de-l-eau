// Prochain nombre premier:


// Function:
function prime(nbr) {
    counter = 0;
    for(i = 1; i <= nbr; i++){
        if(nbr % i == 0){
            counter++
        }
    }
    if(counter == 2){
        return true;
    }else{
        return false;
    }
}

// Error:
function error(inputNbr){
    if(!isNaN(inputNbr) && inputNbr >= 0){
        if(inputNbr.toString().indexOf(".") == -1){
            input = parseInt(input);
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

// Parsing: 
let input = process.argv[2];


// Resolve:
if(error(input)){
    do{
        if(prime(input)){
            break;
        }else{
            input += 1;
        }
    }while(!prime(input));
}else{
    input = -1;
}


// Display:
console.log(input);

