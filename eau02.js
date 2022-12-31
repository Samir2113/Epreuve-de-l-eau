// Paramètres à l'envers: 


const path = process.argv;

if(path.length < 3){
    console.log("Error!");
}else{
    for(i = path.length -1; i > 1; i--){
        console.log(path[i]);
    }
}
