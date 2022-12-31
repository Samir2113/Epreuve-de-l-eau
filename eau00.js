// Combinaisons de 3 chiffres:



function sort(array){
    if(array[0] < array[1] && array[1] < array[2]){
        console.log(array[0] + array[1] + array[2]);
    }
}

let nbrArray = [];

for(i = 0; i < 10; i++){
    nbrArray[0] = i.toString();
    for(j = 0; j < 10; j++){
        nbrArray[1] = j.toString();
        for(k = 0; k < 10; k++){
            nbrArray[2] = k.toString();
            sort(nbrArray);
        }
    }
}