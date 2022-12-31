// COmbinaisons de 2 nombres:

let nbr1 = 0;
let nbr2 = 0;



for(d = 0; d < 10; d++){
    for(u = 0; u < 10; u++){    
        for(i = 0; i < 10; i++){
            for(j = 0; j < 10; j++){
                nbr1 = d.toString() + u.toString();
                nbr2 = i.toString() + j.toString();
                
                if(nbr1 < nbr2){
                    console.log(nbr1 + " " + nbr2);
                }
            }
        }
    }
}
