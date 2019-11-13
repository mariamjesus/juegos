"use strict";

function aleatorioNum(){
    var nJugadores=2;

    var partida=new Array(nJugadores);
    var i,j;
    var jug1CartMax, jug2CartMax;
 //FOR BIDIMENSIONAL PARA RELLENAR JUGADORES CON SUS CARTAS
    for(i=0;i<partida.length;i++){
        partida[i]=new Array(2);//creo array dibimensional para las cartas, 2
        for(j=0;j<partida[i].length;j++){
            partida[i][j]= Math.floor(Math.random() * (13 - 1)) + 1;//creo aleatorios
        }//end for j para carta     
    }//end for i para el jugador
    
    for(i=0;i<partida.length;i++){ //for para sacar el mayor de la carta
        partida[i].sort(function(a, b) { //function para ordenar num en array
            return a - b;
        }); //posicion donde esta guardada el mayor
        
    }//end for
    jug1CartMax=partida[0][1];
    jug2CartMax=partida[1][1];
    //if para comparar cartas mas alta de cada jugador
    if(jug1CartMax>jug2CartMax){
        document.getElementById("resultado").innerHTML="el jugador 1";
    }else if(jug1CartMax<jug2CartMax){
        document.getElementById("resultado").innerHTML="el jugador 2";
    }else if(jug1CartMax===jug2CartMax){
        document.getElementById("resultado").innerHTML="no hay ganador, numeros iguales";

    }
    
}//end funct 
