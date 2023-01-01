// Suite de Fibonacci


// Functions:
function error(index){
    if(!isNaN(index) && index >= 0){
        if(index.indexOf(".") == -1){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}


function fibonacci(index){
    let array = [0,1];
    for(i = 2; i < index +1; i++){
        array[i] = array[i-1] + array[i-2];
    }
    return array[index];
}


// User input:
const input = process.argv[2];


// Result:
if(error(input)){
    console.log(fibonacci(input));
}else{
    console.log(-1);
}
